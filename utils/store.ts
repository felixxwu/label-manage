import { useState } from 'react'
import { useDb, useInitDb } from './db'
import { usePassword } from './getPassword'
import { SortType } from './types'

interface DialogOptions {
    message: string
    actions: { label: string; callback?: () => void }[]
}

export type Store = ReturnType<typeof useStore>

let globalStore
export function store() {
    return globalStore
}

export function useStore() {
    const { db, error } = useInitDb()
    const { labels, extra } = useDb(db)
    const password = usePassword()

    const store = makeStore(
        { db, error, labels, extra, password },
        {
            selectedLabelId: <string>null,
            showMusic: false,
            sort: <SortType>'follower',
            dialog: <DialogOptions>null,
            listScrollPos: 0,
        }
    )

    globalStore = store

    return store
}

function makeStore<Readonly, Config>(readonly: Readonly, config: Config) {
    const store = readonly
    for (const key of Object.keys(config) as (keyof Config)[]) {
        const [value, setValue] = useState(config[key])
        Object.defineProperty(store, key, {
            get() {
                return value
            },
            set(newValue) {
                return setValue(newValue)
            },
        })
    }
    return store as Readonly & Config
}
