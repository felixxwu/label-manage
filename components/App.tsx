import { ThemeProvider } from '@emotion/react'
import { Fab } from '@mui/material'
import { useState } from 'react'
import { useInitDb, useDb } from '../utils/db'
import { theme } from '../utils/theme'
import { Store } from '../utils/types'
import { Input } from './Input'
import { Label } from './Label'
import { List } from './List'
import { Music } from './Music'

export function App() {
    const { db, error } = useInitDb()
    const [selectedLabelId, setSelectedLabelId] = useState<string>(null)
    const [showMusic, setShowMusic] = useState(false)
    const { labels, extra } = useDb(db)

    const store: Store = {
        db,
        error,
        labels: labels,
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

    if (error) return <>{error}</>
    if (!db || !labels || !extra) return <>Loading...</>

    function getSelectedLabel() {
        return labels.find(label => label.id === selectedLabelId)
    }

    return (
        <ThemeProvider theme={theme}>
            {(() => {
                if (showMusic) return <Music />

                if (selectedLabelId) return <Label item={getSelectedLabel()} store={store} />

                return <List store={store} />
            })()}
        </ThemeProvider>
    )
}
