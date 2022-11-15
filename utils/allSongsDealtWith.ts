import { store } from './store'
import { Label } from './types'

export function areAllSongsDealtWith(label: Label) {
    return store().extra.songs.every(
        song => label.songsSubmitted.includes(song.title) || label.songsSkipped.includes(song.title)
    )
}
