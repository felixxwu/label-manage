import styled from '@emotion/styled'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { store } from '../../utils/store'
import { useStates } from '../../utils/useStateObject'

export interface DialogOptions {
    message: string
    actions: { label: string; callback?: (input?: string) => void; callOnEnter?: boolean }[]
    input?: string
    multiselect?: {
        choices: string[]
        onChoose: (choice: string) => void
    }
}

export function GeneralDialog() {
    const state = useStates({ dialogInput: '' })
    const { dialog } = store()

    function handleDialogKeyUp(e: React.KeyboardEvent) {
        if (e.key === 'Enter' && dialog !== null) {
            const defaultAction = dialog.actions.find(action => action.callOnEnter)
            if (defaultAction) {
                submitDialog(defaultAction)
            }
        }
    }

    function submitDialog(action: DialogOptions['actions'][number]) {
        action.callback?.(state.dialogInput)
        store().dialog = null
        state.dialogInput = ''
    }

    function handleChoice(choice: string) {
        dialog?.multiselect?.onChoose?.(choice)
        store().dialog = null
        state.dialogInput = ''
    }

    return (
        <Dialog open={!!store().dialog} onClose={() => (store().dialog = null)}>
            <DialogTitle>{store().dialog?.message}</DialogTitle>
            {dialog?.input && (
                <DialogContent>
                    <TextField
                        autoFocus
                        margin='normal'
                        label={store().dialog?.input}
                        fullWidth
                        variant='standard'
                        onChange={e => {
                            state.dialogInput = e.target.value
                        }}
                        onKeyUp={handleDialogKeyUp}
                        value={state.dialogInput}
                        autoComplete='off'
                        autoCorrect='off'
                    />
                </DialogContent>
            )}
            {dialog?.multiselect && (
                <DialogContent>
                    {dialog.multiselect.choices.map((choice, i) => (
                        <Choice key={i} onClick={() => handleChoice(choice)}>
                            {choice}
                        </Choice>
                    ))}
                </DialogContent>
            )}
            {dialog?.actions.length !== 0 && (
                <DialogActions>
                    {store().dialog?.actions.map(action => {
                        return (
                            <Button onClick={() => submitDialog(action)} key={action.label}>
                                {action.label}
                            </Button>
                        )
                    })}
                </DialogActions>
            )}
        </Dialog>
    )
}

const Choice = styled('div')`
    padding: 20px 0;
    width: 100vw;
    max-width: 100%;
    cursor: pointer;
    word-wrap: break-word;

    &:hover {
        text-decoration: underline;
    }
`
