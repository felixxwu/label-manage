import { Box, CircularProgress, Typography } from '@mui/material'
import { Label, Store } from '../utils/types'
import DoneAllIcon from '@mui/icons-material/DoneAll'

export function Progress(props: { label: Label; store: Store }) {
    const fields: (keyof Label)[] = ['artists', 'followers', 'image', 'link', 'submission']
    const filledOut = fields.filter(field => {
        if (Array.isArray(props.label[field])) {
            return props.label[field].length !== 0
        } else {
            return !!props.label[field]
        }
    }).length
    const percentage = (filledOut / fields.length) * 100
    return filledOut === fields.length ? (
        <DoneAllIcon />
    ) : (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant='determinate' value={percentage} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant='caption' component='div' color='text.secondary'>{`${Math.round(
                    percentage
                )}%`}</Typography>
            </Box>
        </Box>
    )
}
