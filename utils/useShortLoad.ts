import { useState } from 'react'
import { shortWait } from './animate'

export function useShortLoad(): [boolean, () => Promise<void>] {
    const [loading, setLoading] = useState(false)

    const shortLoad = async () => {
        setLoading(true)
        await shortWait()
        setLoading(false)
    }

    return [loading, shortLoad]
}
