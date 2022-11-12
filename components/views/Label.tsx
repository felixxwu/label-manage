import { Button, CircularProgress, IconButton } from '@mui/material'
import { deleteDocTyped } from '../../utils/db'
import { Label } from '../../utils/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DeleteIcon from '@mui/icons-material/Delete'
import { fade } from '../../utils/animate'
import { LinkForm } from '../forms/LinkForm'
import { NameForm } from '../forms/NameForm'
import { FollowersForm } from '../forms/FollowersForm'
import { ArtistsForm } from '../forms/ArtistsForm'
import { ImageForm } from '../forms/ImageForm'
import { SubmissionForm } from '../forms/SubmissionForm'
import { Progress } from '../Progress'
import { setHistory } from '../../utils/history'
import { store } from '../../utils/store'
import { StylesForm } from '../forms/StylesForm'
import { NotesForm } from '../forms/NotesForm'
import { SongsSubmittedForm } from '../forms/SongsSubmittedForm'
import styled from '@emotion/styled'
import { DeleteButton } from '../DeleteButton'

export function Label(props: { label: Label }) {
    setHistory('label')

    async function openConfirmDelete() {
        store().dialog = {
            message: 'Are you sure you want to delete?',
            actions: [{ label: 'No' }, { label: 'Delete', callback: handleDelete }],
        }
    }

    async function handleBack() {
        await fade()
        store().selectedLabelId = null
    }

    async function handleDelete() {
        await deleteDocTyped(store().db, props.label.id)
        await handleBack()
    }

    return (
        <Wrapper>
            {props.label ? (
                <>
                    <Header>
                        <IconButton onClick={handleBack}>
                            <ArrowBackIcon color='primary' />
                        </IconButton>
                        <ImageForm {...props} />
                        <Progress {...props} />
                    </Header>
                    <div />
                    <NameForm {...props} />
                    <Divider />
                    <LinkForm {...props} />
                    <Divider />
                    <SubmissionForm {...props} />
                    <Divider />
                    <FollowersForm {...props} />
                    <Divider />
                    <ArtistsForm {...props} />
                    <Divider />
                    <StylesForm {...props} />
                    <Divider />
                    <SongsSubmittedForm {...props} />
                    <NotesForm {...props} />
                    <div />
                </>
            ) : (
                <CircularProgress />
            )}

            <Buttons>{props.label && <DeleteButton onClick={openConfirmDelete} />}</Buttons>
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin: auto;
`

const Buttons = styled('div')`
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
`

const Header = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Divider = styled('div')`
    height: 1px;
    width: 100%;
    background-color: #545454;
`
