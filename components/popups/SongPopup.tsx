import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material'
import { consts } from '../../utils/consts'
import React, { useState } from 'react'
import { updateDocTyped } from '../../utils/db'
import LinkIcon from '@mui/icons-material/Link'
import { store } from '../../utils/store'
import { StylesSelector } from '../StylesSelector'
import { Chips } from '../Chips'
import styled from '@emotion/styled'
import { LoadingButton } from '@mui/lab'

export function SongPopup(props: { selectedSongId: string; close: () => void }) {
  const [deleteDialog, setDeleteDialog] = useState(false)
  const [localTitle, setLocalTitle] = useState(getSong()?.title ?? '')
  const [localLink, setLocalLink] = useState(getSong()?.link ?? '')
  const [localStyles, setLocalStyles] = useState(getSong()?.styles ?? [])
  const [saving, setSaving] = useState(false)

  function getSong() {
    return store().extra.songs.find(song => song.id === props.selectedSongId)
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocalTitle(e.target.value)
  }

  function handleLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocalLink(e.target.value)
  }

  async function handleDeleteStyle(style: string) {
    setLocalStyles(localStyles.filter(s => s !== style))
  }

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
        } else {
          return song
        }
      }),
    })
  }

  async function deleteSong() {
    props.close()
    await updateDocTyped(consts.dbExtraId, {
      songs: store().extra.songs.filter(song => song.id !== props.selectedSongId),
    })
  }

  function openLink(link: string) {
    window.open(link, '_blank')?.focus()
  }

  async function handleSave() {
    setSaving(true)
    await saveEdit()
    props.close()
  }

  return (
    <Dialog open={props.selectedSongId !== null} onClose={props.close}>
      {deleteDialog ? (
        <>
          <DialogTitle>Are you sure you want to delete this song?</DialogTitle>
          <DialogActions>
            <Button onClick={() => setDeleteDialog(false)}>No</Button>
            <Button onClick={deleteSong}>Delete</Button>
          </DialogActions>
        </>
      ) : (
        <>
          <DialogTitle>Edit Song</DialogTitle>
          <DialogContent>
            <Fields>
              <TextField
                margin='normal'
                label='Song Title'
                fullWidth
                onChange={handleTitleChange}
                value={localTitle}
                autoFocus
              />
              <TextWithIcon>
                <ComboText>
                  <TextField
                    margin='normal'
                    label='Song Link'
                    fullWidth
                    onChange={handleLinkChange}
                    value={localLink}
                  />
                </ComboText>
                <ComboIcon>
                  <IconButton onClick={() => openLink(localLink)}>
                    <LinkIcon color='primary' />
                  </IconButton>
                </ComboIcon>
              </TextWithIcon>
              <Chips
                chips={localStyles}
                colorful
                title='Styles:'
                onDelete={handleDeleteStyle}
                addDialog={({ closeDialog }) => {
                  async function handleStyleSelection(styles: string[]) {
                    setLocalStyles(localStyles.concat(...styles))
                    closeDialog()
                  }

                  return (
                    <StylesSelector
                      onSelectStyle={handleStyleSelection}
                      ignore={getSong()?.styles ?? []}
                    />
                  )
                }}
              />
            </Fields>
          </DialogContent>
          <DialogActions style={{ justifyContent: 'space-between' }}>
            <Button onClick={() => setDeleteDialog(true)} color='error'>
              Delete
            </Button>
            <LoadingButton onClick={handleSave} loading={saving}>
              Save
            </LoadingButton>
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}

const Fields = styled('div')`
  display: flex;
  flex-direction: column;
  width: 450px;
  max-width: 100%;
`

const TextWithIcon = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`

const ComboText = styled('div')`
  width: 100%;
`

const ComboIcon = styled('div')`
  flex: 1;
  margin-bottom: 5px;
`
