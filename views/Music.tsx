import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddIcon from '@mui/icons-material/Add'
import { Song } from '../utils/types'
import { consts } from '../utils/consts'
import { fade } from '../utils/animate'
import React, { useState } from 'react'
import { updateDocTyped } from '../utils/db'
import { theme } from '../utils/theme'
import LinkIcon from '@mui/icons-material/Link'
import { setHistory } from '../utils/history'
import { store } from '../utils/store'
import { StylesSelector } from '../components/StylesSelector'
import { Chips } from '../components/Chips'
import styled from '@emotion/styled'

export function Music() {
    const [selectedSongId, setSelectedSongId] = useState<string>(null)
    const [deleteDialog, setDeleteDialog] = useState(false)
    const [localTitle, setLocalTitle] = useState('')
    const [localLink, setLocalLink] = useState('')
    const [localStyles, setLocalStyles] = useState<string[]>([])

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
        await updateDocTyped(store().db, consts.dbExtraId, {
            songs: store().extra.songs.concat(emptySong),
        })
        setSelectedSongId(emptySong.id)
        setLocalTitle(emptySong.title)
        setLocalLink(emptySong.link)
        setLocalStyles(emptySong.styles)
    }

    function openDialog(songId: string) {
        setSelectedSongId(songId)
        setLocalTitle(findSong(songId).title)
        setLocalLink(findSong(songId).link)
        setLocalStyles(findSong(songId).styles)
    }

    function closeDialog() {
        setSelectedSongId(null)
        setDeleteDialog(false)
    }

    function findSong(songId: string) {
        return store().extra.songs.find(song => song.id === songId)
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
        await updateDocTyped(store().db, consts.dbExtraId, {
            songs: store().extra.songs.map(song => {
                if (song.id === selectedSongId) {
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
        closeDialog()
    }

    async function deleteSong() {
        await updateDocTyped(store().db, consts.dbExtraId, {
            songs: store().extra.songs.filter(song => song.id !== selectedSongId),
        })
        closeDialog()
    }

    function openLink(link: string) {
        window.open(link, '_blank').focus()
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

            <Buttons>
                <Button
                    color='primary'
                    variant='contained'
                    onClick={addSong}
                    startIcon={<AddIcon />}
                >
                    Add Song
                </Button>
            </Buttons>

            {store().extra.songs.map((song, index) => (
                <Song onClick={() => openDialog(song.id)} key={index}>
                    <Header>
                        {song.title}
                        {song.link && <LinkIcon color='primary' />}
                    </Header>
                    <Chips chips={song.styles} colorful />
                </Song>
            ))}

            <Dialog open={selectedSongId !== null} onClose={saveEdit}>
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
                                    variant='standard'
                                    onChange={handleTitleChange}
                                    value={localTitle}
                                />
                                <TextWithIcon>
                                    <ComboText>
                                        <TextField
                                            margin='normal'
                                            label='Song Link'
                                            fullWidth
                                            variant='standard'
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
                                        async function handleStyleSelection(style: string) {
                                            if (!localStyles.includes(style)) {
                                                setLocalStyles(localStyles.concat(style))
                                            }
                                            closeDialog()
                                        }

                                        return (
                                            <StylesSelector
                                                onSelectStyle={handleStyleSelection}
                                                ignore={findSong(selectedSongId).styles}
                                            />
                                        )
                                    }}
                                />
                            </Fields>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeDialog}>Cancel</Button>
                            <Button onClick={() => setDeleteDialog(true)}>Delete</Button>
                            <Button onClick={saveEdit}>Save</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
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
        background-color: #ffffff11;
    }
`

const Header = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Fields = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 450px;
    max-width: 100%;
`

const TextWithIcon = styled('div')`
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 10px;
`

const ComboText = styled('div')`
    width: 100%;
`

const ComboIcon = styled('div')`
    flex: 1;
    margin-bottom: 5px;
`
