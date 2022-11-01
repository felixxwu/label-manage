import { fade } from '../utils/animate'
import { consts } from '../utils/consts'
import { theme } from '../utils/theme'
import { Label } from '../utils/types'
import PeopleIcon from '@mui/icons-material/People'
import { Avatar } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'
import EmailIcon from '@mui/icons-material/Email'
import { Store } from '../utils/store'
import { Chips } from './Chips'

export function ListItem(props: { label: Label; store: Store }) {
    async function handleClick() {
        await fade()
        props.store.selectedLabelId = props.label.id
    }

    return (
        <>
            <div className='item' onClick={handleClick}>
                <div className='header'>
                    <div className='name'>
                        {!props.store.extra.compact && (
                            <Avatar
                                src={props.label.image}
                                sx={{ width: consts.listAvatarSize, height: consts.listAvatarSize }}
                            />
                        )}

                        {props.label.name}
                        {props.label.submission && !props.label.submission.includes('@') && (
                            <LinkIcon sx={{ opacity: 0.5 }} />
                        )}
                        {props.label.submission && props.label.submission.includes('@') && (
                            <EmailIcon sx={{ opacity: 0.5 }} />
                        )}
                    </div>
                    <div className='followers'>
                        <PeopleIcon />
                        {props.label.followers}
                    </div>
                </div>
                {props.label.artists.length !== 0 && !props.store.extra.compact && (
                    <div className='artists'>
                        <Chips chips={props.label.artists} />
                    </div>
                )}
            </div>

            <style jsx>{`
                .item {
                    width: 100%;
                    max-width: ${consts.maxAppWidth}px;
                    color: ${theme.palette.primary.main};
                    background-color: ${props.store.extra.compact ? '' : theme.palette.grey[800]};
                    padding: ${props.store.extra.compact ? '' : '20px'};
                    border-radius: ${consts.borderRadius}px;
                    cursor: pointer;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .item:hover {
                    background-color: ${props.store.extra.compact ? '' : '#ffffff11'};
                }

                .header {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    gap: 10px;
                }

                .name {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .followers {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    opacity: 0.5;
                }

                .artists {
                    pointer-events: none;
                }
            `}</style>
        </>
    )
}
