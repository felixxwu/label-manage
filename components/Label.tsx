import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import { useState } from 'react'
import { deleteDocTyped } from '../utils/db'
import { theme } from '../utils/theme'
import { Item, Store } from '../utils/types'

export function Label(props: { item: Item; store: Store }) {
    const [confirmOpen, setConfirmOpen] = useState(false)

    function openConfirmDelete() {
        setConfirmOpen(true)
    }

    function closeConfirmDelete() {
        setConfirmOpen(false)
    }

    function handleBack() {
        props.store.selectedLabelId = null
    }

    async function handleDelete() {
        await deleteDocTyped(props.store.db, props.item)
        handleBack()
    }

    return (
        <div className='label'>
            <h1 className='title'>{props.item?.name}</h1>
            <Button color='warning' variant='contained' onClick={openConfirmDelete}>
                Delete
            </Button>
            <Button color='primary' variant='contained' onClick={handleBack}>
                Back
            </Button>

            <Dialog open={confirmOpen} onClose={closeConfirmDelete}>
                <DialogTitle>Are you sure you want to delete?</DialogTitle>
                <DialogActions>
                    <Button onClick={closeConfirmDelete}>No</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>

            <style jsx>{`
                .title {
                    color: ${theme.palette.primary.main};
                }

                .label {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                }
            `}</style>
        </div>
    )
}
