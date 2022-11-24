import { Button, CircularProgress, debounce, Fab } from '@mui/material'
import { ListItem } from '../ListItem'
import LibraryMusicIcon from '@mui/icons-material/QueueMusic'
import { fade } from '../../utils/animate'
import { setHistory } from '../../utils/history'
import { CompactViewSwitch } from '../CompactViewSwitch'
import { Sort } from '../Sort'
import { store } from '../../utils/store'
import { useEffect } from 'react'
import Add from '@mui/icons-material/Add'
import styled from '@emotion/styled'
import { ExportDataButton } from '../buttons/ExportDataButton'
import { addDocTyped } from '../../utils/db'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import { reScrapeData } from '../../utils/scrape'

export function List() {
    setHistory('')

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
        await fade()
        store().showMusic = true
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
                            await fade()
                            store().selectedLabelId = doc.id
                        }
                    },
                    callOnEnter: true,
                },
            ],
        }
    }

    const labels = store()
        .labels.slice()
        .sort((a, b) => {
            if (store().sort === 'follower') {
                return (
                    (isNaN(b.followers) ? 0 : b.followers) - (isNaN(a.followers) ? 0 : a.followers)
                )
            }
            if (store().sort === 'name') {
                return a.name > b.name ? 1 : -1
            }
            return 0
        })
        .sort((a, b) => {
            return !a.inactive && b.inactive ? -1 : 1
        })

    if (labels.length === 0) {
        return <CircularProgress />
    }

    return (
        <Wrapper>
            <h1>Label List</h1>

            <Button onClick={showMusic} startIcon={<LibraryMusicIcon />}>
                Open Music Library
            </Button>

            <Options>
                <CompactViewSwitch />
                <Sort />
            </Options>

            <ListItems compact={store().extra.compact}>
                {labels.map((label, i) => {
                    return <ListItem label={label} index={i} key={i} />
                })}
            </ListItems>

            <Button startIcon={<SmartToyIcon />} onClick={reScrapeData}>
                Re-scrape all data
            </Button>

            <ExportDataButton />

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
