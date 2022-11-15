import { Dialog } from '@mui/material'
import { useState } from 'react'
import { Label, Song } from '../../utils/types'
import { SongChoice } from '../SongChoice'
import { SubmissionTemplate } from '../SubmissionTemplate'

export function CreateSubmissionPopup(props: { label: Label; close: () => void }) {
    const [songsToSubmit, setSongsToSubmit] = useState<Song[]>([])

    if (!props.label) return null

    function handleChoice(songs: Song[]) {
        setSongsToSubmit(songs)
    }

    function handleClose() {
        setSongsToSubmit([])
        props.close()
    }

    return (
        <Dialog open={!!props.label} onClose={handleClose}>
            {songsToSubmit.length === 0 ? (
                <SongChoice label={props.label} onNext={handleChoice} />
            ) : (
                <SubmissionTemplate
                    label={props.label}
                    songs={songsToSubmit}
                    onClose={handleClose}
                />
            )}
        </Dialog>
    )
}
