import { fade } from '../utils/animate'
import { consts } from '../utils/consts'
import { theme } from '../utils/theme'
import { Label } from '../utils/types'
import { Avatar, Typography } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'
import EmailIcon from '@mui/icons-material/EmailOutlined'
import { store } from '../utils/store'
import { getProgress } from '../utils/progress'
import styled from '@emotion/styled'
import { Chips } from './Chips'
import QuestionMarkIcon from '@mui/icons-material/HelpOutline'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { areAllSongsDealtWith } from '../utils/allSongsDealtWith'
import { nFormatter } from '../utils/nFormatter'
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled'
import { getDaysAgo } from '../utils/getDaysAgo'

export function ListItem(props: { label: Label; index: number }) {
    async function handleClick() {
        await fade()
        store().selectedLabelId = props.label.id
    }

    return (
        <>
            <Wrapper
                onClick={handleClick}
                compact={store().extra.compact}
                index={props.index}
                inactive={props.label.inactive}
            >
                <Header>
                    <Name>
                        {!store().extra.compact && (
                            <Avatar
                                src={props.label.image}
                                sx={{
                                    width: consts.listAvatarSize,
                                    height: consts.listAvatarSize,
                                }}
                            />
                        )}

                        {props.label.name}

                        {props.label.submission &&
                            (props.label.submission.includes('@') ? (
                                <EmailIcon
                                    fontSize={store().extra.compact ? 'small' : 'medium'}
                                    opacity={0.5}
                                />
                            ) : (
                                <LinkIcon
                                    fontSize={store().extra.compact ? 'small' : 'medium'}
                                    opacity={0.5}
                                />
                            ))}
                    </Name>
                    <Icons>
                        {areAllSongsDealtWith(props.label) && (
                            <MusicNoteIcon color='primary' fontSize='small' />
                        )}
                        {getDaysAgo(props.label) > consts.uploadWarning && (
                            <HourglassDisabledIcon
                                fontSize={store().extra.compact ? 'small' : 'medium'}
                            />
                        )}
                        {getProgress(props.label) !== 100 && (
                            <QuestionMarkIcon
                                fontSize={store().extra.compact ? 'small' : 'medium'}
                            />
                        )}
                        <Followers>{nFormatter(props.label.followers, 0)}</Followers>
                    </Icons>
                </Header>
                {props.label.styles.length !== 0 && !store().extra.compact && (
                    <div>
                        <Chips chips={props.label.styles} small colorful />
                    </div>
                )}
            </Wrapper>
        </>
    )
}

const Wrapper = styled('div')<{ compact: boolean; index: number; inactive: boolean }>`
    width: 100%;
    max-width: ${consts.maxAppWidth}px;
    color: ${theme.palette.primary.main};
    background-color: ${({ compact, index }) =>
        compact && index % 2 === 0 ? '' : theme.palette.secondary.main};
    padding: ${({ compact }) => (compact ? '2px' : '20px')};
    border-radius: ${({ compact }) => (compact ? 0 : consts.borderRadius)}px;
    cursor: pointer;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    opacity: ${({ inactive }) => (inactive ? 0.5 : 1)};
    transition: 300ms;

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

const Icons = styled('div')`
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0.5;
`

const Followers = styled('div')`
    min-width: 36px;
    text-align: right;
`
