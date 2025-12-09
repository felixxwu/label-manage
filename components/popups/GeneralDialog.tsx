import styled from '@emotion/styled'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { ReactNode, useState, useMemo, useEffect } from 'react'
import { store } from '../../utils/store'
import { consts } from '../../utils/consts'

export interface ValidationResult {
  message: string
  isError?: boolean // true for error, false/undefined for warning
}

export interface DialogOptions {
  message: string
  actions: { label: string; callback?: (input?: string) => void; callOnEnter?: boolean }[]
  input?: string
  initialValue?: string // Initial value for the input field
  multiselect?: {
    choices: { label: string; icon?: ReactNode }[]
    onChoose: (choice: string) => void
  }
  validate?: (input: string) => ValidationResult | string | null // Returns error/warning message if invalid, null if valid
}

export function GeneralDialog() {
  const [dialogInput, setDialogInput] = useState('')
  const { dialog } = store()

  // Reset input when dialog opens/closes, or set initial value if provided
  useEffect(() => {
    if (dialog?.initialValue !== undefined) {
      setDialogInput(dialog.initialValue)
    } else {
      setDialogInput('')
    }
  }, [dialog])

  const validationResult = useMemo(() => {
    if (!dialog?.validate) return null
    const result = dialog.validate(dialogInput)
    if (!result) return null

    // Handle both old string format and new ValidationResult format
    if (typeof result === 'string') {
      return { message: result, isError: true }
    }
    return result
  }, [dialog?.validate, dialogInput])

  const isValid = validationResult === null || validationResult.isError === false
  const isError = validationResult?.isError === true
  const isWarning = validationResult?.isError === false

  function handleDialogKeyUp(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && dialog !== null && !isError) {
      const defaultAction = dialog.actions.find(action => action.callOnEnter)
      if (defaultAction) {
        submitDialog(defaultAction)
      }
    }
  }

  function submitDialog(action: DialogOptions['actions'][number]) {
    if (isError) return
    action.callback?.(dialogInput)
    store().dialog = null
    setDialogInput('')
  }

  function handleChoice(choice: string) {
    dialog?.multiselect?.onChoose?.(choice)
    store().dialog = null
    setDialogInput('')
  }

  return (
    <Dialog open={!!store().dialog} onClose={() => (store().dialog = null)}>
      {store().dialog?.message && <DialogTitle>{store().dialog?.message}</DialogTitle>}
      {dialog?.input && (
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            label={store().dialog?.input}
            fullWidth
            onChange={e => {
              setDialogInput(e.target.value)
            }}
            onKeyUp={handleDialogKeyUp}
            value={dialogInput}
            autoComplete='off'
            autoCorrect='off'
            error={isError}
            helperText={validationResult?.message || ''}
            color={isWarning ? 'warning' : undefined}
            sx={{
              width: 'calc(100vw - 100px)',
              maxWidth: `${consts.maxAppWidth - 100}px`,
            }}
          />
        </DialogContent>
      )}
      {dialog?.multiselect && (
        <DialogContent>
          {dialog.multiselect.choices.map((choice, i) => (
            <Choice key={i} onClick={() => handleChoice(choice.label)}>
              {choice.icon}
              <div>{choice.label}</div>
            </Choice>
          ))}
          {!dialog.multiselect.choices.length && <div>No results found</div>}
        </DialogContent>
      )}
      {dialog?.actions.length !== 0 && (
        <DialogActions>
          {store().dialog?.actions.map(action => {
            const isPrimaryAction = action.callOnEnter
            return (
              <Button
                onClick={() => submitDialog(action)}
                key={action.label}
                disabled={isPrimaryAction && isError}
              >
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
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  width: 100vw;
  max-width: 100%;
  cursor: pointer;
  word-wrap: break-word;

  &:hover {
    text-decoration: underline;
  }
`
