import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import { useState } from 'react'
import { deleteDocTyped } from '../utils/db'
import { Label, Store } from '../utils/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DeleteIcon from '@mui/icons-material/Delete'
import { fade, shortWait } from '../utils/animate'
import { LoadingButton } from '@mui/lab'
import { LinkForm } from '../components/LinkForm'
import { NameForm } from '../components/NameForm'
import { FollowersForm } from '../components/FollowersForm'
import { ArtistsForm } from '../components/ArtistsForm'
import { ImageForm } from '../components/ImageForm'
import { SubmissionForm } from '../components/SubmissionForm'
import { Progress } from '../components/Progress'
import { setHistory } from '../utils/history'

export function Label(props: { item: Label; store: Store }) {
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingDialog, setLoadingDialog] = useState(false)

    setHistory('label')

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
                    <div className='header'>
                        <ImageForm label={props.item} store={props.store} />
                        <Progress label={props.item} store={props.store} />
                    </div>
                    <NameForm label={props.item} store={props.store} />
                    <LinkForm label={props.item} store={props.store} />
                    <SubmissionForm label={props.item} store={props.store} />
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
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 20px;
                    margin: auto;
                }

                .bottom-buttons {
                    display: flex;
                    gap: 20px;
                }

                .header {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}</style>
        </div>
    )
}
