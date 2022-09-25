import { collection, Firestore, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { getPassword } from '../utils/getPassword'

export function List(props: { db: Firestore }) {
    const [list, setList] = useState<string[]>([])

    useEffect(() => {
        if (!props.db) return
        if (!getPassword()) return
        onSnapshot(collection(props.db, getPassword()), doc => {
            setList(doc.docs.map(doc => doc.data().name))
        })
    }, [props.db])

    return (
        <div className='list'>
            {list.map((li, i) => {
                return (
                    <div className='listItem' key={i}>
                        {li}
                    </div>
                )
            })}

            <style jsx>{`
                .list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: white;
                }

                .listItem {
                    width: 300px;
                }
            `}</style>
        </div>
    )
}
