import { fade } from '../utils/animate'
import { consts } from '../utils/consts'
import { theme } from '../utils/theme'
import { Label } from '../utils/types'
import { Avatar } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'
import EmailIcon from '@mui/icons-material/Email'
import { store } from '../utils/store'
import { Chips } from './Chips'
import { getProgress } from '../utils/progress'
import DoneAll from '@mui/icons-material/DoneAll'

export function ListItem(props: { label: Label }) {
    async function handleClick() {
        await fade()
        store().selectedLabelId = props.label.id
    }

    return (
        <>
            <div className='item' onClick={handleClick}>
                <div className='header'>
                    <div className='name'>
                        {!store().extra.compact && (
                            <Avatar
                                src={props.label.image}
                                sx={{ width: consts.listAvatarSize, height: consts.listAvatarSize }}
                            />
                        )}

                        {props.label.name}
                        {props.label.submission && !props.label.submission.includes('@') && (
                            <LinkIcon color='primary' sx={{ opacity: 0.5 }} />
                        )}
                        {props.label.submission && props.label.submission.includes('@') && (
                            <EmailIcon color='primary' sx={{ opacity: 0.5 }} />
                        )}
                    </div>
                    <div className='followers'>
                        {getProgress(props.label) === 100 && <DoneAll color='primary' />}
                        {props.label.songsSubmitted.length !== 0 && (
                            <div className='songsSubmitted'>({props.label.songsSubmitted.length})</div>
                        )}
                        {props.label.followers}
                    </div>
                </div>
                {props.label.styles.length !== 0 && !store().extra.compact && (
                    <div className='styles'>
                        <Chips chips={props.label.styles} colorful />
                    </div>
                )}
            </div>

            <style jsx>{`
                .item {
                    width: 100%;
                    max-width: ${consts.maxAppWidth}px;
                    color: ${theme.palette.primary.main};
                    background-color: ${store().extra.compact ? '' : theme.palette.secondary.main};
                    padding: ${store().extra.compact ? '' : '20px'};
                    border-radius: ${consts.borderRadius}px;
                    cursor: pointer;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .item:hover {
                    background-color: ${store().extra.compact ? '' : '#ffffff08'};
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

                .styles {
                    pointer-events: none;
                }
            `}</style>
        </>
    )
}
