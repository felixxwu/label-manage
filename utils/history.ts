import { useEffect } from 'react'

export function setHistory(name: string) {
    useEffect(() => {
        history.pushState('nohb', null, '#' + name)
    }, [])
}
