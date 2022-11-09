import { createTheme } from '@mui/material/styles'
import { consts } from './consts'

const primary = '#ccc'

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: primary,
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
                    '& input': {
                        color: primary,
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
