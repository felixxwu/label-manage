import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddIcon from '@mui/icons-material/Add'
import { Song } from '../utils/types'
import { consts } from '../utils/consts'
import { fade } from '../utils/animate'
import { LoadingButton } from '@mui/lab'
import React, { useState } from 'react'
import { useShortLoad } from '../utils/useShortLoad'
import { updateDocTyped } from '../utils/db'
import { theme } from '../utils/theme'
import LinkIcon from '@mui/icons-material/Link'
import { setHistory } from '../utils/history'
import { Store } from '../utils/store'
import { StylesSelector } from '../components/StylesSelector'
import { Chips } from '../components/Chips'

export function Music(props: { store: Store }) {
    const [loadingSave, loadSave] = useShortLoad()
    const [loadingDelete, loadDelete] = useShortLoad()

    const [selectedSongId, setSelectedSongId] = useState<string>(null)
    const [deleteDialog, setDeleteDialog] = useState(false)
    const [localTitle, setLocalTitle] = useState('')
    const [localLink, setLocalLink] = useState('')
    const [localStyles, setLocalStyles] = useState<string[]>([])

    setHistory('music')

    async function handleBack() {
        await fade()
        props.store.showMusic = false
    }

    async function addSong() {
        const emptySong: Song = {
            id: new Date().getTime().toString(),
            title: '',
            link: '',
            styles: [],
        }
        await updateDocTyped(props.store.db, consts.dbExtraId, { songs: props.store.extra.songs.concat(emptySong) })
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
        return props.store.extra.songs.find(song => song.id === songId)
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
        await loadSave()
        await updateDocTyped(props.store.db, consts.dbExtraId, {
            songs: props.store.extra.songs.map(song => {
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
        await loadDelete()
        await updateDocTyped(props.store.db, consts.dbExtraId, {
            songs: props.store.extra.songs.filter(song => song.id !== selectedSongId),
        })
        closeDialog()
    }

    function openLink(link: string) {
        window.open(link, '_blank').focus()
    }

    return (
        <div className='music'>
            <div className='header'>
                <IconButton onClick={handleBack}>
                    <ArrowBackIcon color='primary' />
                </IconButton>
                <h1>Music Library</h1>
                <IconButton sx={{ opacity: 0 }}>
                    <ArrowBackIcon color='primary' />
                </IconButton>
            </div>

            <div className='buttons'>
                <Button color='primary' variant='contained' onClick={addSong} startIcon={<AddIcon />}>
                    Add Song
                </Button>
            </div>

            {props.store.extra.songs.map((song, index) => (
                <div onClick={() => openDialog(song.id)} className='song' key={index}>
                    <div className='header'>
                        {song.title}
                        {song.link && <LinkIcon color='primary' />}
                    </div>
                    <Chips chips={song.styles} colorful />
                </div>
            ))}

            <Dialog open={selectedSongId !== null} onClose={saveEdit}>
                {deleteDialog ? (
                    <>
                        <DialogTitle>Are you sure you want to delete this song?</DialogTitle>
                        <DialogActions>
                            <Button onClick={() => setDeleteDialog(false)}>No</Button>
                            <LoadingButton onClick={deleteSong} loading={loadingDelete}>
                                Delete
                            </LoadingButton>
                        </DialogActions>
                    </>
                ) : (
                    <>
                        <DialogTitle>Edit Song</DialogTitle>
                        <DialogContent>
                            <div className='fields'>
                                <TextField
                                    margin='normal'
                                    label='Song Title'
                                    fullWidth
                                    variant='standard'
                                    onChange={handleTitleChange}
                                    value={localTitle}
                                />
                                <div className='text-with-icon'>
                                    <div className='text'>
                                        <TextField
                                            margin='normal'
                                            label='Song Link'
                                            fullWidth
                                            variant='standard'
                                            onChange={handleLinkChange}
                                            value={localLink}
                                        />
                                    </div>
                                    <div className='icon'>
                                        <IconButton onClick={() => openLink(localLink)}>
                                            <LinkIcon color='primary' />
                                        </IconButton>
                                    </div>
                                </div>
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
                                            <StylesSelector store={props.store} onSelectStyle={handleStyleSelection} />
                                        )
                                    }}
                                />
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeDialog}>Cancel</Button>
                            <Button onClick={() => setDeleteDialog(true)}>Delete</Button>
                            <LoadingButton onClick={saveEdit} loading={loadingSave}>
                                Save
                            </LoadingButton>
                        </DialogActions>
                    </>
                )}
            </Dialog>

            <style jsx>{`
                .music {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    margin: auto;
                }

                .buttons {
                    display: flex;
                    gap: 20px;
                }

                .song {
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
                }

                .song:hover {
                    background-color: #ffffff11;
                }

                .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .fields {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    width: 450px;
                    max-width: 100%;
                }

                .text-with-icon {
                    width: 100%;
                    display: flex;
                    align-items: flex-end;
                    gap: 10px;
                }

                .text-with-icon .text {
                    width: 100%;
                }

                .text-with-icon .icon {
                    flex: 1;
                    margin-bottom: 5px;
                }

                .header {
                    display: flex;
                    justify-items: space-between;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}
