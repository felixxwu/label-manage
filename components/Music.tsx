import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddIcon from '@mui/icons-material/Add'
import { Song, Store } from '../utils/types'
import { consts } from '../utils/consts'
import { fade } from '../utils/animate'
import { LoadingButton } from '@mui/lab'
import React, { useEffect, useState } from 'react'
import { useShortLoad } from '../utils/useShortLoad'
import { updateDocTyped } from '../utils/db'
import { theme } from '../utils/theme'
import LinkIcon from '@mui/icons-material/Link'

export function Music(props: { store: Store }) {
    const [loadingSave, loadSave] = useShortLoad()
    const [loadingDelete, loadDelete] = useShortLoad()

    const [selectedSongId, setSelectedSongId] = useState<string>(null)
    const [deleteDialog, setDeleteDialog] = useState(false)
    const [localTitle, setLocalTitle] = useState('')
    const [localLink, setLocalLink] = useState('')

    useEffect(() => {
        history.pushState('nohb', null, '#music')
    }, [])

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
    }

    function openDialog(songId: string) {
        setSelectedSongId(songId)
        setLocalTitle(findSong(songId).title)
        setLocalLink(findSong(songId).link)
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

    async function saveEdit() {
        await loadSave()
        await updateDocTyped(props.store.db, consts.dbExtraId, {
            songs: props.store.extra.songs.map(song => {
                if (song.id === selectedSongId) {
                    return {
                        id: song.id,
                        title: localTitle,
                        link: localLink,
                        styles: song.styles,
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
            <h1>Music Library</h1>

            {props.store.extra.songs.map((song, index) => (
                <div onClick={() => openDialog(song.id)} className='song' key={index}>
                    <div className='header'>
                        {song.title}
                        {song.link && (
                            <IconButton onClick={() => openLink(song.link)}>
                                <LinkIcon />
                            </IconButton>
                        )}
                    </div>
                </div>
            ))}

            <div className='bottom-buttons'>
                <Button color='primary' variant='contained' onClick={handleBack} startIcon={<ArrowBackIcon />}>
                    Back
                </Button>
                <Button color='primary' variant='contained' onClick={addSong} startIcon={<AddIcon />}>
                    Add Song
                </Button>
            </div>

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
                            <TextField
                                margin='normal'
                                label='Song Title'
                                fullWidth
                                variant='standard'
                                onChange={handleTitleChange}
                                value={localTitle}
                                autoFocus
                            />
                            <TextField
                                margin='normal'
                                label='Song Link'
                                fullWidth
                                variant='standard'
                                onChange={handleLinkChange}
                                value={localLink}
                            />
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
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    max-width: ${consts.maxAppWidth}px;
                    margin: auto;
                }

                .bottom-buttons {
                    display: flex;
                    gap: 20px;
                }

                .song {
                    width: 100%;
                    color: ${theme.palette.primary.main};
                    background-color: ${theme.palette.grey[800]};
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
            `}</style>
        </div>
    )
}
