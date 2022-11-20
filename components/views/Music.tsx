import { Fab, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Song } from '../../utils/types'
import { consts } from '../../utils/consts'
import { fade } from '../../utils/animate'
import React, { useState } from 'react'
import { updateDocTyped } from '../../utils/db'
import { theme } from '../../utils/theme'
import LinkIcon from '@mui/icons-material/Link'
import { setHistory } from '../../utils/history'
import { store } from '../../utils/store'
import { Chips } from '../Chips'
import styled from '@emotion/styled'
import { SongPopup } from '../popups/SongPopup'
import Add from '@mui/icons-material/Add'

export function Music() {
    const [selectedSongId, setSelectedSongId] = useState<string | null>(null)

    setHistory('music')

    async function handleBack() {
        await fade()
        store().showMusic = false
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

    return (
        <Wrapper>
            <Header>
                <IconButton onClick={handleBack}>
                    <ArrowBackIcon color='primary' />
                </IconButton>
                <h1>Music Library</h1>
                <IconButton sx={{ opacity: 0 }}>
                    <ArrowBackIcon color='primary' />
                </IconButton>
            </Header>

            {store().extra.songs.map((song, index) => (
                <Song onClick={() => openDialog(song.id)} key={index}>
                    <Header>
                        {song.title}
                        {song.link && <LinkIcon color='primary' />}
                    </Header>
                    {song.styles.length !== 0 && <Chips chips={song.styles} colorful />}
                </Song>
            ))}

            <Fab
                onClick={addSong}
                color='secondary'
                sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
                size='large'
            >
                <Add color='primary' />
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

const Buttons = styled('div')`
    display: flex;
    gap: 20px;
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

const Header = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
