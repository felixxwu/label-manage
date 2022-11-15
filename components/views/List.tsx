import { Button, debounce, Fab } from '@mui/material'
import { ListItem } from '../ListItem'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import { Input } from '../Input'
import { fade } from '../../utils/animate'
import { setHistory } from '../../utils/history'
import { CompactViewSwitch } from '../CompactViewSwitch'
import { Sort } from '../Sort'
import { store } from '../../utils/store'
import { followersToIndex } from '../../utils/types'
import { useEffect, useState } from 'react'
import Add from '@mui/icons-material/Add'
import styled from '@emotion/styled'
import { ExportDataButton } from '../buttons/ExportDataButton'

export function List() {
    const [showInput, setShowInput] = useState(false)

    setHistory('')

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

    const labels = [...store().labels]
        .sort((a, b) => {
            if (store().sort === 'follower') {
                return followersToIndex(b.followers) - followersToIndex(a.followers)
            }
            if (store().sort === 'name') {
                return a.name > b.name ? 1 : -1
            }
        })
        .sort((a, b) => {
            return !a.inactive && b.inactive ? -1 : 1
        })

    return (
        <Wrapper>
            <h1>Label List</h1>

            {showInput ? (
                <Input />
            ) : (
                <Button
                    variant='contained'
                    onClick={() => setShowInput(true)}
                    startIcon={<Add />}
                    color='primary'
                >
                    Add Label
                </Button>
            )}

            <Options>
                <CompactViewSwitch />
                <Sort />
            </Options>

            <ListItems compact={store().extra.compact}>
                {labels.map((label, i) => {
                    return <ListItem label={label} index={i} key={i} />
                })}
            </ListItems>

            <ExportDataButton />

            <Fab
                onClick={showMusic}
                color='secondary'
                sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
                size='large'
            >
                <LibraryMusicIcon color='primary' />
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
