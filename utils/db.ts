import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    Firestore,
    onSnapshot,
    setDoc,
    updateDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getUrlPassword } from './getPassword'
import { DbExtra, Label } from './types'
import { fade } from './animate'
import { consts } from './consts'
import { store } from './store'
import { snackError } from './snackError'

const firebaseConfig = {
    apiKey: 'AIzaSyDdEEWeBs77K0H7WUU1pBUYNpNKzJhfuU8',
    authDomain: 'label-manage.firebaseapp.com',
    projectId: 'label-manage',
    storageBucket: 'label-manage.appspot.com',
    messagingSenderId: '245804327017',
    appId: '1:245804327017:web:ef7bc5eb7f4bbf6b6a02f8',
}

export const emptyLabel: Omit<Label, 'id' | 'name'> = {
    image: '',
    artists: [],
    followers: 0,
    link: '',
    notes: '',
    styles: [],
    submission: '',
    songsSubmitted: [],
    songsSkipped: [],
    inactive: false,
    acceptDemos: false,
    lastUploaded: '',
    lastScraped: 0,
    tracks: {
        recent: [],
        reposts: [],
        popular: [],
    },
}

const emptyExtra: DbExtra = {
    songs: [],
    compact: false,
    styles: [],
    template: '',
}

export function useInitDb() {
    const [db, setDb] = useState<Firestore | null>(null)
    const [error, setError] = useState<string | null>(null)

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

export function useDb(db: Firestore | null) {
    const [labels, setLabels] = useState<Label[]>([])
    const [extra, setExtra] = useState(emptyExtra)

    useEffect(() => {
        if (!db) return
        if (!getUrlPassword()) return

        onSnapshotTyped(db, (labels, extra) => {
            setLabels(labels.map(label => ({ ...emptyLabel, ...label })))

            if (extra) {
                setExtra({ ...emptyExtra, ...extra })
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
        ...emptyLabel,
    }
    try {
        const password = getUrlPassword()
        if (password !== null) {
            return addDoc(collection(db, password), emptyDoc)
        }
    } catch (e) {
        snackError('Could not add document. ' + e)
    }
}

function initExtra(db: Firestore) {
    try {
        const password = getUrlPassword()
        if (password !== null) {
            return setDoc(doc(db, password, consts.dbExtraId), emptyExtra)
        }
    } catch (e) {
        snackError('Could not initialise extras document. ' + e)
    }
}

export async function updateDocTyped(
    labelID: string,
    item: Partial<Omit<Label, 'id'>> | Partial<DbExtra>
) {
    try {
        const password = getUrlPassword()
        if (password === null) return snackError('No password')
        const db = store().db
        if (db === null) return snackError('No db set')
        return updateDoc(doc(db, password, labelID), item)
    } catch (e) {
        snackError('Could not update document. ' + e)
    }
}

export async function deleteDocTyped(db: Firestore, id: string) {
    try {
        const password = getUrlPassword()
        if (password !== null) {
            return deleteDoc(doc(db, password, id))
        }
    } catch (e) {
        snackError('Could not delete document. ' + e)
    }
}

export function onSnapshotTyped(db: Firestore, callback: (items: Label[], extra: DbExtra) => void) {
    try {
        const password = getUrlPassword()
        if (password === null) return
        onSnapshot(collection(db, password), snapshot => {
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
