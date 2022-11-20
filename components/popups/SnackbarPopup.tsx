import { Snackbar } from '@mui/material'
import { store } from '../../utils/store'

export function SnackbarPopup() {
    const handleSnackbarClose = (_: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return
        store().snackbar = ''
    }

    return (
        <Snackbar
            open={!!store().snackbar}
            autoHideDuration={5000}
            onClose={handleSnackbarClose}
            message={store().snackbar}
        />
    )
}
