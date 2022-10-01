import { addDoc, collection, deleteDoc, doc, Firestore, onSnapshot, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getPassword } from './getPassword'
import { Label } from './types'
import { fade } from './animate'

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
        if (!getPassword()) setError('No password')
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

export async function addDocTyped(db: Firestore, name: string) {
    const emptyDoc: Omit<Label, 'id'> = {
        name,
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

export async function updateDocTyped(db: Firestore, id: string, item: Omit<Partial<Label>, 'id'>) {
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

export function onSnapshotTyped(db: Firestore, callback: (items: Label[]) => void) {
    try {
        onSnapshot(collection(db, getPassword()), snapshot => {
            const items = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                } as Label
            })
            callback(items)
        })
    } catch (e) {
        alert(e)
    }
}
