import { consts } from '../utils/consts'
import { theme } from '../utils/theme'
import { Item, Store } from '../utils/types'

export function ListItem(props: { item: Item; store: Store }) {
    function handleClick() {
        props.store.selectedLabelId = props.item.id
    }

    return (
        <>
            <div className='item' onClick={handleClick}>
                {props.item.name}
            </div>

            <style jsx>{`
                .item {
                    width: 100%;
                    max-width: ${consts.maxAppWidth}px;
                    color: ${theme.palette.primary.main};
                    padding: 20px;
                    margin: 10px;
                    border-radius: ${consts.borderRadius}px;
                    border: 1px solid ${theme.palette.divider};
                    cursor: pointer;
                }

                .item:hover {
                    background-color: #ffffff11;
                }
            `}</style>
        </>
    )
}
