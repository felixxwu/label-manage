import styled from '@emotion/styled'
import Add from '@mui/icons-material/Add'
import Edit from '@mui/icons-material/Edit'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { consts } from '../utils/consts'
import { updateDocTyped } from '../utils/db'
import { store } from '../utils/store'
import { Label } from '../utils/types'
import { Chips } from './Chips'
import { Widgets } from './views/Widgets'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import ArrowBack from '@mui/icons-material/ArrowBack'

export function StylesSelector(props: {
  onSelectStyle: (styles: string[]) => void
  ignore: string[]
  label?: Label
  editOnlyMode?: boolean
}) {
  const [styleToAdd, setStyleToAdd] = useState('')
  const [editMode, setEditMode] = useState(!!props.editOnlyMode)
  const [selection, setSelection] = useState<string[]>([])
  const [showTracks, setShowTracks] = useState(false)

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setStyleToAdd(e.target.value)
  }

  function handleKeyUp(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      addStyle()
    }
  }

  async function addStyle() {
    if (store().extra.styles.includes(styleToAdd)) return
    if (styleToAdd.trim() === '') return

    await updateDocTyped(consts.dbExtraId, {
      styles: store().extra.styles.concat(styleToAdd),
    })
    setStyleToAdd('')
  }

  async function handleDelete(style: string) {
    await updateDocTyped(consts.dbExtraId, {
      styles: store().extra.styles.filter(s => s !== style),
    })
  }

  async function handleSelect(styles: string[]) {
    setSelection(styles)
  }

  function handleDone() {
    props.onSelectStyle(selection)
  }

  return (
    <Wrapper>
      <Chips
        chips={store().extra.styles.filter(style => !props.ignore.includes(style))}
        onSelect={props.editOnlyMode ? undefined : handleSelect}
        onDelete={editMode ? handleDelete : undefined}
        colorful
      />
      {props.label &&
        (showTracks ? (
          <WidgetWrapper>
            <Widgets label={props.label} />
          </WidgetWrapper>
        ) : (
          <Button onClick={() => setShowTracks(true)} startIcon={<QueueMusicIcon />}>
            Show tracks
          </Button>
        ))}
      {editMode ? (
        <>
          <TextField
            margin='normal'
            label='New style name...'
            fullWidth
            onChange={handleInput}
            onKeyUp={handleKeyUp}
            value={styleToAdd}
            autoComplete='off'
            autoCorrect='off'
            autoFocus
            sx={{ margin: 0 }}
          />
          <Buttons>
            {!props.editOnlyMode && (
              <Button onClick={() => setEditMode(false)} startIcon={<ArrowBack />}>
                Back
              </Button>
            )}
            <Button onClick={addStyle} startIcon={<Add />} disabled={styleToAdd.trim() === ''}>
              Add Style
            </Button>
          </Buttons>
        </>
      ) : (
        <Buttons>
          <Button onClick={() => setEditMode(true)} startIcon={<Edit />}>
            Edit Styles
          </Button>
          <Button onClick={handleDone} startIcon={<Add />} disabled={selection.length === 0}>
            Add
          </Button>
        </Buttons>
      )}
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`

const Buttons = styled('div')`
  display: flex;
  justify-content: space-between;
`

const WidgetWrapper = styled('div')`
  height: 500px;
  overflow: auto;
`
