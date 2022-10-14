import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export function EditButton(props: { onClick: React.MouseEventHandler<HTMLButtonElement>; secondary?: boolean }) {
    return (
        <Button
            variant='contained'
            color={props.secondary ? 'secondary' : 'primary'}
            startIcon={<EditIcon />}
            onClick={props.onClick}
        >
            Edit
        </Button>
    )
}
