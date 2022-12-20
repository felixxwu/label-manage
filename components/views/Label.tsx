import { Button, CircularProgress, IconButton, Typography } from '@mui/material'
import { deleteDocTyped } from '../../utils/db'
import { Label } from '../../utils/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { LinkForm } from '../forms/LinkForm'
import { NameForm } from '../forms/NameForm'
import { ArtistsForm } from '../forms/ArtistsForm'
import { ImageForm } from '../forms/ImageForm'
import { SubmissionForm } from '../forms/SubmissionForm'
import { Progress } from '../Progress'
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
import { useEffect } from 'react'
import { searchForLinks } from '../../utils/searchForLinks'
import { Header } from '../Header'

export function Label(props: { label: Label }) {
    const { db } = store()

    useEffect(() => {
        if (!props.label.link) {
            store().dialog = {
                actions: [
                    { label: 'No' },
                    {
                        label: 'Yes',
                        callback: () => searchForLinks(props.label),
                        callOnEnter: true,
                    },
                ],
                message: 'Do you want to search for a SoundCloud link?',
            }
        } else if (
            new Date().getTime() - new Date(props.label.lastScraped).getTime() >
            1000 * 60 * 60 * 24 * 7
        ) {
            store().dialog = {
                message: 'Data may be outdated. Scrape new data?',
                actions: [
                    { label: 'No' },
                    {
                        label: 'Yes',
                        callback: scrapeData,
                        callOnEnter: true,
                    },
                ],
            }
        }
    }, [])

    async function openConfirmDelete() {
        store().dialog = {
            message: 'Are you sure you want to delete?',
            actions: [{ label: 'No' }, { label: 'Delete', callback: handleDelete }],
        }
    }

    async function handleBack() {
        window.history.back()
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
                    <Header
                        left={
                            <IconButton onClick={handleBack}>
                                <ArrowBackIcon color='primary' />
                            </IconButton>
                        }
                        right={<Progress {...props} />}
                    >
                        <ImageForm {...props} />
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
                    <InactiveForm {...props} />
                    <Wrapper
                        style={{
                            opacity: props.label.inactive ? 0.5 : 1,
                            pointerEvents: props.label.inactive ? 'none' : 'initial',
                        }}
                    >
                        <Divider />
                        <LinkForm {...props} />
                        <Divider />
                        <SubmissionForm {...props} />
                        <AcceptDemo {...props} />
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
                    </Wrapper>
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
