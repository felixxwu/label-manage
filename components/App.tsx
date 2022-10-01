import { ThemeProvider } from '@emotion/react'
import { useState } from 'react'
import { useInitDb } from '../utils/db'
import { useLabels } from '../utils/labelList'
import { theme } from '../utils/theme'
import { Store } from '../utils/types'
import { Input } from './Input'
import { Label } from './Label'
import { List } from './List'

export function App() {
    const { db, error } = useInitDb()
    const [selectedLabelId, setSelectedLabelId] = useState<string>(null)
    const labels = useLabels(db)

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
    }

    if (error) return <>{error}</>
    if (!db) return <>Loading...</>

    function getSelectedLabel() {
        return labels.find(label => label.id === selectedLabelId)
    }

    return (
        <ThemeProvider theme={theme}>
            {selectedLabelId ? (
                <Label item={getSelectedLabel()} store={store} />
            ) : (
                <div className='list'>
                    <Input store={store} />
                    <List store={store} />
                </div>
            )}

            <style jsx>{`
                .list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    align-items: center;
                }
            `}</style>
        </ThemeProvider>
    )
}
