import styled from '@emotion/styled'
import { Dialog, Snackbar } from '@mui/material'
import React from 'react'
import { consts } from '../../utils/consts'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'
import { useStates } from '../../utils/useStateObject'
import { TrackWidget } from '../TrackWidget'

export function WidgetPopup(props: { label: Label; open: boolean; onClose: () => void }) {
    const state = useStates({ snackbarMessage: '' })

    function handleClose() {
        props.onClose()
    }

    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return
        state.snackbarMessage = ''
    }

    function TrackWidgets(p: { tracks: keyof Label['tracks'] }) {
        return (
            <Widgets>
                {props.label.tracks[p.tracks].map(
                    track =>
                        track.url && (
                            <Row key={track.url}>
                                <Widget>
                                    <TrackWidget track={track} />
                                </Widget>
                            </Row>
                        )
                )}
            </Widgets>
        )
    }

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <Wrapper>
                <h1>Popular Uploads</h1>
                <TrackWidgets tracks='popular' />
                <h1>Recent Uploads</h1>
                <TrackWidgets tracks='recent' />
                <h1>Reposts</h1>
                <TrackWidgets tracks='reposts' />
            </Wrapper>
            <Snackbar
                open={!!state.snackbarMessage}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
                message={`URL Invalid: (${state.snackbarMessage}) Must be formatted soundcloud.com/<artist>/<track>`}
            />
        </Dialog>
    )
}

const Wrapper = styled('div')`
    padding: 20px;
    max-width: 100%;
    width: ${consts.maxAppWidth}px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Widgets = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${theme.palette.primary.main};
    padding: 10px;
    border-radius: ${consts.borderRadius}px;
`

const Widget = styled('div')`
    margin-top: 4px;
    width: -webkit-fill-available;
`

const Row = styled('div')`
    display: flex;
    gap: 5px;
    align-items: center;
    max-width: 100%;
    justify-content: space-between;
`

const Right = styled('div')`
    width: 100%;
    text-align: right;
`
