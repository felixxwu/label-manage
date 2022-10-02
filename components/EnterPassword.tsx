import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { getUrlPassword } from '../utils/getPassword'
import { useShortLoad } from '../utils/useShortLoad'
import { LoadingButton } from '@mui/lab'

export function EnterPassword() {
    const [password, setPassword] = useState('')
    const [loading, load] = useShortLoad()

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
        await load()
        window.localStorage.setItem('password', password)
        const urlParams = new URLSearchParams(window.location.search)
        urlParams.set('p', password)
        window.location.search = urlParams.toString()
    }

    return (
        <div className='password'>
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
            <LoadingButton
                variant='contained'
                onClick={() => enterPassword(password)}
                endIcon={<ArrowForwardIcon />}
                loading={loading}
            >
                Enter
            </LoadingButton>

            <style jsx>{`
                .password {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                }
            `}</style>
        </div>
    )
}
