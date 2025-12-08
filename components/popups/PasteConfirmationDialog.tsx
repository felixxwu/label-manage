import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import styled from '@emotion/styled'

const PastePreview = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 400px;
  max-width: 100%;
  padding: 10px 0;
`

export function PasteConfirmationDialog(props: {
  content: string
  onCancel: () => void
  onConfirm: () => void
}) {
  return (
    <>
      <DialogTitle>Confirm Paste</DialogTitle>
      <DialogContent>
        <PastePreview>{props.content}</PastePreview>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button onClick={props.onConfirm}>Confirm</Button>
      </DialogActions>
    </>
  )
}

