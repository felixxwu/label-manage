import { addDoc, collection, deleteDoc, doc, Firestore, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getPassword } from './getPassword'
import { DbExtra, Label } from './types'
import { fade } from './animate'
import { consts } from './consts'

const firebaseConfig = {
    apiKey: 'AIzaSyDdEEWeBs77K0H7WUU1pBUYNpNKzJhfuU8',
    authDomain: 'label-manage.firebaseapp.com',
    projectId: 'label-manage',
    storageBucket: 'label-manage.appspot.com',
    messagingSenderId: '245804327017',
    appId: '1:245804327017:web:ef7bc5eb7f4bbf6b6a02f8',
}

export function useInitDb() {
    const [db, setDb] = useState<Firestore>(null)
    const [error, setError] = useState<string>(null)

    useEffect(() => {
        ;(async () => {
            try {
                const app = initializeApp(firebaseConfig)
                const db = getFirestore(app)
                await fade()
                setDb(db)
            } catch (e) {
                setError(`${e}`)
            }
        })()
    }, [])

    return { db, error }
}

export function useDb(db: Firestore) {
    const [labels, setLabels] = useState<Label[]>([])
    const [extra, setExtra] = useState<DbExtra>(undefined)

    useEffect(() => {
        if (!db) return
        if (!getPassword()) return

        onSnapshotTyped(db, (labels, extra) => {
            setLabels(labels)

            if (extra) {
                setExtra(extra)
            } else {
                initExtra(db)
            }
        })
    }, [db])

    return { labels, extra }
}

export async function addDocTyped(db: Firestore, name: string) {
    const emptyDoc: Omit<Label, 'id'> = {
        name,
        image: '',
        artists: [],
        email: '',
        followers: '?',
        link: '',
        notes: '',
        styles: [],
        submission: '',
    }
    try {
        return addDoc(collection(db, getPassword()), emptyDoc)
    } catch (e) {
        alert(e)
    }
}

function initExtra(db: Firestore) {
    const emptyExtra: DbExtra = {
        songs: [],
    }
    try {
        return setDoc(doc(db, getPassword(), consts.dbExtraId), emptyExtra)
    } catch (e) {
        alert(e)
    }
}

export async function updateDocTyped(db: Firestore, id: string, item: Omit<Partial<Label>, 'id'> | Partial<DbExtra>) {
    try {
        return updateDoc(doc(db, getPassword(), id), item)
    } catch (e) {
        alert(e)
    }
}

export async function deleteDocTyped(db: Firestore, id: string) {
    try {
        return deleteDoc(doc(db, getPassword(), id))
    } catch (e) {
        alert(e)
    }
}

export function onSnapshotTyped(db: Firestore, callback: (items: Label[], extra: DbExtra) => void) {
    try {
        onSnapshot(collection(db, getPassword()), snapshot => {
            const items = snapshot.docs
                .filter(doc => doc.id !== consts.dbExtraId)
                .map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id,
                    } as Label
                })
            const extra = snapshot.docs.find(doc => doc.id === consts.dbExtraId)?.data() as DbExtra
            callback(items, extra)
        })
    } catch (e) {
        alert(e)
    }
}
