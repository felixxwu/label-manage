import { createTheme } from '@mui/material/styles'
import { consts } from './consts'

const primary = '#eee'
const secondary = '#555'

export const theme = createTheme({
    palette: {
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    width: '200px',
                    '&.Mui-disabled': {
                        opacity: 0.4,
                        backgroundColor: primary,
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: primary,
                    input: {
                        color: primary,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: secondary,
                            borderRadius: consts.borderRadius,
                        },
                        '&:hover fieldset': {
                            borderColor: secondary,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: primary,
                        },
                    },
                    '& .MuiFormLabel-root': {
                        color: secondary,
                        fontSize: '17px',
                        '&.Mui-focused': {
                            color: primary,
                        },
                    },
                },
            },
        },
    },
})
