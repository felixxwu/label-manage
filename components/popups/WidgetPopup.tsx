import styled from '@emotion/styled'
import Add from '@mui/icons-material/Add'
import Delete from '@mui/icons-material/Delete'
import { Dialog, IconButton, TextField } from '@mui/material'
import React from 'react'
import { consts } from '../../utils/consts'
import { updateDocTyped } from '../../utils/db'
import { Label } from '../../utils/types'
import { useStates } from '../../utils/useStateObject'

export function WidgetPopup(props: { label: Label; open: boolean; onClose: () => void }) {
    const state = useStates({ url: '' })

    console.log(`props.label.widgets`, props.label.widgets)

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        state.url = e.target.value
    }

    function handleAdd() {
        updateDocTyped(props.label.id, { widgets: props.label.widgets.concat(state.url) })
        state.url = ''
    }

    function handleDelete(widget: string) {
        updateDocTyped(props.label.id, { widgets: props.label.widgets.filter(w => w !== widget) })
    }

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <Wrapper>
                {props.label.name}
                {props.label.widgets.length !== 0 && (
                    <Widgets>
                        {props.label.widgets.map(widget => (
                            <Row>
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
                                <IconButton onClick={() => handleDelete(widget)}>
                                    <Delete color='secondary' />
                                </IconButton>
                            </Row>
                        ))}
                    </Widgets>
                )}
                <Row>
                    <TextInput label='SoundCloud URL' value={state.url} onChange={handleChange} />
                    <div>
                        <IconButton onClick={handleAdd}>
                            <Add />
                        </IconButton>
                    </div>
                </Row>
            </Wrapper>
        </Dialog>
    )
}

const Wrapper = styled('div')`
    padding: 20px;
    width: ${consts.maxAppWidth}px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Widgets = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 10px 0 10px 10px;
    border-radius: ${consts.borderRadius}px;
`

const TextInput = styled(TextField)`
    width: 100%;
`

const Row = styled('div')`
    display: flex;
    gap: 20px;
    align-items: center;
`
