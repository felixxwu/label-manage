import { fade } from '../utils/animate'
import { consts } from '../utils/consts'
import { theme } from '../utils/theme'
import { Label, Store } from '../utils/types'
import PeopleIcon from '@mui/icons-material/People'
import { Chip } from '@mui/material'

export function ListItem(props: { label: Label; store: Store }) {
    async function handleClick() {
        await fade()
        props.store.selectedLabelId = props.label.id
    }

    return (
        <>
            <div className='item' onClick={handleClick}>
                <div className='header'>
                    <div className='name'>{props.label.name}</div>
                    <div className='followers'>
                        <PeopleIcon />
                        {props.label.followers}
                    </div>
                </div>
                <div className='artists'>
                    {props.label.artists.map((artist, index) => (
                        <Chip label={artist} key={index} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .item {
                    width: 100%;
                    max-width: ${consts.maxAppWidth}px;
                    color: ${theme.palette.primary.main};
                    background-color: ${theme.palette.grey[800]};
                    padding: 20px;
                    border-radius: ${consts.borderRadius}px;
                    cursor: pointer;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .item:hover {
                    background-color: #ffffff11;
                }

                .header {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                }

                .followers {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: ${theme.palette.grey[400]};
                }

                .artists {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    pointer-events: none;
                }
            `}</style>
        </>
    )
}
