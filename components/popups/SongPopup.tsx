import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { consts } from '../../utils/consts'
import React, { useState } from 'react'
import { updateDocTyped } from '../../utils/db'
import { store } from '../../utils/store'
import { StylesSelector } from '../StylesSelector'
import { Chips } from '../Chips'
import styled from '@emotion/styled'
import { DeleteConfirmationDialog } from './DeleteConfirmationDialog'
import { PasteConfirmationDialog } from './PasteConfirmationDialog'
import { SongLinkInput } from './SongLinkInput'

type DialogMode = 'edit' | 'delete' | 'paste'

export function SongPopup(props: { selectedSongId: string; close: () => void }) {
  const [dialogMode, setDialogMode] = useState<DialogMode>('edit')
  const [clipboardContent, setClipboardContent] = useState('')
  const [localTitle, setLocalTitle] = useState('')
  const [localLink, setLocalLink] = useState('')
  const [localStyles, setLocalStyles] = useState<string[]>([])

  const song = store().extra.songs.find(song => song.id === props.selectedSongId)

  React.useEffect(() => {
    if (song) {
      setLocalTitle(song.title ?? '')
      setLocalLink(song.link ?? '')
      setLocalStyles(song.styles ?? [])
    }
  }, [song?.id])

  async function saveEdit() {
    await updateDocTyped(consts.dbExtraId, {
      songs: store().extra.songs.map(song => {
        if (song.id === props.selectedSongId) {
          return {
            id: song.id,
            title: localTitle,
            link: localLink,
            styles: localStyles,
          }
        }
        return song
      }),
    })
  }

  async function deleteSong() {
    props.close()
    await updateDocTyped(consts.dbExtraId, {
      songs: store().extra.songs.filter(song => song.id !== props.selectedSongId),
    })
  }

  async function handlePasteFromClipboard() {
    try {
      const text = await navigator.clipboard.readText()
      setClipboardContent(text)
      setDialogMode('paste')
    } catch (err) {
      console.error('Failed to read clipboard:', err)
    }
  }

  function handleConfirmPaste() {
    setLocalLink(clipboardContent)
    setClipboardContent('')
    setDialogMode('edit')
  }

  function handleCancelPaste() {
    setClipboardContent('')
    setDialogMode('edit')
  }

  async function handleClose() {
    if (dialogMode === 'delete') {
      setDialogMode('edit')
      return
    }
    if (dialogMode === 'paste') {
      handleCancelPaste()
      return
    }
    await saveEdit()
    props.close()
  }

  function renderDialogContent() {
    if (dialogMode === 'delete') {
      return (
        <DeleteConfirmationDialog onCancel={() => setDialogMode('edit')} onConfirm={deleteSong} />
      )
    }

    if (dialogMode === 'paste') {
      return (
        <PasteConfirmationDialog
          content={clipboardContent}
          onCancel={handleCancelPaste}
          onConfirm={handleConfirmPaste}
        />
      )
    }

    return (
      <>
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <Fields>
            <TextField
              margin='normal'
              label='Song Title'
              fullWidth
              onChange={e => setLocalTitle(e.target.value)}
              value={localTitle}
              autoFocus
            />
            <SongLinkInput
              value={localLink}
              onChange={setLocalLink}
              onPasteClick={handlePasteFromClipboard}
            />
            <Chips
              chips={localStyles}
              colorful
              title='Styles:'
              onDelete={async style => setLocalStyles(localStyles.filter(s => s !== style))}
              addDialog={({ closeDialog }) => {
                async function handleStyleSelection(styles: string[]) {
                  setLocalStyles(localStyles.concat(...styles))
                  closeDialog()
                }

                return (
                  <StylesSelector
                    onSelectStyle={handleStyleSelection}
                    ignore={song?.styles ?? []}
                    onClose={closeDialog}
                  />
                )
              }}
            />
          </Fields>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogMode('delete')} color='error'>
            Delete
          </Button>
        </DialogActions>
      </>
    )
  }

  return (
    <Dialog open={props.selectedSongId !== null} onClose={handleClose}>
      {renderDialogContent()}
    </Dialog>
  )
}

const Fields = styled('div')`
  display: flex;
  flex-direction: column;
  width: 450px;
  max-width: 100%;
`
