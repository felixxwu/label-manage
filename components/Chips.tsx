import { Button, Chip, Dialog, DialogActions, DialogTitle, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { useShortLoad } from '../utils/useShortLoad'
import { getColorHash } from '../utils/colorHash'

export function Chips(props: {
    chips: string[]
    colorful?: boolean
    title?: string
    onDelete?: (item: string) => Promise<void>
    onClick?: (item: string) => Promise<void>
    addDialog?: (props: { closeDialog: () => void }) => React.ReactNode
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

    async function deleteItem() {
        if (itemToDelete === '') return
        await load()
        await props.onDelete(itemToDelete)
        closeDialog()
    }

    function handleClick(item: string) {
        props.onClick(item)
    }

    return (
        <div className='wrapper'>
            {props.title}
            <div className='chips'>
                {props.chips
                    .sort((a, b) => (a < b ? -1 : 1))
                    .map((item, index) => (
                        <Chip
                            label={item}
                            onClick={props.onClick && (() => handleClick(item))}
                            onDelete={props.onDelete && (() => openDeleteDialog(item))}
                            key={index}
                            sx={{ backgroundColor: props.colorful ? getColorHash(item) : '' }}
                        />
                    ))}
                {props.addDialog && (
                    <IconButton onClick={openAddDialog}>
                        <AddIcon />
                    </IconButton>
                )}
            </div>
            <Dialog open={dialogContent !== 'closed'} onClose={closeDialog}>
                {dialogContent === 'add' && props.addDialog && props.addDialog({ closeDialog })}
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
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

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
