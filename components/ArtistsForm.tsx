import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import { Label, Store } from '../utils/types'
import AddIcon from '@mui/icons-material/Add'
import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { useShortLoad } from '../utils/useShortLoad'
import { updateDocTyped } from '../utils/db'

export function ArtistsForm(props: { label: Label; store: Store }) {
    const [dialogContent, setDialogContent] = useState<'delete' | 'add' | 'closed'>('closed')
    const [artistToDelete, setArtistToDelete] = useState('')
    const [loading, load] = useShortLoad()
    const [artistToAdd, setArtistToAdd] = useState('')

    function openDeleteDialog(artist: string) {
        setDialogContent('delete')
        setArtistToDelete(artist)
    }

    function openAddDialog() {
        setArtistToAdd('')
        setDialogContent('add')
    }

    function closeDialog() {
        setDialogContent('closed')
    }

    async function addArtist() {
        if (artistToAdd === '') return
        await load()
        updateDocTyped(props.store.db, props.label.id, { artists: props.label.artists.concat(artistToAdd) })
        closeDialog()
    }

    async function deleteArtist() {
        if (artistToDelete === '') return
        await load()
        updateDocTyped(props.store.db, props.label.id, {
            artists: props.label.artists.filter(artist => artist !== artistToDelete),
        })
        closeDialog()
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setArtistToAdd(e.target.value)
    }

    function handleKeyUp(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            addArtist()
        }
    }

    return (
        <div className='chips'>
            {props.label.artists.map((artist, index) => (
                <div onClick={() => openDeleteDialog(artist)} key={index}>
                    <Chip sx={{ cursor: 'pointer' }} label={artist} />
                </div>
            ))}
            <IconButton onClick={openAddDialog}>
                <AddIcon />
            </IconButton>

            <Dialog open={dialogContent !== 'closed'} onClose={closeDialog}>
                {dialogContent === 'add' && (
                    <>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin='normal'
                                label='Artist Name'
                                fullWidth
                                variant='standard'
                                onChange={handleInput}
                                onKeyUp={handleKeyUp}
                                value={artistToAdd}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeDialog}>Cancel</Button>
                            <LoadingButton onClick={addArtist} loading={loading}>
                                Add
                            </LoadingButton>
                        </DialogActions>
                    </>
                )}
                {dialogContent === 'delete' && (
                    <>
                        <DialogTitle>Delete {artistToDelete}?</DialogTitle>
                        <DialogActions>
                            <Button onClick={closeDialog}>No</Button>
                            <LoadingButton onClick={deleteArtist} loading={loading}>
                                Delete
                            </LoadingButton>
                        </DialogActions>
                    </>
                )}
            </Dialog>

            <style jsx>{`
                .chips {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    flex-wrap: wrap;
                }
            `}</style>
        </div>
    )
}
