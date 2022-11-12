import { IconButton } from '@mui/material'
import { deleteDocTyped } from '../utils/db'
import { Label } from '../utils/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DeleteIcon from '@mui/icons-material/Delete'
import { fade, shortWait } from '../utils/animate'
import { LoadingButton } from '@mui/lab'
import { LinkForm } from '../components/forms/LinkForm'
import { NameForm } from '../components/forms/NameForm'
import { FollowersForm } from '../components/forms/FollowersForm'
import { ArtistsForm } from '../components/forms/ArtistsForm'
import { ImageForm } from '../components/forms/ImageForm'
import { SubmissionForm } from '../components/forms/SubmissionForm'
import { Progress } from '../components/Progress'
import { setHistory } from '../utils/history'
import { store } from '../utils/store'
import { StylesForm } from '../components/forms/StylesForm'
import { NotesForm } from '../components/forms/NotesForm'
import { SongsSubmittedForm } from '../components/forms/SongsSubmittedForm'

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
        <div className='label'>
            {props.label ? (
                <>
                    <div className='header'>
                        <IconButton onClick={handleBack}>
                            <ArrowBackIcon color='primary' />
                        </IconButton>
                        <ImageForm {...props} />
                        <Progress {...props} />
                    </div>
                    <div />
                    <NameForm {...props} />
                    <div className='divider' />
                    <LinkForm {...props} />
                    <div className='divider' />
                    <SubmissionForm {...props} />
                    <div className='divider' />
                    <FollowersForm {...props} />
                    <div className='divider' />
                    <ArtistsForm {...props} />
                    <div className='divider' />
                    <StylesForm {...props} />
                    <div className='divider' />
                    <SongsSubmittedForm {...props} />
                    <NotesForm {...props} />
                </>
            ) : (
                <h1>Label deleted</h1>
            )}

            <div className='bottom-buttons'>
                {props.label && (
                    <LoadingButton
                        color='warning'
                        variant='contained'
                        onClick={openConfirmDelete}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </LoadingButton>
                )}
            </div>

            <style jsx>{`
                .label {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 20px;
                    margin: auto;
                }

                .bottom-buttons {
                    width: 100%;
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                }

                .header {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .forms {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 20px;
                }

                .divider {
                    height: 1px;
                    width: 100%;
                    background-color: #545454;
                }
            `}</style>
        </div>
    )
}
