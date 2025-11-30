import { Label } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { Chips } from '../Chips'
import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import Send from '@mui/icons-material/Send'
import { areAllSongsDealtWith } from '../../utils/allSongsDealtWith'
import DoneAll from '@mui/icons-material/Done'
import { store } from '../../utils/store'

import { useRouter } from 'next/router'

import { theme } from '../../utils/theme'
import { consts } from '../../utils/consts'

export function SongsSkippedForm(props: { label: Label }) {
  const router = useRouter()

  async function handleDelete(song: string) {
    updateDocTyped(props.label.id, {
      songsSkipped: props.label.songsSkipped.filter(item => item !== song),
    })
  }

  const songs = props.label.songsSkipped.filter(song =>
    store()
      .extra.songs.map(s => s.title)
      .includes(song)
  )

  return (
    <Wrapper>
      <Header>
        Songs Skipped:
        {areAllSongsDealtWith(props.label) ? (
          <IconButton>
            <DoneAll />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => router.push('/label/' + props.label.id + '/skip')}
            disabled={!props.label.submission}
          >
            <Send />
          </IconButton>
        )}
      </Header>
      {songs.length !== 0 && <Chips colorful chips={songs} onDelete={handleDelete} />}
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
  background-color: ${theme.palette.secondary.main};
  padding: 10px;
  border-radius: ${consts.borderRadius}px;
`

const Header = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
