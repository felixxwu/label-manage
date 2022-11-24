import { FormControlLabel, Switch } from '@mui/material'
import { updateDocTyped } from '../../utils/db'
import { Label } from '../../utils/types'

export function AcceptDemo(props: { label: Label }) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateDocTyped(props.label.id, { acceptDemos: event.target.checked })
    }
    return (
        <FormControlLabel
            control={<Switch onChange={handleChange} checked={props.label.acceptDemos} />}
            label='Explicity Want Demos'
        />
    )
}
