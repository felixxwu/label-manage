import { collection, Firestore, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { getPassword } from '../utils/getPassword'
import { onSnapshotTyped } from './db'
import { Item } from './types'

export function useLabelList(db: Firestore) {
    const [list, setList] = useState<Item[]>([])

    useEffect(() => {
        if (!db) return
        if (!getPassword()) return
        onSnapshotTyped(db, items => setList(items))
    }, [db])

    return list
}
