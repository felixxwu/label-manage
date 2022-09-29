import { collection, Firestore, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { getPassword } from '../utils/getPassword'
import { useLabelList } from '../utils/labelList'
import { Item, ListItem } from './ListItem'

export function List(props: { list: Item[] }) {
    return (
        <div className='list'>
            {props.list.map((li, i) => {
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
