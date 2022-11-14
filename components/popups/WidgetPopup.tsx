import styled from '@emotion/styled'
import Add from '@mui/icons-material/Add'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Delete from '@mui/icons-material/Delete'
import { Button, Dialog, IconButton, Snackbar, TextField } from '@mui/material'
import React from 'react'
import { consts } from '../../utils/consts'
import { updateDocTyped } from '../../utils/db'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'
import { useStates } from '../../utils/useStateObject'

export function WidgetPopup(props: { label: Label; open: boolean; onClose: () => void }) {
    const state = useStates({ snackbarMessage: '' })

    function handleDelete(widget: string) {
        updateDocTyped(props.label.id, { widgets: props.label.widgets.filter(w => w !== widget) })
    }

    async function handlePaste() {
        const clipbaord = await navigator.clipboard.readText()
        const path = clipbaord.split('soundcloud.com')[1]
        if (!path || clipbaord.includes('on.soundcloud.com')) {
            state.snackbarMessage = clipbaord
            return
        }
        console.log(`path`, path)
        updateDocTyped(props.label.id, {
            widgets: props.label.widgets.concat('https://soundcloud.com' + path),
        })
    }

    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return
        state.snackbarMessage = ''
    }

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <Wrapper>
                {props.label.name}
                {props.label.widgets.length !== 0 && (
                    <Widgets>
                        {props.label.widgets.map(widget => (
                            <Row key={widget}>
                                <Widget>
                                    <iframe
                                        width='100%'
                                        height='20'
                                        scrolling='no'
                                        frameBorder='no'
                                        allow='autoplay'
                                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                                            widget
                                        )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                                    ></iframe>
                                </Widget>
                                <IconButton onClick={() => handleDelete(widget)}>
                                    <Delete style={{ color: 'hsl(0, 0%, 60%)' }} />
                                </IconButton>
                            </Row>
                        ))}
                    </Widgets>
                )}
                <Row>
                    <Right>
                        <Button onClick={handlePaste} startIcon={<ContentPaste />}>
                            Paste URL
                        </Button>
                    </Right>
                </Row>
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
`

const Row = styled('div')`
    display: flex;
    gap: 5px;
    align-items: center;
    max-width: 100%;
`

const Right = styled('div')`
    width: 100%;
    text-align: right;
`
