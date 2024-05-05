import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export function EditButton(props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  secondary?: boolean
}) {
  return (
    <IconButton onClick={props.onClick}>
      <EditIcon color='primary' />
    </IconButton>
  )
}
