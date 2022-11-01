import { Button, DialogActions, DialogContent, TextField } from '@mui/material'
import { Label } from '../utils/types'
import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { useShortLoad } from '../utils/useShortLoad'
import { Store } from '../utils/store'
import { Chips } from './Chips'

export function ArtistsForm(props: { label: Label; store: Store }) {
    const [itemToAdd, setItemToAdd] = useState('')
    const [loading, load] = useShortLoad()

    return (
        <Chips
            dbKey='artists'
            title='Artists:'
            label={props.label}
            store={props.store}
            addDialog={({ closeDialog, addItem }) => {
                function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
                    setItemToAdd(e.target.value)
                }

                function handleKeyUp(e: React.KeyboardEvent) {
                    if (e.key === 'Enter') {
                        submitItem()
                    }
                }

                async function submitItem() {
                    await load()
                    addItem(itemToAdd)
                    setItemToAdd('')
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
                            <LoadingButton onClick={submitItem} loading={loading}>
                                Add
                            </LoadingButton>
                        </DialogActions>
                    </>
                )
            }}
        />
    )
}
