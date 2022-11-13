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
import styled from '@emotion/styled'

export function ListItem(props: { label: Label }) {
    async function handleClick() {
        await fade()
        store().selectedLabelId = props.label.id
    }

    return (
        <>
            <Wrapper onClick={handleClick} compact={store().extra.compact}>
                <Header>
                    <Name>
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
                    </Name>
                    <Followers>
                        {getProgress(props.label) === 100 && <DoneAll color='primary' />}
                        {props.label.songsSubmitted.length !== 0 && (
                            <div>({props.label.songsSubmitted.length})</div>
                        )}
                        {props.label.followers}
                    </Followers>
                </Header>
                {props.label.styles.length !== 0 && !store().extra.compact && (
                    <div>
                        <Chips chips={props.label.styles} colorful />
                    </div>
                )}
            </Wrapper>
        </>
    )
}

const Wrapper = styled('div')<{ compact: boolean }>`
    width: 100%;
    max-width: ${consts.maxAppWidth}px;
    color: ${theme.palette.primary.main};
    background-color: ${({ compact }) => (compact ? '' : theme.palette.secondary.main)};
    padding: ${({ compact }) => (compact ? '' : '20px')};
    border-radius: ${consts.borderRadius}px;
    cursor: pointer;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:hover {
        background-color: ${({ compact }) => (compact ? '' : theme.palette.secondary.light)};
    }
`

const Header = styled('div')`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
`

const Name = styled('div')`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Followers = styled('div')`
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0.5;
`
