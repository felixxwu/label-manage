import { Firestore } from 'firebase/firestore'
import { useState } from 'react'
import { useDb, useInitDb } from './db'
import { usePassword } from './getPassword'
import { DbExtra, Label, SortType } from './types'

export interface Store {
    readonly db: Firestore
    readonly error: string
    readonly labels: Label[]
    readonly extra: DbExtra
    readonly password: string
    selectedLabelId: string
    showMusic: boolean
    sort: SortType
}

export function useStore() {
    const { db, error } = useInitDb()
    const { labels, extra } = useDb(db)
    const password = usePassword()
    const [selectedLabelId, setSelectedLabelId] = useState<string>(null)
    const [showMusic, setShowMusic] = useState(false)
    const [sort, setSort] = useState<SortType>('follower')

    const store: Store = {
        db,
        error,
        labels,
        extra,
        password,
        get selectedLabelId() {
            return selectedLabelId
        },
        set selectedLabelId(id) {
            setSelectedLabelId(id)
        },
        get showMusic() {
            return showMusic
        },
        set showMusic(value) {
            setShowMusic(value)
        },
        get sort() {
            return sort
        },
        set sort(value) {
            setSort(value)
        },
    }

    return store
}
