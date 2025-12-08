import { Button, DialogActions, DialogTitle } from '@mui/material'

export function DeleteConfirmationDialog(props: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <>
      <DialogTitle>Are you sure you want to delete this song?</DialogTitle>
      <DialogActions>
        <Button onClick={props.onCancel}>No</Button>
        <Button onClick={props.onConfirm}>Delete</Button>
      </DialogActions>
    </>
  )
}

