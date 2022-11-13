import { TextField } from '@mui/material'
import { useState } from 'react'
import { updateDocTyped } from '../../utils/db'
import { Label } from '../../utils/types'

export function NotesForm(props: { label: Label }) {
    const [notes, setNotes] = useState(props.label.notes)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNotes(e.target.value)
        updateDocTyped(props.label.id, { notes: e.target.value })
    }

    return (
        <TextField
            label='Notes'
            variant='outlined'
            sx={{ width: '100%', margin: '20px 0' }}
            autoComplete='off'
            onChange={handleChange}
            value={notes}
        />
    )
}
