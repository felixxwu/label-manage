import { ThemeProvider } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { fade } from '../utils/animate'
import { useInitDb, useDb } from '../utils/db'
import { getPassword, usePassword } from '../utils/getPassword'
import { theme } from '../utils/theme'
import { Store } from '../utils/types'
import { EnterPassword } from './EnterPassword'
import { Label } from './Label'
import { List } from './List'
import { Music } from './Music'

export function App() {
    const { db, error } = useInitDb()
    const [selectedLabelId, setSelectedLabelId] = useState<string>(null)
    const [showMusic, setShowMusic] = useState(false)
    const { labels, extra } = useDb(db)
    const password = usePassword()

    const page = (() => {
        if (!password) return 'password' as const
        if (error) return 'error' as const
        if (!db || !labels || !extra) return 'loading' as const
        if (showMusic) return 'music' as const
        if (selectedLabelId) return 'label' as const
        return 'list' as const
    })()

    const store: Store = {
        db,
        error,
        labels,
        extra,
        get selectedLabelId() {
            return selectedLabelId
        },
        set selectedLabelId(id) {
            setSelectedLabelId(id)
        },
        get showMusic() {
            return showMusic
        },
        set showMusic(value) {
            setShowMusic(value)
        },
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)
    }, [])

    async function handleKeyUp(e: KeyboardEvent) {
        if (e.key === 'Escape' && page !== 'list') {
            await fade()
            setSelectedLabelId(null)
            setShowMusic(false)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            {page === 'password' && <EnterPassword />}
            {page === 'error' && <>{error}</>}
            {page === 'loading' && <>Loading...</>}

            {page === 'music' && <Music store={store} />}
            {page === 'label' && <Label store={store} item={labels.find(l => l.id === selectedLabelId)} />}
            {page === 'list' && <List store={store} />}
        </ThemeProvider>
    )
}
