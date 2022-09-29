import { createTheme } from '@mui/material/styles'
import { consts } from './consts'

const primary = '#ddd'
const secondary = '#555'
const warning = '#a00'
const background = '#222'

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
        warning: {
            main: warning,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    width: '200px',
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
