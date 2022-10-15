import { FormControlLabel, Switch } from '@mui/material'
import { consts } from '../utils/consts'
import { updateDocTyped } from '../utils/db'
import { Store } from '../utils/store'

export function CompactViewSwitch(props: { store: Store }) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateDocTyped(props.store.db, consts.dbExtraId, { compact: event.target.checked })
    }

    return (
        <FormControlLabel
            control={<Switch onChange={handleChange} checked={props.store.extra.compact} />}
            label='Compact View'
        />
    )
}
