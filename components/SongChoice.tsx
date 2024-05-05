import styled from '@emotion/styled'
import ArrowRight from '@mui/icons-material/ArrowForward'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { consts } from '../utils/consts'
import { store } from '../utils/store'
import { Label, Song } from '../utils/types'
import { alreadySubmitted, matchingStylesList, SongChoiceList } from './SongChoiceList'

export function SongChoice(props: {
  label: Label
  onNext: (songs: Song[]) => void
  title: string
}) {
  const [selectedSongs, setSelectedSongs] = useState<Song[]>([])

  if (!props.label) return <>'no label specified'</>

  function getSuitableSongs() {
    return store().extra.songs.filter(
      s =>
        !alreadySubmitted(s, props.label) && matchingStylesList(s, props.label).value.length !== 0
    )
  }

  function getUnsuitableSongs() {
    return store().extra.songs.filter(s => !getSuitableSongs().includes(s))
  }

  return (
    <Wrapper>
      <Header>{props.title}</Header>
      <SongChoiceList
        label={props.label}
        selectedSongs={selectedSongs}
        setSelectedSongs={setSelectedSongs}
        songs={getSuitableSongs()}
      />
      <SongChoiceList
        label={props.label}
        selectedSongs={selectedSongs}
        setSelectedSongs={setSelectedSongs}
        songs={getUnsuitableSongs()}
      />
      <Buttons>
        <Button
          onClick={() => props.onNext(selectedSongs)}
          endIcon={<ArrowRight />}
          disabled={selectedSongs.length === 0}
        >
          Next
        </Button>
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: ${consts.maxAppWidth}px;
`

const Header = styled('div')`
  text-align: center;
  width: 100%;
`

const Label = styled('div')`
  display: flex;
  flex-direction: column;
`

const Buttons = styled('div')`
  text-align: right;
`
