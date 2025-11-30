import { Avatar, Tooltip } from '@mui/material'
import { store } from '../utils/store'
import { Label } from '../utils/types'
import { consts } from '../utils/consts'
import styled from '@emotion/styled'
import { theme } from '../utils/theme'
import LinkIcon from '@mui/icons-material/Link'
import EmailIcon from '@mui/icons-material/Email'
import { nFormatter } from '../utils/nFormatter'
import { Chips } from './Chips'
import { getDaysAgo } from '../utils/getDaysAgo'
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled'
import { areAllSongsDealtWith } from '../utils/allSongsDealtWith'
import DoneIcon from '@mui/icons-material/Done'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { getProgress } from '../utils/progress'

import { useRouter } from 'next/router'

export function ListItem(props: { label: Label; index: number }) {
  const router = useRouter()

  async function handleClick() {
    router.push('/label/' + props.label.id)
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
                <Tooltip title='Email Submission' placement='right'>
                  <EmailIcon fontSize='small' opacity={0.5} />
                </Tooltip>
              ) : (
                <Tooltip title='Web Form Submission' placement='right'>
                  <LinkIcon fontSize='small' opacity={0.5} />
                </Tooltip>
              ))}
          </Name>
          <Icons>
            {getDaysAgo(props.label) > consts.uploadWarning && (
              <Tooltip
                title={`Inactive for more than ${consts.uploadWarning} days`}
                placement='right'
              >
                <HourglassDisabledIcon fontSize='small' />
              </Tooltip>
            )}
            {!props.label.inactive && (
              <>
                {getProgress(props.label) !== 100 && (
                  <Tooltip
                    title={`Profile ${Math.round(getProgress(props.label))}% complete`}
                    placement='right'
                  >
                    <QuestionMarkIcon fontSize='small' />
                  </Tooltip>
                )}
                {areAllSongsDealtWith(props.label) && (
                  <Tooltip title='All songs processed' placement='right'>
                    <DoneIcon color='primary' fontSize='small' />
                  </Tooltip>
                )}
              </>
            )}
            <Tooltip title='Spotify Popularity %' placement='right'>
              <Popularity>{Math.round(props.label.popularity || 0)}</Popularity>
            </Tooltip>
            <Tooltip title='Popularity Standard Deviation' placement='right'>
              <Variance>{Math.round(props.label.popularityVariance || 0)}</Variance>
            </Tooltip>
            <Tooltip title='SoundCloud Followers' placement='right'>
              <Followers>{nFormatter(props.label.followers, 0)}</Followers>
            </Tooltip>
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
    compact && index % 2 === 1 ? '' : theme.palette.secondary.main};
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
  gap: 5px;
  opacity: 0.5;
`

const Followers = styled('div')`
  min-width: 40px;
  text-align: right;
`

const Popularity = styled('div')`
  min-width: 20px;
  text-align: right;
`

const Variance = styled('div')`
  min-width: 20px;
  text-align: right;
`
