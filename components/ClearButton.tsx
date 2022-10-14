import { Button } from '@mui/material'
import ClearIcon from '@mui/icons-material/Backspace'

export function ClearButton(props: { onClick: React.MouseEventHandler<HTMLButtonElement>; secondary?: boolean }) {
    return (
        <Button
            variant='contained'
            color={props.secondary ? 'secondary' : 'primary'}
            startIcon={<ClearIcon />}
            onClick={props.onClick}
        >
            Clear
        </Button>
    )
}
