import { IconButton } from '@mui/material'
import { deleteDocTyped } from '../utils/db'
import { Label } from '../utils/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DeleteIcon from '@mui/icons-material/Delete'
import { fade, shortWait } from '../utils/animate'
import { LoadingButton } from '@mui/lab'
import { LinkForm } from '../components/LinkForm'
import { NameForm } from '../components/NameForm'
import { FollowersForm } from '../components/FollowersForm'
import { ArtistsForm } from '../components/ArtistsForm'
import { ImageForm } from '../components/ImageForm'
import { SubmissionForm } from '../components/SubmissionForm'
import { Progress } from '../components/Progress'
import { setHistory } from '../utils/history'
import { Store } from '../utils/store'
import { StylesForm } from '../components/StylesForm'
import { theme } from '../utils/theme'

export function Label(props: { label: Label; store: Store }) {
    setHistory('label')

    async function openConfirmDelete() {
        props.store.dialog = {
            message: 'Are you sure you want to delete?',
            actions: [{ label: 'No' }, { label: 'Delete', callback: handleDelete }],
        }
    }

    async function handleBack() {
        await fade()
        props.store.selectedLabelId = null
    }

    async function handleDelete() {
        await deleteDocTyped(props.store.db, props.label.id)
        await handleBack()
    }

    return (
        <div className='label'>
            {props.label ? (
                <>
                    <div className='header'>
                        <IconButton onClick={handleBack}>
                            <ArrowBackIcon />
                        </IconButton>
                        <ImageForm label={props.label} store={props.store} />
                        <Progress label={props.label} store={props.store} />
                    </div>
                    <div />
                    <NameForm label={props.label} store={props.store} />
                    <div className='divider' />
                    <LinkForm label={props.label} store={props.store} />
                    <div className='divider' />
                    <SubmissionForm label={props.label} store={props.store} />
                    <div className='divider' />
                    <FollowersForm label={props.label} store={props.store} />
                    <div className='divider' />
                    <ArtistsForm label={props.label} store={props.store} />
                    <div className='divider' />
                    <StylesForm label={props.label} store={props.store} />
                    <div className='divider' />
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
                    background-color: ${theme.palette.grey[800]};
                }
            `}</style>
        </div>
    )
}
