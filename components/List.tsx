import { collection, Firestore, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { getPassword } from '../utils/getPassword'
import { useLabelList } from '../utils/labelList'
import { Store } from '../utils/types'
import { Item, ListItem } from './ListItem'

export function List(props: { store: Store }) {
    return (
        <div className='list'>
            {props.store.list.map((label, i) => {
                return <ListItem item={label} key={i} store={props.store} />
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
