import { Button, DialogActions, DialogContent, TextField } from '@mui/material'
import { Label } from '../../utils/types'
import React, { useState } from 'react'
import { Chips } from '../Chips'
import { updateDocTyped } from '../../utils/db'
import styled from '@emotion/styled'
import { theme } from '../../utils/theme'
import { consts } from '../../utils/consts'

export function ArtistsForm(props: { label: Label }) {
  const [itemToAdd, setItemToAdd] = useState('')

  async function handleDelete(style: string) {
    updateDocTyped(props.label.id, {
      artists: props.label.artists.filter(item => item !== style),
    })
  }

  return (
    <Wrapper
      style={props.label.artists.length ? {} : { backgroundColor: theme.palette.warning.dark }}
    >
      Artists:
      <Chips
        colorful
        chips={props.label.artists}
        onDelete={handleDelete}
        addDialog={({ closeDialog }) => {
          function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
            setItemToAdd(e.target.value)
          }

          function handleKeyUp(e: React.KeyboardEvent) {
            if (e.key === 'Enter') {
              submitItem()
            }
          }

          async function submitItem() {
            if (!itemToAdd) return
            await updateDocTyped(props.label.id, {
              artists: props.label.artists.concat(itemToAdd),
            })
            setItemToAdd('')
            closeDialog()
          }

          function getArtistSuggestions() {
            const t = props.label.tracks
            const allUploads = t.popular.concat(t.recent)
            const artists: string[] = []
            for (const upload of allUploads) {
              if (upload.title) {
                const split = upload.title.split(
                  /-|&|~|,|ft.|Ft.|feat.|Feat.|\(|\)|\[|\]|Remix|Remixes|remix|x|X/
                )
                artists.push(
                  ...split
                    .map(s => s.trim())
                    .filter(s => s !== '')
                    .filter(a => !props.label.artists.includes(a))
                )
              }
            }
            return Array.from(new Set(artists))
          }

          async function handleChooseSuggestedArtist(artist: string) {
            await updateDocTyped(props.label.id, {
              artists: props.label.artists.concat(artist),
            })
            setItemToAdd('')
            closeDialog()
          }

          return (
            <>
              <DialogContent>
                <Suggestions>
                  <Chips
                    chips={getArtistSuggestions()}
                    small
                    colorful
                    onClick={handleChooseSuggestedArtist}
                  />
                </Suggestions>
                <TextField
                  margin='normal'
                  label='Artist Name'
                  fullWidth
                  onChange={handleInput}
                  onKeyUp={handleKeyUp}
                  value={itemToAdd}
                  autoComplete='off'
                  autoCorrect='off'
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDialog}>Cancel</Button>
                {itemToAdd.trim() && <Button onClick={submitItem}>Add {itemToAdd}</Button>}
              </DialogActions>
            </>
          )
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${theme.palette.secondary.main};
  padding: 10px;
  border-radius: ${consts.borderRadius}px;
  gap: 10px;
`

const Suggestions = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 300px;
  overflow: auto;
`
