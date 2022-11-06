import { createTheme } from '@mui/material/styles'
import { consts } from './consts'

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#eee',
        },
        secondary: {
            main: '#2d2d2d',
        },
        warning: {
            main: '#933',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: consts.borderRadius,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& fieldset': {
                        borderRadius: consts.borderRadius,
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                root: {
                    '& .MuiDialog-paper': {
                        borderRadius: consts.borderRadius,
                    },
                },
            },
        },
    },
})
