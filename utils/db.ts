import { addDoc, collection, deleteDoc, doc, Firestore, onSnapshot, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getPassword } from './getPassword'
import { Item } from './types'

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
                setDb(db)
            } catch (e) {
                setError(`${e}`)
            }
        })()
    }, [])

    return { db, error }
}

export async function addDocTyped(db: Firestore, item: Partial<Item>) {
    return addDoc(collection(db, getPassword()), item)
}

export async function updateDocTyped(db: Firestore, item: Partial<Item> & Pick<Item, 'id'>) {
    return updateDoc(doc(db, getPassword(), item.id), item)
}

export async function deleteDocTyped(db: Firestore, item: Partial<Item> & Pick<Item, 'id'>) {
    return deleteDoc(doc(db, getPassword(), item.id))
}

export function onSnapshotTyped(db: Firestore, callback: (items: Item[]) => void) {
    onSnapshot(collection(db, getPassword()), snapshot => {
        const items = snapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id,
            } as Item
        })
        callback(items)
    })
}
