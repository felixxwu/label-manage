import { store } from '../../utils/store'
import { Label } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { Chips } from '../Chips'
import styled from '@emotion/styled'

export function SongsSubmittedForm(props: { label: Label }) {
    async function handleDelete(song: string) {
        updateDocTyped(store().db, props.label.id, {
            songsSubmitted: props.label.songsSubmitted.filter(item => item !== song),
        })
    }

    const sortedSongs = store()
        .extra.songs.filter(song => !props.label.songsSubmitted.includes(song.title))
        .sort((a, b) => (a.title > b.title ? 1 : -1))

    return (
        <>
            <Chips
                title='Songs Submitted:'
                colorful
                chips={props.label.songsSubmitted}
                onDelete={handleDelete}
                addDialog={({ closeDialog }) => {
                    async function handleSelection(song: string) {
                        if (!props.label.songsSubmitted.includes(song)) {
                            updateDocTyped(store().db, props.label.id, {
                                songsSubmitted: props.label.songsSubmitted.concat(song),
                            })
                        }
                        closeDialog()
                    }

                    return (
                        <Wrapper>
                            {sortedSongs.map(song => (
                                <Song onClick={() => handleSelection(song.title)} key={song.title}>
                                    {song.title}
                                </Song>
                            ))}
                            {sortedSongs.length === 0 && (
                                <Error className='error'>No songs to choose from</Error>
                            )}
                        </Wrapper>
                    )
                }}
            />
        </>
    )
}

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
`

const Song = styled('div')`
    padding: 20px;
    min-width: 300px;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`

const Error = styled('div')`
    padding: 20px;
`
