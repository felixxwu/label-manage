import { collection, Firestore, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { getPassword } from '../utils/getPassword'
import { Item } from '../components/ListItem'

export function useLabelList(db: Firestore) {
    const [list, setList] = useState<Item[]>([])

    useEffect(() => {
        if (!db) return
        if (!getPassword()) return
        onSnapshot(collection(db, getPassword()), doc => {
            setList(
                doc.docs.map(doc => ({
                    ...(doc.data() as Item),
                    id: doc.id,
                }))
            )
        })
    }, [db])

    return list
}
