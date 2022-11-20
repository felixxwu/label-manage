import { Label } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { Chips } from '../Chips'
import { StylesSelector } from '../StylesSelector'
import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import MusicNote from '@mui/icons-material/MusicNote'
import { WidgetPopup } from '../popups/WidgetPopup'
import { useStates } from '../../utils/useStateObject'

export function StylesForm(props: { label: Label }) {
    const state = useStates({ widgetDialogOpen: false })

    async function handleDelete(style: string) {
        updateDocTyped(props.label.id, {
            styles: props.label.styles.filter(item => item !== style),
        })
    }

    return (
        <Wrapper>
            <Header>
                <div>Styles:</div>
                <Widgets>
                    {props.label.tracks.popular.length +
                        props.label.tracks.recent.length +
                        props.label.tracks.reposts.length}
                    <IconButton onClick={() => (state.widgetDialogOpen = true)}>
                        <MusicNote />
                    </IconButton>
                </Widgets>
            </Header>
            <Chips
                colorful
                chips={props.label.styles}
                onDelete={handleDelete}
                addDialog={({ closeDialog }) => {
                    async function handleStyleSelection(style: string) {
                        if (!props.label.styles.includes(style)) {
                            updateDocTyped(props.label.id, {
                                styles: props.label.styles.concat(style),
                            })
                        }
                        closeDialog()
                    }

                    return (
                        <StylesSelector
                            onSelectStyle={handleStyleSelection}
                            ignore={props.label.styles}
                        />
                    )
                }}
            />
            <WidgetPopup
                open={state.widgetDialogOpen}
                onClose={() => (state.widgetDialogOpen = false)}
                label={props.label}
            />
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Header = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Widgets = styled('div')`
    display: flex;
    align-items: center;
`
