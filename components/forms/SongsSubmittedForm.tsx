import { store } from '../../utils/store'
import { Label } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { Chips } from '../Chips'

export function SongsSubmittedForm(props: { label: Label }) {
    async function handleDelete(song: string) {
        updateDocTyped(store().db, props.label.id, {
            songsSubmitted: props.label.songsSubmitted.filter(item => item !== song),
        })
    }

    const sortedSongs = store().extra.songs.sort((a, b) => (a.title > b.title ? 1 : -1))

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
                        <div className='songs'>
                            {sortedSongs.map(song => (
                                <div onClick={() => handleSelection(song.title)} className='song' key={song.title}>
                                    {song.title}
                                </div>
                            ))}
                            {sortedSongs.length === 0 && <div className='error'>No songs to choose from</div>}
                        </div>
                    )
                }}
            />
            <style jsx>{`
                .songs {
                    display: flex;
                    flex-direction: column;
                }

                .song {
                    padding: 20px;
                    min-width: 300px;
                    cursor: pointer;
                }

                .song:hover {
                    background-color: rgba(0, 0, 0, 0.05);
                }

                .error {
                    padding: 20px;
                }
            `}</style>
        </>
    )
}
