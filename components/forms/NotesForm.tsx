import styled from '@emotion/styled'
import { TextareaAutosize } from '@mui/material'
import { useState } from 'react'
import { updateDocTyped } from '../../utils/db'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'

export function NotesForm(props: { label: Label }) {
    const [notes, setNotes] = useState(props.label.notes)

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setNotes(e.target.value)
        updateDocTyped(props.label.id, { notes: e.target.value })
    }

    return (
        <Wrapper>
            Notes:
            <TextArea
                placeholder='Submission requirements or other information'
                onChange={handleChange}
                value={notes}
            />
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

const TextArea = styled(TextareaAutosize)`
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
    color: ${theme.palette.primary.main};
    width: 100%;
    font-size: 16px;
    padding: 0;
`
