import AddIcon from '@mui/icons-material/Add'
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { consts } from '../utils/consts'
import { addDocTyped } from '../utils/db'
import { theme } from '../utils/theme'
import { Store } from '../utils/types'

export function Input(props: { store: Store }) {
    const [text, setText] = useState('')

    function handleKeyUp(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            handleAdd()
        }
    }

    async function handleAdd() {
        if (text) {
            try {
                const doc = await addDocTyped(props.store.db, { name: text })
                props.store.selectedLabelId = doc.id
            } catch (e) {
                alert(e)
            }
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }

    return (
        <div className='inputArea'>
            <TextField
                id='outlined-basic'
                label='Type label name...'
                variant='outlined'
                autoFocus
                sx={{ color: theme.palette.primary.main, width: '100%', maxWidth: consts.maxAppWidth }}
                value={text}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                autoComplete='off'
                onSubmit={handleAdd}
            />
            <Button
                color='primary'
                variant='contained'
                endIcon={<AddIcon />}
                onClick={handleAdd}
                disabled={text.length === 0}
            >
                Add
            </Button>

            <style jsx>{`
                .inputArea {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    flex-direction: column;
                    gap: 20px;
                }
            `}</style>
        </div>
    )
}
