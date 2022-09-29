import AddIcon from '@mui/icons-material/Add'
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { fade, shortWait } from '../utils/animate'
import { consts } from '../utils/consts'
import { addDocTyped } from '../utils/db'
import { theme } from '../utils/theme'
import { Store } from '../utils/types'
import LoadingButton from '@mui/lab/LoadingButton'

export function Input(props: { store: Store }) {
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)

    function handleKeyUp(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            handleAdd()
        }
    }

    async function handleAdd() {
        if (name) {
            try {
                setLoading(true)
                await shortWait()
                await fade()
                const doc = await addDocTyped(props.store.db, name)
                props.store.selectedLabelId = doc.id
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
                id='outlined-basic'
                label='Type label name...'
                variant='outlined'
                sx={{ color: theme.palette.primary.main, width: '100%', maxWidth: consts.maxAppWidth }}
                value={name}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                autoComplete='off'
                onSubmit={handleAdd}
            />
            <LoadingButton
                color='primary'
                variant='contained'
                startIcon={<AddIcon />}
                onClick={handleAdd}
                disabled={name.length === 0}
                loading={loading}
            >
                Add
            </LoadingButton>

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
