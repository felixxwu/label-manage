import AddIcon from '@mui/icons-material/Add'
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { fade } from '../utils/animate'
import { consts } from '../utils/consts'
import { addDocTyped } from '../utils/db'
import { store } from '../utils/store'

export function Input() {
    const [name, setName] = useState('')

    function handleKeyUp(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            handleAdd()
        }
    }

    async function handleAdd() {
        if (name) {
            try {
                const doc = await addDocTyped(store().db, name)
                await fade()
                store().selectedLabelId = doc.id
            } catch (e) {
                alert(e)
            }
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }

    return (
        <div className='inputArea'>
            <TextField
                label='Type to add label...'
                variant='outlined'
                sx={{ width: '100%' }}
                value={name}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                autoComplete='off'
                autoFocus
                color='primary'
            />
            <Button
                color='primary'
                variant='contained'
                size='large'
                startIcon={<AddIcon />}
                onClick={handleAdd}
                disabled={name.length === 0}
            >
                Add
            </Button>

            <style jsx>{`
                .inputArea {
                    width: 100%;
                    max-width: ${consts.maxAppWidth}px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    gap: 20px;
                }
            `}</style>
        </div>
    )
}
