import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { DialogOptions } from '../components/popups/GeneralDialog'
import { emptyExtra, useInitDb } from './db'
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
      loading: false,
      user: <User | null>null,
      styleFilter: <string[]>[],
    }
  )

  useEffect(() => {
    session.restore(store)
  }, [])

  globalStore = store

  return store
}

function makeStore<Readonly, Config extends {}>(readonly: Readonly, config: Config) {
  // only here to pass build
  if (typeof window == 'undefined') return { ...readonly, ...config }

  const store = readonly
  for (const key of Object.keys(config) as (keyof Config)[]) {
    const [value, setValue] = useState(config[key])
    Object.defineProperty(store, key, {
      get() {
        return value
      },
      set(newValue) {
        session.save(key, newValue)
        return setValue(newValue)
      },
      enumerable: true,
    })
  }
  return store as Readonly & Config
}

const session = {
  save(key: string | number | symbol, newValue: any) {
    if (typeof key === 'string') sessionStorage.setItem(key, JSON.stringify(newValue))
  },
  hasKey(key: string | number | symbol) {
    if (!(typeof key === 'string')) return false
    return key in sessionStorage
  },
  restore<Store extends {}>(store: Store) {
    const keys = Object.keys(store)
    for (const key of keys) {
      const storageItem = sessionStorage.getItem(key)
      if (this.hasKey(key)) {
        store[key] = storageItem === null ? null : JSON.parse(storageItem)
      }
    }
  },
}
