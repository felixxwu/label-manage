import { Label, Song } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { Chips } from '../Chips'
import styled from '@emotion/styled'
import { Button, Dialog, IconButton } from '@mui/material'
import Add from '@mui/icons-material/Add'
import { useStates } from '../../utils/useStateObject'
import { SongChoice } from '../SongChoice'
import { areAllSongsDealtWith } from '../../utils/allSongsDealtWith'
import DoneAll from '@mui/icons-material/Done'

export function SongsSkippedForm(props: { label: Label }) {
    const state = useStates({ dialogOpen: false })

    async function handleDelete(song: string) {
        updateDocTyped(props.label.id, {
            songsSkipped: props.label.songsSkipped.filter(item => item !== song),
        })
    }

    function handleChooseSongs(songs: Song[]) {
        console.log('songs', songs)
        updateDocTyped(props.label.id, {
            songsSkipped: props.label.songsSkipped.concat(...songs.map(song => song.title)),
        })
        state.dialogOpen = false
    }

    return (
        <Wrapper>
            <Header>
                <div>Songs Skipped:</div>

                {areAllSongsDealtWith(props.label) ? (
                    <IconButton>
                        <DoneAll />
                    </IconButton>
                ) : (
                    <IconButton
                        onClick={() => (state.dialogOpen = true)}
                        disabled={!props.label.submission}
                    >
                        <Add />
                    </IconButton>
                )}
            </Header>
            {props.label.songsSkipped.length !== 0 && (
                <Chips colorful chips={props.label.songsSkipped} onDelete={handleDelete} />
            )}
            <Dialog open={state.dialogOpen} onClose={() => (state.dialogOpen = false)}>
                <SongChoice label={props.label} onNext={handleChooseSongs} />
            </Dialog>
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
