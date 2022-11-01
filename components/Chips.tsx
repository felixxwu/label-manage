import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import { Label } from '../utils/types'
import AddIcon from '@mui/icons-material/Add'
import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { useShortLoad } from '../utils/useShortLoad'
import { updateDocTyped } from '../utils/db'
import { Store } from '../utils/store'

type StringArrayOnlyKeys<T extends Label> = {
    [K in keyof T]: T[K] extends String[] ? K : never
}[keyof T]

export function Chips(props: {
    label: Label
    store: Store
    dbKey: StringArrayOnlyKeys<Label>
    title: string
    addDialog: (props: { closeDialog: () => void; addItem: (item: string) => void }) => React.ReactNode
}) {
    const [dialogContent, setDialogContent] = useState<'delete' | 'add' | 'closed'>('closed')
    const [itemToDelete, setItemToDelete] = useState('')
    const [loading, load] = useShortLoad()

    function openDeleteDialog(item: string) {
        setDialogContent('delete')
        setItemToDelete(item)
    }

    function openAddDialog() {
        setDialogContent('add')
    }

    function closeDialog() {
        setDialogContent('closed')
    }

    async function addItem(item: string) {
        if (item === '') return
        await load()
        updateDocTyped(props.store.db, props.label.id, { [props.dbKey]: props.label[props.dbKey].concat(item) })
        closeDialog()
    }

    async function deleteItem() {
        if (itemToDelete === '') return
        await load()
        updateDocTyped(props.store.db, props.label.id, {
            [props.dbKey]: props.label[props.dbKey].filter(item => item !== itemToDelete),
        })
        closeDialog()
    }

    return (
        <div className='chips'>
            {props.title}
            {props.label[props.dbKey].map((item, index) => (
                <Chip label={item} onDelete={() => openDeleteDialog(item)} key={index} />
            ))}
            <IconButton onClick={openAddDialog} sx={{ marginLeft: '-8px' }}>
                <AddIcon />
            </IconButton>
            <Dialog open={dialogContent !== 'closed'} onClose={closeDialog}>
                {dialogContent === 'add' && props.addDialog({ addItem, closeDialog })}
                {dialogContent === 'delete' && (
                    <>
                        <DialogTitle>Delete {itemToDelete}?</DialogTitle>
                        <DialogActions>
                            <Button onClick={closeDialog}>No</Button>
                            <LoadingButton onClick={deleteItem} loading={loading}>
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
