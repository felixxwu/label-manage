import { Label } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { Chips } from '../Chips'
import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import Send from '@mui/icons-material/Send'
import { CreateSubmissionPopup } from '../popups/CreateSubmissionPopup'
import { useState } from 'react'
import { areAllSongsDealtWith } from '../../utils/allSongsDealtWith'
import DoneAll from '@mui/icons-material/Done'
import { store } from '../../utils/store'

export function SongsSubmittedForm(props: { label: Label }) {
    const [labelForSubmission, setLabelForSubmission] = useState<Label | null>(null)

    async function handleDelete(song: string) {
        updateDocTyped(props.label.id, {
            songsSubmitted: props.label.songsSubmitted.filter(item => item !== song),
        })
    }

    function close() {
        setLabelForSubmission(null)
    }

    function createSubmission() {
        setLabelForSubmission(props.label)
        if (!props.label.submission.includes('@')) {
            store().snackbar = 'Opening submission link...'
            setTimeout(() => {
                window.open(props.label.submission, '_blank')?.focus()
            }, 1000)
        }
    }

    const songs = props.label.songsSubmitted.filter(song =>
        store()
            .extra.songs.map(s => s.title)
            .includes(song)
    )

    return (
        <Wrapper>
            <Header>
                <div>Songs Submitted:</div>

                {areAllSongsDealtWith(props.label) ? (
                    <IconButton>
                        <DoneAll />
                    </IconButton>
                ) : (
                    <IconButton onClick={createSubmission} disabled={!props.label.submission}>
                        <Send />
                    </IconButton>
                )}
            </Header>
            {songs.length !== 0 && <Chips colorful chips={songs} onDelete={handleDelete} />}
            {labelForSubmission && (
                <CreateSubmissionPopup label={labelForSubmission} close={close} />
            )}
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    width: 100%;
`

const Header = styled('div')`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Right = styled('div')`
    width: 100%;
    text-align: right;
`
