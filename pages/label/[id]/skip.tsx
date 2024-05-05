import styled from '@emotion/styled'
import ArrowBack from '@mui/icons-material/ArrowBack'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { ImageForm } from '../../../components/forms/ImageForm'
import { Header } from '../../../components/Header'
import { SongChoice } from '../../../components/SongChoice'
import { updateDocTyped } from '../../../utils/db'
import { store } from '../../../utils/store'
import { Song } from '../../../utils/types'

export default () => {
  const {
    query: { id },
  } = useRouter()
  if (!id || Array.isArray(id)) return null
  const label = store().labels.find(l => l.id === id)
  if (!label) return null

  function handleClose() {
    window.history.back()
  }

  const handleChooseSongs = async (songs: Song[]) => {
    await updateDocTyped(label.id, {
      songsSkipped: label.songsSkipped.concat(...songs.map(song => song.title)),
    })
    handleClose()
  }

  return (
    <Wrapper>
      <Header
        left={
          <IconButton onClick={handleClose}>
            <ArrowBack color='primary' />
          </IconButton>
        }
      >
        <ImageForm label={label} readonly={true} />
      </Header>
      <SongChoice
        label={label}
        onNext={handleChooseSongs}
        title={`Add to skip list for: ${label.name}`}
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
`
