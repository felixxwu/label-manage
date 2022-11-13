import Delete from '@mui/icons-material/Delete'
import { Button } from '@mui/material'
import { theme } from '../../utils/theme'

export function DeleteButton(props: { onClick: React.MouseEventHandler<HTMLButtonElement> }) {
    return (
        <Button
            color='warning'
            variant='contained'
            onClick={props.onClick}
            startIcon={<Delete />}
            sx={{ color: theme.palette.primary.main }}
        >
            Delete
        </Button>
    )
}
