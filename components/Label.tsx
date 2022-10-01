import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import { useState } from 'react'
import { deleteDocTyped } from '../utils/db'
import { Label, Store } from '../utils/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DeleteIcon from '@mui/icons-material/Delete'
import { fade, shortWait } from '../utils/animate'
import { LoadingButton } from '@mui/lab'
import { LinkForm } from './LinkForm'
import { NameForm } from './NameForm'
import { FollowersForm } from './FollowersForm'
import { consts } from '../utils/consts'
import { ArtistsForm } from './ArtistsForm'

export function Label(props: { item: Label; store: Store }) {
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingDialog, setLoadingDialog] = useState(false)

    async function openConfirmDelete() {
        setLoadingDialog(true)
        await shortWait()
        setConfirmOpen(true)
        setLoadingDialog(false)
    }

    function closeConfirmDelete() {
        setConfirmOpen(false)
    }

    async function handleBack() {
        await fade()
        props.store.selectedLabelId = null
    }

    async function handleDelete() {
        setLoading(true)
        await shortWait()
        await deleteDocTyped(props.store.db, props.item.id)
        await handleBack()
    }

    return (
        <div className='label'>
            {props.item ? (
                <>
                    <NameForm label={props.item} store={props.store} />
                    <LinkForm label={props.item} store={props.store} />
                    <FollowersForm label={props.item} store={props.store} />
                    <ArtistsForm label={props.item} store={props.store} />
                </>
            ) : (
                <h1>Label deleted</h1>
            )}

            <div className='bottom-buttons'>
                <Button color='primary' variant='contained' onClick={handleBack} startIcon={<ArrowBackIcon />}>
                    Back
                </Button>
                {props.item && (
                    <LoadingButton
                        color='secondary'
                        variant='contained'
                        onClick={openConfirmDelete}
                        startIcon={<DeleteIcon />}
                        loading={loadingDialog}
                    >
                        Delete
                    </LoadingButton>
                )}
            </div>

            <Dialog open={confirmOpen} onClose={closeConfirmDelete}>
                <DialogTitle>Are you sure you want to delete?</DialogTitle>
                <DialogActions>
                    <Button onClick={closeConfirmDelete}>No</Button>
                    <LoadingButton onClick={handleDelete} loading={loading}>
                        Delete
                    </LoadingButton>
                </DialogActions>
            </Dialog>

            <style jsx>{`
                .label {
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
            `}</style>
        </div>
    )
}
