import { createTheme } from '@mui/material/styles'
import { consts } from './consts'

const primary = '#ccc'

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: primary,
            dark: '#999',
        },
        secondary: {
            main: '#242529',
            light: '#26282b',
        },
        warning: {
            main: '#933',
            light: '#f77',
        },
        divider: '#545454',
        background: {
            default: '#202124',
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
