import styled from '@emotion/styled'
import DoneAll from '@mui/icons-material/DoneAll'
import Email from '@mui/icons-material/Email'
import Save from '@mui/icons-material/Save'
import { Button, Snackbar, TextareaAutosize, Typography } from '@mui/material'
import { useState } from 'react'
import { consts } from '../utils/consts'
import { updateDocTyped } from '../utils/db'
import { store } from '../utils/store'
import { theme } from '../utils/theme'
import { Label, Song } from '../utils/types'

export function SubmissionTemplate(props: { label: Label; songs: Song[]; onClose: () => void }) {
    const [localTemplate, setLocalTemplate] = useState(store().extra.template)
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return
        setSnackbarOpen(false)
    }

    function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setLocalTemplate(e.target.value)
    }

    function handleOverwriteTemplate() {
        setSnackbarOpen(true)
        updateDocTyped(consts.dbExtraId, { template: localTemplate })
    }

    async function finishUp() {
        await updateDocTyped(props.label.id, {
            songsSubmitted: props.label.songsSubmitted.concat(
                ...props.songs.map(song => song.title)
            ),
        })
        props.onClose()
    }

    function evaluateTemplate() {
        const config = {
            label: props.label.name,
            songs: props.songs.map(song => `${song.title}: ${song.link}`).join('\n\n'),
        }

        return localTemplate
            .replace(/<(.*?)>/g, match => {
                return config[match.split(/<|>/).filter(Boolean)[0]]
            })
            .split('\n')
            .map(part => encodeURIComponent(part))
            .join('%0D%0A')
    }

    const anchorLink = (() => {
        return (
            'mailto:' +
            props.label.submission +
            '?subject=' +
            encodeURIComponent('Drum & Bass Submission - WUFO') +
            '&body=' +
            evaluateTemplate()
        )
    })()

    return (
        <Wrapper>
            <div>
                <div>Template for: {props.label.name}</div>
                <Typography variant='caption'>
                    Submitting: {props.songs.map(song => song.title).join(', ')}
                </Typography>
            </div>
            <TextArea
                value={localTemplate}
                onChange={handleTextChange}
                placeholder='Type email template here...'
            />
            <Typography variant='caption' sx={{ color: theme.palette.primary.dark }}>
                Use &lt;label&gt; to insert the label's name and &lt;songs&gt; to insert links to
                the songs
            </Typography>
            <Right>
                <Button
                    onClick={handleOverwriteTemplate}
                    startIcon={<Save />}
                    disabled={localTemplate === store().extra.template}
                >
                    Overwrite template
                </Button>
            </Right>
            <Right>
                <Link href={anchorLink} target='_blank'>
                    <Button startIcon={<Email />}>Send Email</Button>
                </Link>
            </Right>
            <Right>
                <Button onClick={finishUp} startIcon={<DoneAll />}>
                    Finish up
                </Button>
            </Right>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
                message='Tempalte saved'
            />
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 100%;
    width: ${consts.maxAppWidth}px;
`

const TextArea = styled(TextareaAutosize)`
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
    color: ${theme.palette.primary.main};
    width: 100%;
`

const Right = styled('div')`
    text-align: right;
`

const Link = styled('a')`
    text-decoration: none;
`
