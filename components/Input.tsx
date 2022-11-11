import AddIcon from '@mui/icons-material/Add'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { fade } from '../utils/animate'
import { consts } from '../utils/consts'
import { addDocTyped } from '../utils/db'
import LoadingButton from '@mui/lab/LoadingButton'
import { useShortLoad } from '../utils/useShortLoad'
import { Store } from '../utils/store'

export function Input(props: { store: Store }) {
    const [name, setName] = useState('')
    const [loading, shortLoad] = useShortLoad()

    function handleKeyUp(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            handleAdd()
        }
    }

    async function handleAdd() {
        if (name) {
            try {
                await shortLoad()
                const doc = await addDocTyped(props.store.db, name)
                await fade()
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
            <LoadingButton
                color='primary'
                variant='contained'
                size='large'
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
