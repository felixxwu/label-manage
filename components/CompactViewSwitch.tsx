import { FormControlLabel, Switch } from '@mui/material'
import { consts } from '../utils/consts'
import { updateDocTyped } from '../utils/db'
import { store } from '../utils/store'

export function CompactViewSwitch() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateDocTyped(store().db, consts.dbExtraId, { compact: event.target.checked })
    }

    return (
        <FormControlLabel
            control={<Switch onChange={handleChange} checked={store().extra.compact} />}
            label='Compact View'
        />
    )
}
