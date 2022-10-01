import { Store } from '../utils/types'
import { ListItem } from './ListItem'

export function List(props: { store: Store }) {
    return (
        <div className='list'>
            {props.store.labels.map((label, i) => {
                return <ListItem label={label} key={i} store={props.store} />
            })}

            <style jsx>{`
                .list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}
