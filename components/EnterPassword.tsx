import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export function EnterPassword() {
    const [password, setPassword] = useState('')

    useEffect(() => {
        const localPassword = window.localStorage.getItem('password')
        if (localPassword) {
            setPassword(localPassword)
        }
    }, [])

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setPassword(e.target.value)
    }

    function handleKeyUp(e: React.KeyboardEvent<HTMLElement>) {
        if (e.key === 'Enter') {
            window.localStorage.setItem('password', password)
            console.log('password', password)
            enterPassword()
        }
    }

    function enterPassword() {
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
            />
            <Button variant='contained' onClick={enterPassword} endIcon={<ArrowForwardIcon />}>
                Enter
            </Button>

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
