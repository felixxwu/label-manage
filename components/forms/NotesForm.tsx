import { TextField } from '@mui/material'
import { useState } from 'react'
import { updateDocTyped } from '../../utils/db'
import { Store } from '../../utils/store'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'

export function NotesForm(props: { label: Label; store: Store }) {
    const [notes, setNotes] = useState(props.label.notes)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNotes(e.target.value)
        updateDocTyped(props.store.db, props.label.id, { notes: e.target.value })
    }

    return (
        <TextField
            label='Notes'
            variant='outlined'
            sx={{ width: '100%' }}
            autoComplete='off'
            onChange={handleChange}
            value={notes}
        />
    )
}
