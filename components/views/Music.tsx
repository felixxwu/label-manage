import { Fab, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import type { Song } from '../../utils/types'
import { consts } from '../../utils/consts'
import React, { useState } from 'react'
import { updateDocTyped } from '../../utils/db'
import { theme } from '../../utils/theme'
import LinkIcon from '@mui/icons-material/Link'
import { store } from '../../utils/store'
import { Chips } from '../Chips'
import styled from '@emotion/styled'
import { SongPopup } from '../popups/SongPopup'
import Add from '@mui/icons-material/Add'
import { Header } from '../Header'
import { StylesSelector } from '../StylesSelector'

export function Music() {
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null)

  async function handleBack() {
    window.history.back()
  }

  async function addSong() {
    const emptySong: Song = {
      id: new Date().getTime().toString(),
      title: '',
      link: '',
      styles: [],
    }
    await updateDocTyped(consts.dbExtraId, {
      songs: store().extra.songs.concat(emptySong),
    })
    setSelectedSongId(emptySong.id)
  }

  function openDialog(songId: string) {
    setSelectedSongId(songId)
  }

  function closeDialog() {
    setSelectedSongId(null)
  }

  const handleStyleSelect = async (styles: string[]) => {
    store().styleFilter = styles
  }

  const handleStyleDelete = async (item: string) => {
    await handleStyleSelect(store().styleFilter.filter(style => style !== item))
  }

  const songs = store()
    .extra.songs.slice()
    .filter(song => {
      if (store().styleFilter.length === 0) return true
      return store().styleFilter.some(style => song.styles.includes(style))
    })

  return (
    <Wrapper>
      <Header
        left={
          <IconButton onClick={handleBack}>
            <ArrowBackIcon color='primary' />
          </IconButton>
        }
      >
        <h1>Songs</h1>
      </Header>

      {store().extra.songs.length === 0 ? (
        <div>No songs added yet :(</div>
      ) : (
        <>
          <StyleFilter>
            Filter by style:
            <Chips
              chips={store().styleFilter}
              onDelete={handleStyleDelete}
              skipDeleteDialog
              colorful
              addDialog={({ closeDialog }) => (
                <StylesSelector
                  onSelectStyle={async styles => {
                    handleStyleSelect([...store().styleFilter, ...styles])
                    closeDialog()
                  }}
                  ignore={store().styleFilter}
                  onClose={closeDialog}
                />
              )}
            />
          </StyleFilter>

          {store().styleFilter.length > 0 && songs.length > 0 && (
            <ResultsCount>
              {songs.length} {songs.length === 1 ? 'result' : 'results'}
            </ResultsCount>
          )}

          {songs.length === 0 ? (
            <div>No songs match the selected filters</div>
          ) : (
            songs.map((song, index) => (
              <Song onClick={() => openDialog(song.id)} key={index}>
                <SongHeader>
                  {song.title}
                  {song.link && <LinkIcon color='primary' />}
                </SongHeader>
                {song.styles.length !== 0 && <Chips chips={song.styles} colorful />}
              </Song>
            ))
          )}
        </>
      )}

      <Fab
        onClick={addSong}
        color='secondary'
        sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
        size='large'
        variant='extended'
      >
        <Add color='primary' sx={{ mr: 1 }} />
        New Song
      </Fab>

      {selectedSongId && <SongPopup selectedSongId={selectedSongId} close={closeDialog} />}
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: auto;
`

const Song = styled('div')`
  width: 100%;
  color: ${theme.palette.primary.main};
  background-color: ${theme.palette.secondary.main};
  padding: 20px;
  border-radius: ${consts.borderRadius}px;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    background-color: ${theme.palette.secondary.light};
  }
`

const SongHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
`

const StyleFilter = styled('div')`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`

const ResultsCount = styled('div')`
  width: 100%;
  text-align: left;
`
