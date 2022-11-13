import { Button, Chip, Dialog, DialogActions, DialogTitle, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import React, { useState } from 'react'
import { getColorHash } from '../utils/colorHash'
import styled from '@emotion/styled'
import { theme } from '../utils/theme'

export function Chips(props: {
    chips: string[]
    colorful?: boolean
    title?: string
    small?: boolean
    outlined?: boolean
    onDelete?: (item: string) => Promise<void>
    onClick?: (item: string) => Promise<void>
    addDialog?: (props: { closeDialog: () => void }) => React.ReactNode
}) {
    const [dialogContent, setDialogContent] = useState<'delete' | 'add' | 'closed'>('closed')
    const [itemToDelete, setItemToDelete] = useState('')

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
        await props.onDelete(itemToDelete)
        closeDialog()
    }

    function handleClick(item: string) {
        props.onClick(item)
    }

    return (
        <Wrapper noClick={!props.onDelete && !props.onClick}>
            {props.title}
            <ChipsWrapper>
                {props.chips
                    .sort((a, b) => (a < b ? -1 : 1))
                    .map((item, index) => (
                        <Chip
                            label={item}
                            onClick={props.onClick && (() => handleClick(item))}
                            onDelete={props.onDelete && (() => openDeleteDialog(item))}
                            key={index}
                            size={props.small ? 'small' : 'medium'}
                            variant={props.outlined ? 'outlined' : 'filled'}
                            sx={{
                                color: theme.palette.primary.main,
                                backgroundColor: props.colorful ? getColorHash(item) : '',
                            }}
                        />
                    ))}
                {props.addDialog && (
                    <IconButton onClick={openAddDialog}>
                        <AddIcon color='primary' />
                    </IconButton>
                )}
            </ChipsWrapper>
            <Dialog open={dialogContent !== 'closed'} onClose={closeDialog}>
                {dialogContent === 'add' && props.addDialog && props.addDialog({ closeDialog })}
                {dialogContent === 'delete' && (
                    <>
                        <DialogTitle>Delete {itemToDelete}?</DialogTitle>
                        <DialogActions>
                            <Button onClick={closeDialog}>No</Button>
                            <Button onClick={deleteItem}>Delete</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Wrapper>
    )
}

const Wrapper = styled('div')<{ noClick: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 10px;

    pointer-events: ${({ noClick }) => (noClick ? 'none' : 'auto')};
`

const ChipsWrapper = styled('div')`
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
`
