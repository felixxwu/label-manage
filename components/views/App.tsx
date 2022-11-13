import { ThemeProvider } from '@emotion/react'
import React, { useEffect } from 'react'
import { fade } from '../../utils/animate'
import { consts } from '../../utils/consts'
import { theme } from '../../utils/theme'
import { EnterPassword } from '../EnterPassword'
import { Label } from './Label'
import { List } from './List'
import { Music } from './Music'
import { Button, CircularProgress, Dialog, DialogActions, DialogTitle } from '@mui/material'
import { store, useStore } from '../../utils/store'
import styled from '@emotion/styled'

export function App() {
    useStore()

    const page = (() => {
        if (!store().password) return 'password' as const
        if (store().error) return 'error' as const
        if (!store() || !store().db || !store().labels || !store().extra) return 'loading' as const
        if (store().showMusic) return 'music' as const
        if (store().selectedLabelId) return 'label' as const
        return 'list' as const
    })()

    useEffect(() => {
        if (page === 'list') return
        window.scrollTo(0, 0)
    }, [page])

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)
        window.onhashchange = () => {
            if (!window.location.hash) {
                goHome()
            }
        }
    }, [])

    async function handleKeyUp(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            goHome()
        }
    }

    async function goHome() {
        if (page !== 'list') {
            await fade()
            store().selectedLabelId = null
            store().showMusic = false
        }
    }

    const selectedLabel = store().labels.find(l => l.id === store().selectedLabelId)

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Content>
                    {page === 'password' && <EnterPassword />}
                    {page === 'error' && <>{store().error}</>}
                    {page === 'loading' && <CircularProgress />}

                    {page === 'label' && <Label label={selectedLabel} />}
                    {page === 'list' && <List />}
                    {page === 'music' && <Music />}
                </Content>

                <Dialog open={!!store().dialog} onClose={() => (store().dialog = null)}>
                    <DialogTitle>Are you sure you want to delete?</DialogTitle>
                    <DialogActions>
                        {store().dialog?.actions.map(action => {
                            const handleClick = () => {
                                action.callback?.()
                                store().dialog = null
                            }
                            return (
                                <Button onClick={handleClick} key={action.label}>
                                    {action.label}
                                </Button>
                            )
                        })}
                    </DialogActions>
                </Dialog>
            </Wrapper>
        </ThemeProvider>
    )
}

const Wrapper = styled('div')`
    display: flex;
    justify-content: center;
`

const Content = styled('div')`
    display: flex;
    justify-content: center;
    max-width: ${consts.maxAppWidth}px;
    width: 100%;
`