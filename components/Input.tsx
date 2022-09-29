import AddIcon from '@mui/icons-material/Add'
import { Button, TextField } from '@mui/material'
import { addDoc, collection, Firestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { consts } from '../utils/consts'
import { getPassword } from '../utils/getPassword'
import { theme } from '../utils/theme'

export function Input(props: { db: Firestore }) {
    const [text, setText] = useState('')

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
                autoComplete='off'
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

    async function handleAdd() {
        if (text) {
            try {
                await addDoc(collection(props.db, getPassword()), {
                    name: text,
                })
                setText('')
            } catch (e) {
                alert(e)
            }
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }
}
