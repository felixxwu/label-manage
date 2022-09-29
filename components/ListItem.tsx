import { consts } from '../utils/consts'

export interface Item {
    id: string
    name: string
}

export function ListItem(props: { item: Item }) {
    return (
        <>
            <div className='item'>{props.item.name}</div>
            <style jsx>{`
                .item {
                    width: 100%;
                    max-width: ${consts.maxAppWidth}px;
                    color: white;
                    padding: 20px;
                    margin: 10px;
                    border-radius: ${consts.borderRadius}px;
                    border: 1px solid #444;
                    cursor: pointer;
                }

                .item:hover {
                    background-color: #ffffff11;
                }
            `}</style>
        </>
    )
}
