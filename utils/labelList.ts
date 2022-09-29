import { Firestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { getPassword } from '../utils/getPassword'
import { onSnapshotTyped } from './db'
import { Label } from './types'

export function useLabels(db: Firestore) {
    const [labels, setLabels] = useState<Label[]>([])

    useEffect(() => {
        if (!db) return
        if (!getPassword()) return
        onSnapshotTyped(db, setLabels)
    }, [db])

    return labels
}
