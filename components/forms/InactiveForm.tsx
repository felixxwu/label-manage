import { FormControlLabel, Switch } from '@mui/material'
import { updateDocTyped } from '../../utils/db'
import { Label } from '../../utils/types'

export function InactiveForm(props: { label: Label }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateDocTyped(props.label.id, { inactive: event.target.checked })
  }
  return (
    <FormControlLabel
      control={<Switch onChange={handleChange} checked={props.label.inactive} />}
      label='Do not submit to'
    />
  )
}
