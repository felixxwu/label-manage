import styled from '@emotion/styled'
import DoneAll from '@mui/icons-material/DoneAll'
import { Button, Typography } from '@mui/material'
import { consts } from '../utils/consts'
import { updateDocTyped } from '../utils/db'
import { Label, Song } from '../utils/types'
import { Template } from './Template'

export function SubmissionTemplate(props: { label: Label; songs: Song[] }) {
  async function finishUp() {
    await updateDocTyped(props.label.id, {
      songsSubmitted: props.label.songsSubmitted.concat(...props.songs.map(song => song.title)),
    })
    window.history.back()
  }

  return (
    <Wrapper>
      <div>
        <div>Template for: {props.label.name}</div>
        <Typography variant='caption'>
          Submitting: {props.songs.map(song => song.title).join(', ')}
        </Typography>
      </div>
      <Template label={props.label} songs={props.songs} />
      <Right>
        <Button onClick={finishUp} startIcon={<DoneAll />}>
          Finish up
        </Button>
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
  width: ${consts.maxAppWidth}px;
`

const Right = styled('div')`
  text-align: right;
`
