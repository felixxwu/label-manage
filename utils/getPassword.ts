import { useEffect, useState } from 'react'
import { consts } from './consts'

export function getUrlPassword() {
    const password = new URLSearchParams(window.location.search).get(consts.urlPasswordParam)
    if (!password || password.length === 0) return null
    return password
}

export function usePassword() {
    const [password, setPassword] = useState('')

    useEffect(() => {
        const password = getUrlPassword()
        if (password) {
            setPassword(password)
        }
    }, [])

    return password
}
