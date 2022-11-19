import { Button, debounce, Fab } from '@mui/material'
import { ListItem } from '../ListItem'
import LibraryMusicIcon from '@mui/icons-material/QueueMusic'
import { fade } from '../../utils/animate'
import { setHistory } from '../../utils/history'
import { CompactViewSwitch } from '../CompactViewSwitch'
import { Sort } from '../Sort'
import { store } from '../../utils/store'
import { useEffect, useState } from 'react'
import Add from '@mui/icons-material/Add'
import styled from '@emotion/styled'
import { ExportDataButton } from '../buttons/ExportDataButton'
import { addDocTyped } from '../../utils/db'

export function List() {
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

    function handleAddLabel() {
        store().dialog = {
            message: 'New label',
            input: 'Label name',
            actions: [
                { label: 'Cancel' },
                {
                    label: 'OK',
                    callback: async name => {
                        if (name) {
                            const doc = await addDocTyped(store().db, name)
                            await fade()
                            store().selectedLabelId = doc.id
                        }
                    },
                    callOnEnter: true,
                },
            ],
        }
    }

    const labels = [...store().labels]
        .sort((a, b) => {
            if (store().sort === 'follower') {
                return b.followers - a.followers
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
