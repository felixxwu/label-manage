import styled from '@emotion/styled'
import { Dialog } from '@mui/material'
import { useState } from 'react'
import { consts } from '../../utils/consts'
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

const Wrapper = styled('div')`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 100%;
    width: ${consts.maxAppWidth}px;
`

const Label = styled('div')`
    display: flex;
    flex-direction: column;
`

const Captions = styled('div')`
    display: flex;
    flex-direction: column;
`
