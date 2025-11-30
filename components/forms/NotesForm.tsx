import styled from '@emotion/styled'
import { TextareaAutosize } from '@mui/material'
import { useState } from 'react'
import { updateDocTyped } from '../../utils/db'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'
import { consts } from '../../utils/consts'
import { Title } from '../Title'

export function NotesForm(props: { label: Label }) {
  const [notes, setNotes] = useState(props.label.notes)

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNotes(e.target.value)
    updateDocTyped(props.label.id, { notes: e.target.value })
  }

  return (
    <Wrapper>
      <Title>Notes:</Title>
      <TextArea placeholder='Notes about the label' onChange={handleChange} value={notes} />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: ${theme.palette.secondary.main};
  padding: 10px;
  border-radius: ${consts.borderRadius}px;
`

const TextArea = styled(TextareaAutosize)`
  border: none;
  outline: none;
  background-color: transparent;
  resize: none;
  color: ${theme.palette.primary.dark};
  width: 100%;
  font-size: 16px;
  padding: 0;

  &::placeholder {
    color: ${theme.palette.primary.main};
    opacity: 0.2;
  }
`
