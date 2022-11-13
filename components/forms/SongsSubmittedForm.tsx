import { Label } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { Chips } from '../Chips'
import styled from '@emotion/styled'
import { Button, IconButton } from '@mui/material'
import Add from '@mui/icons-material/Add'
import { CreateSubmissionPopup } from '../popups/CreateSubmissionPopup'
import { useState } from 'react'

export function SongsSubmittedForm(props: { label: Label }) {
    const [labelForSubmission, setLabelForSubmission] = useState<Label>(null)

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
            window.open(props.label.submission, '_blank').focus()
        }
    }

    return (
        <Wrapper>
            <Header>
                <div>Songs Submitted:</div>

                <IconButton onClick={createSubmission} disabled={!props.label.submission}>
                    <Add />
                </IconButton>
            </Header>
            {props.label.songsSubmitted.length !== 0 && (
                <Chips colorful chips={props.label.songsSubmitted} onDelete={handleDelete} />
            )}
            <CreateSubmissionPopup label={labelForSubmission} close={close} />
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
