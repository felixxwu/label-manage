import styled from '@emotion/styled'
import { updateDocTyped } from '../../utils/db'
import { searchForLinks } from '../../utils/searchForLinks'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'
import { ClearButton } from '../buttons/ClearButton'
import { consts } from '../../utils/consts'
import { IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Title } from '../Title'
import { store } from '../../utils/store'

export function LinkForm(props: { label: Label }) {
  function handleClear() {
    store().dialog = {
      message: 'Are you sure you want to clear this field?',
      actions: [
        { label: 'No' },
        { label: 'Clear', callback: () => updateDocTyped(props.label.id, { link: '' }) },
      ],
    }
  }

  return (
    <Wrapper style={props.label.link ? {} : { backgroundColor: theme.palette.warning.dark }}>
      <Title>
        SoundCloud Link:
        {!props.label.link && (
          <IconButton onClick={() => searchForLinks(props.label)} size='small'>
            <Search />
          </IconButton>
        )}
      </Title>
      <LinkWrapper>
        {props.label.link ? (
          <>
            <Link href={props.label.link} target='_blank'>
              {props.label.link}
            </Link>

            <ClearButton onClick={handleClear} secondary />
          </>
        ) : null}
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.secondary.main};
  padding: 10px;
  border-radius: ${consts.borderRadius}px;
`

const LinkWrapper = styled('div')`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`

const Link = styled('a')`
  color: ${theme.palette.primary.dark};
  flex: 1;
  word-break: break-all;
`
