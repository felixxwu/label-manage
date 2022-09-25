import { Firestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

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
                setDb(db)
            } catch (e) {
                setError(e)
            }
        })()
    }, [])

    return { db, error }
}
