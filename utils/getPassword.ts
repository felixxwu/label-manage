import { useEffect, useState } from 'react'
import { consts } from './consts'

export function getPassword() {
    return new URLSearchParams(window.location.search).get(consts.urlPasswordParam)
}

export function usePassword() {
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (getPassword()) {
            setPassword(getPassword())
        }
    }, [])

    return password
}
