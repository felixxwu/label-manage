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
        if (getUrlPassword()) {
            setPassword(getUrlPassword())
        }
    }, [])

    return password
}
