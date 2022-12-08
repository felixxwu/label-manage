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
import { getFirestore } from 'firebase/firestore'
import { DbExtra, Label } from './types'
import { consts } from './consts'
import { store } from './store'
import { snackError } from './snackError'
import { app } from './firebaseInit'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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

export const emptyExtra: DbExtra = {
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
                const db = getFirestore(app)
                setDb(db)
            } catch (e) {
                setError(`${e}`)
            }
        })()
    }, [])

    return { db, error }
}

export function useDb() {
    useEffect(() => {
        onAuthStateChanged(getAuth(), user => {
            store().user = user
            store().loading = false
            if (user) {
                const db = getFirestore(app)

                store().loading = true
                onSnapshotTyped(db, user.uid, (labels, extra) => {
                    store().loading = false

                    store().labels = labels.map(label => ({ ...emptyLabel, ...label }))

                    if (extra) {
                        store().extra = { ...emptyExtra, ...extra }
                    } else {
                        setDoc(doc(db, user.uid, consts.dbExtraId), emptyExtra)
                    }
                })
            }
        })
    }, [])
}

export async function addDocTyped(db: Firestore, name: string) {
    const emptyDoc: Omit<Label, 'id'> = {
        name,
        ...emptyLabel,
    }
    try {
        const uid = store().user?.uid
        if (uid !== undefined) {
            return addDoc(collection(db, uid), emptyDoc)
        }
    } catch (e) {
        snackError('Could not add document. ' + e)
    }
}

export async function updateDocTyped(
    labelID: string,
    item: Partial<Omit<Label, 'id'>> | Partial<DbExtra>
) {
    try {
        const uid = store().user?.uid
        if (uid === undefined) return snackError('No uid')
        const db = store().db
        if (db === null) return snackError('No db set')
        return updateDoc(doc(db, uid, labelID), item)
    } catch (e) {
        snackError('Could not update document. ' + e)
    }
}

export async function deleteDocTyped(db: Firestore, id: string) {
    try {
        const uid = store().user?.uid
        if (uid !== undefined) {
            return deleteDoc(doc(db, uid, id))
        }
    } catch (e) {
        snackError('Could not delete document. ' + e)
    }
}

export function onSnapshotTyped(
    db: Firestore,
    uid: string,
    callback: (items: Label[], extra: DbExtra) => void
) {
    try {
        onSnapshot(collection(db, uid), snapshot => {
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
