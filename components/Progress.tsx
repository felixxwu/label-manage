import { Box, CircularProgress, Typography } from '@mui/material'
import { Label } from '../utils/types'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import { getProgress } from '../utils/progress'

export function Progress(props: { label: Label }) {
  const percentage = getProgress(props.label)
  return percentage === 100 ? (
    <div style={{ padding: '8px' }}>
      <DoneAllIcon color='primary' />
    </div>
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
