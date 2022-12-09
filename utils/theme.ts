import { createTheme } from '@mui/material/styles'
import { consts } from './consts'

const primary = 'hsl(0deg 0% 85%)'

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: primary,
            dark: 'hsl(0, 0%,65%)',
        },
        secondary: {
            main: 'hsl(225, 6%, 16%)',
            light: 'hsl(225, 6%, 18%)',
        },
        warning: {
            main: 'hsl(0, 40%, 35%)',
            light: 'hsl(0, 90%, 70%)',
        },
        divider: 'hsl(0, 0%, 33%)',
        background: {
            default: 'hsl(225, 6%, 13%)',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: consts.borderRadius,

                    '& .MuiButton-textPrimary': {
                        color: primary,
                    },
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
                        margin: 0,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '& .MuiSvgIcon-root': {
                        color: primary,
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    color: primary,
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: primary,
                },
            },
        },
    },
})
