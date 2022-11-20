import { Button, CircularProgress, IconButton, Typography } from '@mui/material'
import { deleteDocTyped } from '../../utils/db'
import { Label } from '../../utils/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { fade } from '../../utils/animate'
import { LinkForm } from '../forms/LinkForm'
import { NameForm } from '../forms/NameForm'
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
import { DeleteButton } from '../buttons/DeleteButton'
import { theme } from '../../utils/theme'
import { InactiveForm } from '../forms/InactiveForm'
import { SongsSkippedForm } from '../forms/SongsSkippedForm'
import SmartToy from '@mui/icons-material/SmartToy'
import { updateProfile } from '../../utils/scrape'
import { getDaysAgoScraped } from '../../utils/getDaysAgo'
import { AcceptDemo } from '../forms/AcceptDemo'

export function Label(props: { label: Label }) {
    setHistory('label')

    const { db } = store()

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
        db && (await deleteDocTyped(db, props.label.id))
        await handleBack()
    }

    async function scrapeData() {
        store().snackbar = 'Getting profile data...'
        await updateProfile(props.label)
        store().snackbar = 'Auto-filled some fields.'
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
                    <ScraperRow>
                        <Button onClick={scrapeData} startIcon={<SmartToy />}>
                            Re-scrape data
                        </Button>
                        <Typography variant='caption' sx={{ color: theme.palette.primary.dark }}>
                            Last scraped: {getDaysAgoScraped(props.label)} days ago
                        </Typography>
                    </ScraperRow>
                    <NameForm {...props} />
                    <Toggles>
                        <InactiveForm {...props} />
                        <AcceptDemo {...props} />
                    </Toggles>
                    <Divider />
                    <LinkForm {...props} />
                    <Divider />
                    <SubmissionForm {...props} />
                    <Divider />
                    <NotesForm {...props} />
                    <Divider />
                    <ArtistsForm {...props} />
                    <Divider />
                    <StylesForm {...props} />
                    <Divider />
                    <SongsSubmittedForm {...props} />
                    <Divider />
                    <SongsSkippedForm {...props} />
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
    align-items: center;
    flex-direction: column;
    gap: 30px;
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
    background-color: ${theme.palette.divider};
`

const ScraperRow = styled('div')`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Toggles = styled('div')`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`
