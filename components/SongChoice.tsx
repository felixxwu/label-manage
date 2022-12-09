import styled from '@emotion/styled'
import ArrowRight from '@mui/icons-material/ArrowForward'
import { FormControlLabel, Checkbox, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { consts } from '../utils/consts'
import { store } from '../utils/store'
import { theme } from '../utils/theme'
import { Label, Song } from '../utils/types'

export function SongChoice(props: { label: Label; onNext: (songs: Song[]) => void }) {
    const [selectedSongs, setSelectedSongs] = useState<Song[]>([])

    if (!props.label) return <>'no label specified'</>

    function matchingStylesList(song: Song) {
        const styles = song.styles.filter(songStyle => props.label.styles.includes(songStyle))
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

    function alreadySubmitted(song: Song) {
        return props.label.songsSubmitted.includes(song.title)
    }

    function handleCheckInput(song: Song, checked: boolean) {
        if (checked) {
            setSelectedSongs(selectedSongs.concat(song))
        } else {
            setSelectedSongs(selectedSongs.filter(s => s !== song))
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
        <Wrapper>
            <div>Submit to: {props.label.name}</div>
            {store().extra.songs.map(song => (
                <Choice
                    key={song.title + '2'}
                    control={
                        <Checkbox onChange={(_, checked) => handleCheckInput(song, checked)} />
                    }
                    label={
                        <Label>
                            <Typography variant='h6'>{song.title}</Typography>
                            <Captions>
                                <Typography
                                    variant='caption'
                                    sx={{
                                        color:
                                            matchingStylesList(song).value.length === 0
                                                ? theme.palette.warning.light
                                                : theme.palette.primary.dark,
                                    }}
                                >
                                    {matchingStylesList(song).label}
                                </Typography>
                                {alreadySubmitted(song) && (
                                    <Typography
                                        variant='caption'
                                        sx={{ color: theme.palette.warning.light }}
                                    >
                                        Already Submitted
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
            <Buttons>
                <Button
                    onClick={() => props.onNext(selectedSongs)}
                    endIcon={<ArrowRight />}
                    disabled={selectedSongs.length === 0}
                >
                    Next
                </Button>
            </Buttons>
        </Wrapper>
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

const Choice = styled(FormControlLabel)``

const Buttons = styled('div')`
    text-align: right;
`

const Actions = styled('div')`
    display: flex;
    gap: 10px;
`

const Action = styled('div')`
    text-decoration: underline;
    cursor: pointer;
`
