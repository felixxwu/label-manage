import { debounce, Fab, IconButton, TextField } from '@mui/material'
import { ListItem } from '../ListItem'
import { CompactViewSwitch } from '../CompactViewSwitch'
import { Sort } from '../Sort'
import { store } from '../../utils/store'
import { useEffect, useState } from 'react'
import Add from '@mui/icons-material/Add'
import styled from '@emotion/styled'
import { addDocTyped } from '../../utils/db'
import { reScrapeData } from '../../utils/scrape'
import { Header } from '../Header'
import MenuIcon from '@mui/icons-material/Menu'
import { getAuth } from 'firebase/auth'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import DownloadIcon from '@mui/icons-material/Download'
import GoogleIcon from '@mui/icons-material/Google'
import Email from '@mui/icons-material/Email'
import { Chips } from '../Chips'
import { StylesSelector } from '../StylesSelector'

import { useRouter } from 'next/router'
import { consts } from '../../utils/consts'

export function List() {
  const { db } = store()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('/api/getPopularity?name=Fokuz')

    window.scrollTo(0, store().listScrollPos)
    window.onscroll = debounce(() => {
      store().listScrollPos = window.scrollY
    }, 100)

    return () => {
      window.onscroll = null
    }
  }, [])

  async function showMusic() {
    router.push('/music')
  }

  async function showTemplate() {
    router.push('/template')
  }

  function handleAddLabel() {
    store().dialog = {
      message: 'New label',
      input: 'Label name',
      actions: [
        { label: 'Cancel' },
        {
          label: 'OK',
          callback: async name => {
            if (name && db) {
              const doc = await addDocTyped(db, name)
              if (!doc) return
              router.push('/label/' + doc.id)
            }
          },
          callOnEnter: true,
        },
      ],
    }
  }

  function handleMenu() {
    const choices = [
      { label: 'Open Music Library', onChoose: showMusic, icon: <QueueMusicIcon /> },
      { label: 'Edit Email Template', onChoose: showTemplate, icon: <Email /> },
      { label: 'Re-scrape All Data', onChoose: reScrapeData, icon: <SmartToyIcon /> },
      { label: 'Export Data', onChoose: handleExport, icon: <DownloadIcon /> },
      { label: 'Sign Out', onChoose: () => getAuth().signOut(), icon: <GoogleIcon /> },
    ]
    store().dialog = {
      message: '',
      multiselect: {
        choices: choices.map(c => ({ label: c.label, icon: c.icon })),
        onChoose(choice) {
          choices.find(c => c.label === choice)?.onChoose?.()
        },
      },
      actions: [{ label: 'Close' }],
    }
  }

  function handleExport() {
    const filename = 'data.json'
    const jsonStr = JSON.stringify(store())

    let element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr))
    element.setAttribute('download', filename)

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
  }

  const labels = store()
    .labels.slice()
    .filter(label => {
      if (searchTerm && !label.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
      if (store().styleFilter.length === 0) return true
      return store().styleFilter.some(style => label.styles.includes(style))
    })
    .sort((a, b) => {
      if (store().sort === 'follower') {
        return (isNaN(b.followers) ? 0 : b.followers) - (isNaN(a.followers) ? 0 : a.followers)
      }
      if (store().sort === 'popularity') {
        return (isNaN(b.popularity) ? 0 : b.popularity) - (isNaN(a.popularity) ? 0 : a.popularity)
      }
      if (store().sort === 'name') {
        return a.name > b.name ? 1 : -1
      }
      return 0
    })

  const activeLabels = labels.filter(label => !label.inactive)
  const activeLabelsWithSubmission = activeLabels.filter(label => label.submission)
  const activeLabelsWithoutSubmission = activeLabels.filter(label => !label.submission)
  const inactiveLabels = labels.filter(label => label.inactive)

  const handleStyleSelect = async (styles: string[]) => {
    store().styleFilter = styles
  }

  const handleStyleDelete = async (item: string) => {
    await handleStyleSelect(store().styleFilter.filter(style => style !== item))
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Wrapper>
      <Header
        left={
          <IconButton onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
        }
      >
        <h1>Label List</h1>
      </Header>

      {store().labels.length === 0 ? (
        <div>No labels added yet :(</div>
      ) : (
        <>
          <SearchAndOptions>
            <Search
              label='Search...'
              size='small'
              value={searchTerm}
              onChange={handleSearch}
              variant='filled'
              sx={{ borderBottom: 'none' }}
            />

            <Options>
              <CompactViewSwitch />
              <Sort />
            </Options>
          </SearchAndOptions>

          <Link onClick={showMusic}>
            {store().extra.songs.length} song{store().extra.songs.length === 1 ? '' : 's'} ready to
            send out
          </Link>

          <ListWrapper>
            <StyleFilter>
              Filter by style:
              <Chips
                chips={store().styleFilter}
                onDelete={handleStyleDelete}
                skipDeleteDialog
                colorful
                addDialog={({ closeDialog }) => (
                  <StylesSelector
                    onSelectStyle={async styles => {
                      handleStyleSelect([...store().styleFilter, ...styles])
                      closeDialog()
                    }}
                    ignore={store().styleFilter}
                    onClose={closeDialog}
                  />
                )}
              />
            </StyleFilter>

            <ListItems compact={store().extra.compact}>
              {activeLabelsWithSubmission.map((label, i) => {
                return <ListItem label={label} index={i} key={i} />
              })}
            </ListItems>
          </ListWrapper>

          {activeLabelsWithoutSubmission.length > 0 && (
            <>
              <h2 style={{ alignSelf: 'flex-start', margin: '20px 0 10px 0' }}>
                No submission info
              </h2>
              <ListItems compact={store().extra.compact}>
                {activeLabelsWithoutSubmission.map((label, i) => {
                  return <ListItem label={label} index={i} key={i} />
                })}
              </ListItems>
            </>
          )}

          {inactiveLabels.length > 0 && (
            <>
              <h2 style={{ alignSelf: 'flex-start', margin: '20px 0 10px 0' }}>Do not submit to</h2>
              <ListItems compact={store().extra.compact}>
                {inactiveLabels.map((label, i) => {
                  return <ListItem label={label} index={i} key={i} />
                })}
              </ListItems>
            </>
          )}
        </>
      )}

      <Fab
        onClick={handleAddLabel}
        color='secondary'
        sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
        size='large'
        variant='extended'
      >
        <Add color='primary' sx={{ mr: 1 }} />
        New Label
      </Fab>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const SearchAndOptions = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`

const ListWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ListItems = styled('div')<{ compact: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ compact }) => (compact ? '' : '20px')};
`

const Options = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Link = styled('a')`
  cursor: pointer;
  text-decoration: underline;
  width: 100%;
  text-align: center;
`

const StyleFilter = styled('div')`
  display: flex;
  gap: 10px;
  align-items: center;
`

const Search = styled(TextField)`
  width: 100%;
`
