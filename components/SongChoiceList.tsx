import styled from '@emotion/styled'
import { FormControlLabel, Checkbox, Typography } from '@mui/material'
import React from 'react'
import { store } from '../utils/store'
import { theme } from '../utils/theme'
import { Label, Song } from '../utils/types'

export function matchingStylesList(song: Song, label: Label) {
    const styles = song.styles.filter(songStyle => label.styles.includes(songStyle))
    if (styles.length === 0) {
        return {
            value: [],
            label: 'No shared styles',
        }
    } else {
        return {
            value: styles,
            label: 'Shared styles: ' + styles.join(', '),
        }
    }
}

export function alreadySubmitted(song: Song, label: Label) {
    return label.songsSubmitted.includes(song.title)
}

export function markedAsSkip(song: Song, label: Label) {
    return label.songsSkipped.includes(song.title)
}

export function SongChoiceList(props: {
    songs: Song[]
    label: Label
    selectedSongs: Song[]
    setSelectedSongs: (songs: Song[]) => void
}) {
    function handleCheckInput(song: Song, checked: boolean) {
        if (checked) {
            props.setSelectedSongs(props.selectedSongs.concat(song))
        } else {
            props.setSelectedSongs(props.selectedSongs.filter(s => s !== song))
        }
    }

    function handleCopyTitle(e: React.MouseEvent, song: Song) {
        e.stopPropagation()
        e.preventDefault()
        navigator.clipboard.writeText(song.title)
        store().snackbar = `"${song.title}" copied to clipboard`
    }

    function handleCopyLink(e: React.MouseEvent, song: Song) {
        e.stopPropagation()
        e.preventDefault()
        navigator.clipboard.writeText(song.link)
        store().snackbar = `"${song.link}" copied to clipboard`
    }

    return (
        <>
            {props.songs.map(song => (
                <Choice
                    key={song.title + '2'}
                    control={
                        <Checkbox onChange={(_, checked) => handleCheckInput(song, checked)} />
                    }
                    label={
                        <Label style={{ opacity: alreadySubmitted(song, props.label) ? 0.5 : 1 }}>
                            <Typography variant='h6'>{song.title}</Typography>
                            <Captions>
                                <Typography
                                    variant='caption'
                                    sx={{
                                        color:
                                            matchingStylesList(song, props.label).value.length === 0
                                                ? theme.palette.warning.light
                                                : theme.palette.primary.dark,
                                    }}
                                >
                                    {matchingStylesList(song, props.label).label}
                                </Typography>
                                {alreadySubmitted(song, props.label) && (
                                    <Typography
                                        variant='caption'
                                        sx={{ color: theme.palette.warning.light }}
                                    >
                                        Already Submitted
                                    </Typography>
                                )}
                                {markedAsSkip(song, props.label) && (
                                    <Typography
                                        variant='caption'
                                        sx={{ color: theme.palette.warning.light }}
                                    >
                                        In the Skip List
                                    </Typography>
                                )}
                                <Actions>
                                    <Action onClick={e => handleCopyTitle(e, song)}>
                                        <Typography
                                            variant='caption'
                                            sx={{ color: theme.palette.primary.dark }}
                                        >
                                            Copy Title
                                        </Typography>
                                    </Action>
                                    <Action onClick={e => handleCopyLink(e, song)}>
                                        <Typography
                                            variant='caption'
                                            sx={{ color: theme.palette.primary.dark }}
                                        >
                                            Copy Link
                                        </Typography>
                                    </Action>
                                </Actions>
                            </Captions>
                        </Label>
                    }
                />
            ))}
        </>
    )
}

const Label = styled('div')`
    display: flex;
    flex-direction: column;
`

const Captions = styled('div')`
    display: flex;
    flex-direction: column;
`

const Choice = styled(FormControlLabel)``

const Actions = styled('div')`
    display: flex;
    gap: 10px;
`

const Action = styled('div')`
    text-decoration: underline;
    cursor: pointer;
`
