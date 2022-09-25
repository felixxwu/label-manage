import { collection, Firestore, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { getPassword } from '../utils/getPassword'
import { Item, ListItem } from './ListItem'

export function List(props: { db: Firestore }) {
    const [list, setList] = useState<Item[]>([])

    useEffect(() => {
        if (!props.db) return
        if (!getPassword()) return
        onSnapshot(collection(props.db, getPassword()), doc => {
            setList(doc.docs.map(doc => doc.data() as Item))
        })
    }, [props.db])

    return (
        <div className='list'>
            {list.map((li, i) => {
                return <ListItem item={li} key={i} />
            })}

            <style jsx>{`
                .list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                }
            `}</style>
        </div>
    )
}
