import { Label } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { Chips } from '../Chips'
import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import Send from '@mui/icons-material/Send'
import { areAllSongsDealtWith } from '../../utils/allSongsDealtWith'
import DoneAll from '@mui/icons-material/Done'
import { store } from '../../utils/store'

export function SongsSubmittedForm(props: { label: Label }) {
    async function handleDelete(song: string) {
        updateDocTyped(props.label.id, {
            songsSubmitted: props.label.songsSubmitted.filter(item => item !== song),
        })
    }

    function createSubmission() {
        window.location.href += '/submit'
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
