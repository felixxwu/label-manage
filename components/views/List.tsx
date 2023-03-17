import { debounce, Fab, IconButton } from '@mui/material'
import { ListItem } from '../ListItem'
import { CompactViewSwitch } from '../CompactViewSwitch'
import { Sort } from '../Sort'
import { store } from '../../utils/store'
import { useEffect } from 'react'
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
import { Chips } from '../Chips'
import { StylesSelector } from '../StylesSelector'

export function List() {
  const { db } = store()

  useEffect(() => {
    window.scrollTo(0, store().listScrollPos)
    window.onscroll = debounce(() => {
      store().listScrollPos = window.scrollY
    }, 100)

    return () => {
      window.onscroll = null
    }
  }, [])

  async function showMusic() {
    window.location.href += '/music'
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
              window.location.href += '/label/' + doc.id
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
      if (store().styleFilter.length === 0) return true
      return store().styleFilter.some(style => label.styles.includes(style))
    })
    .sort((a, b) => {
      if (store().sort === 'follower') {
        return (isNaN(b.followers) ? 0 : b.followers) - (isNaN(a.followers) ? 0 : a.followers)
      }
      if (store().sort === 'name') {
        return a.name > b.name ? 1 : -1
      }
      return 0
    })
    .sort((a, b) => {
      return !a.inactive && b.inactive ? -1 : 1
    })

  const handleStyleSelect = async (styles: string[]) => {
    store().styleFilter = styles
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

      <Link onClick={showMusic}>
        {store().extra.songs.length} song{store().extra.songs.length === 1 ? '' : 's'} ready to send
        out
      </Link>

      {store().labels.length === 0 ? (
        <div>No labels added yet :(</div>
      ) : (
        <>
          <StyleFilter>
            Filter by style:
            <Chips
              chips={store().extra.styles}
              onSelect={handleStyleSelect}
              colorful
              selection={store().styleFilter}
              addDialog={() => (
                <StylesSelector onSelectStyle={async () => {}} ignore={[]} editOnlyMode />
              )}
            />
          </StyleFilter>

          <Options>
            <CompactViewSwitch />
            <Sort />
          </Options>

          <ListItems compact={store().extra.compact}>
            {labels.map((label, i) => {
              return <ListItem label={label} index={i} key={i} />
            })}
          </ListItems>
        </>
      )}

      <Fab
        onClick={handleAddLabel}
        color='secondary'
        sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
        size='large'
      >
        <Add color='primary' />
      </Fab>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
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
`

const Link = styled('a')`
  cursor: pointer;
  text-decoration: underline;
`

const StyleFilter = styled('div')`
  display: flex;
  gap: 10px;
  flex-direction: column;
`
