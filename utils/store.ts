import { Firestore } from 'firebase/firestore'
import { useState } from 'react'
import { createStore } from 'truly-global-state'
import { useDb, useInitDb } from './db'
import { usePassword } from './getPassword'
import { DbExtra, Label, SortType } from './types'

interface DialogOptions {
    message: string
    actions: { label: string; callback?: () => void }[]
}

export type Store = ReturnType<typeof useStore>

export function useStore() {
    const { db, error } = useInitDb()
    const { labels, extra } = useDb(db)
    const password = usePassword()
    const [selectedLabelId, setSelectedLabelId] = useState<string>(null)
    const [showMusic, setShowMusic] = useState(false)
    const [sort, setSort] = useState<SortType>('follower')
    const [dialog, setDialog] = useState<DialogOptions>(null)

    const store = {
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
        get dialog() {
            return dialog
        },
        set dialog(value) {
            setDialog(value)
        },
    }

    return store
}

export const store2 = createStore({
    listScrollPos: 0,
})
