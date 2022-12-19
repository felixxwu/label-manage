import styled from '@emotion/styled'
import ArrowBack from '@mui/icons-material/ArrowBack'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ImageForm } from '../../../components/forms/ImageForm'
import { Header } from '../../../components/Header'
import { SongChoice } from '../../../components/SongChoice'
import { SubmissionTemplate } from '../../../components/SubmissionTemplate'
import { store } from '../../../utils/store'
import { Song } from '../../../utils/types'

export default () => {
    const [songsToSubmit, setSongsToSubmit] = useState<Song[]>([])
    const {
        query: { id },
    } = useRouter()
    if (!id || Array.isArray(id)) return null
    const label = store().labels.find(l => l.id === id)
    if (!label) return null

    function handleChoice(songs: Song[]) {
        setSongsToSubmit(songs)
    }

    function handleClose() {
        if (songsToSubmit.length === 0) {
            window.history.back()
        } else {
            setSongsToSubmit([])
        }
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
            {songsToSubmit.length === 0 ? (
                <SongChoice
                    label={label}
                    onNext={handleChoice}
                    title={`Submit to: ${label.name}`}
                />
            ) : (
                <SubmissionTemplate label={label} songs={songsToSubmit} />
            )}
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    width: 100%;
`
