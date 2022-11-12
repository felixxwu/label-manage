import { Button, DialogActions, DialogContent, TextField } from '@mui/material'
import { Label } from '../../utils/types'
import React, { useState } from 'react'
import { store } from '../../utils/store'
import { Chips } from '../Chips'
import { updateDocTyped } from '../../utils/db'

export function ArtistsForm(props: { label: Label }) {
    const [itemToAdd, setItemToAdd] = useState('')

    async function handleDelete(style: string) {
        updateDocTyped(store().db, props.label.id, {
            artists: props.label.artists.filter(item => item !== style),
        })
    }

    return (
        <Chips
            title='Artists:'
            colorful
            chips={props.label.artists}
            onDelete={handleDelete}
            addDialog={({ closeDialog }) => {
                function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
                    setItemToAdd(e.target.value)
                }

                function handleKeyUp(e: React.KeyboardEvent) {
                    if (e.key === 'Enter') {
                        submitItem()
                    }
                }

                async function submitItem() {
                    await updateDocTyped(store().db, props.label.id, {
                        artists: props.label.artists.concat(itemToAdd),
                    })
                    setItemToAdd('')
                    closeDialog()
                }

                return (
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
                                value={itemToAdd}
                                autoComplete='off'
                                autoCorrect='off'
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeDialog}>Cancel</Button>
                            <Button onClick={submitItem}>Add</Button>
                        </DialogActions>
                    </>
                )
            }}
        />
    )
}
