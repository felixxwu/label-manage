import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { getUrlPassword } from '../utils/getPassword'
import styled from '@emotion/styled'

export function EnterPassword() {
    const [password, setPassword] = useState('')

    useEffect(() => {
        const localPassword = window.localStorage.getItem('password')
        if (localPassword) {
            setPassword(localPassword)

            if (!getUrlPassword()) {
                enterPassword(localPassword)
            }
        }
    }, [])

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setPassword(e.target.value)
    }

    function handleKeyUp(e: React.KeyboardEvent<HTMLElement>) {
        if (e.key === 'Enter') {
            enterPassword(password)
        }
    }

    async function enterPassword(password: string) {
        if (!password) return
        window.localStorage.setItem('password', password)
        const urlParams = new URLSearchParams(window.location.search)
        urlParams.set('p', password)
        window.location.search = urlParams.toString()
    }

    return (
        <Password>
            <TextField
                label='Password'
                variant='outlined'
                value={password}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                autoComplete='off'
                autoFocus
                spellCheck='false'
            />
            <Button
                variant='contained'
                onClick={() => enterPassword(password)}
                endIcon={<ArrowForwardIcon color='primary' />}
            >
                Enter
            </Button>
        </Password>
    )
}

const Password = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
