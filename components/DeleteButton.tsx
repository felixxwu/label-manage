import Delete from '@mui/icons-material/Delete'
import { Button } from '@mui/material'

export function DeleteButton(props: { onClick: React.MouseEventHandler<HTMLButtonElement> }) {
    return (
        <Button color='warning' variant='contained' onClick={props.onClick} startIcon={<Delete />}>
            Delete
        </Button>
    )
}
