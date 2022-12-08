import { User } from 'firebase/auth'
import { useState } from 'react'
import { DialogOptions } from '../components/popups/GeneralDialog'
import { emptyExtra, emptyLabel, useInitDb } from './db'
import { Label, SortType } from './types'

export type Store = ReturnType<typeof useStore>

let globalStore: Store
export function store() {
    return globalStore
}

export function useStore() {
    const { db, error } = useInitDb()

    const store = makeStore(
        { db, error },
        {
            labels: <Label[]>[],
            extra: emptyExtra,
            sort: <SortType>'follower',
            dialog: <DialogOptions | null>null,
            snackbar: '',
            listScrollPos: 0,
            loading: true,
            user: <User | null>null,
        }
    )

    globalStore = store

    return store
}

function makeStore<Readonly, Config extends {}>(readonly: Readonly, config: Config) {
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
