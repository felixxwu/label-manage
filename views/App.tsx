import { ThemeProvider } from '@emotion/react'
import React, { useEffect } from 'react'
import { fade } from '../utils/animate'
import { consts } from '../utils/consts'
import { theme } from '../utils/theme'
import { EnterPassword } from '../components/EnterPassword'
import { Label } from './Label'
import { List } from './List'
import { Music } from './Music'
import { Button, CircularProgress, Dialog, DialogActions, DialogTitle } from '@mui/material'
import { useStore } from '../utils/store'

export function App() {
    const store = useStore()

    const page = (() => {
        if (!store.password) return 'password' as const
        if (store.error) return 'error' as const
        if (!store.db || !store.labels || !store.extra) return 'loading' as const
        if (store.showMusic) return 'music' as const
        if (store.selectedLabelId) return 'label' as const
        return 'list' as const
    })()

    useEffect(() => {
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
            store.selectedLabelId = null
            store.showMusic = false
        }
    }

    const selectedLabel = store.labels.find(l => l.id === store.selectedLabelId)

    return (
        <ThemeProvider theme={theme}>
            <div className='app'>
                <div className='content'>
                    {page === 'password' && <EnterPassword />}
                    {page === 'error' && <>{store.error}</>}
                    {page === 'loading' && <CircularProgress />}

                    {page === 'label' && <Label store={store} label={selectedLabel} />}
                    {page === 'list' && <List store={store} />}
                    {page === 'music' && <Music store={store} />}
                </div>

                <Dialog open={!!store.dialog} onClose={() => (store.dialog = null)}>
                    <DialogTitle>Are you sure you want to delete?</DialogTitle>
                    <DialogActions>
                        {store.dialog?.actions.map(action => {
                            const handleClick = () => {
                                action.callback?.()
                                store.dialog = null
                            }
                            return <Button onClick={handleClick}>{action.label}</Button>
                        })}
                    </DialogActions>
                </Dialog>

                <style jsx>{`
                    .app {
                        display: flex;
                        justify-content: center;
                    }

                    .content {
                        display: flex;
                        justify-content: center;
                        max-width: ${consts.maxAppWidth}px;
                        width: 100%;
                    }
                `}</style>
            </div>
        </ThemeProvider>
    )
}
