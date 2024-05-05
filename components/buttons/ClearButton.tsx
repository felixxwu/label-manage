import { IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Delete'

export function ClearButton(props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  secondary?: boolean
}) {
  return (
    <IconButton onClick={props.onClick}>
      <ClearIcon color='primary' />
    </IconButton>
  )
}
