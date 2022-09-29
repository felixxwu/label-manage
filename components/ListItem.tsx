import { consts } from '../utils/consts'
import { theme } from '../utils/theme'

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
                    border: 1px solid ${theme.palette.secondary.main};
                    cursor: pointer;
                }

                .item:hover {
                    background-color: #ffffff11;
                }
            `}</style>
        </>
    )
}
