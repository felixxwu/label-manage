import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import { store } from '../utils/store'
import { SortType } from '../utils/types'

export function Sort() {
    const handleChange = (event: SelectChangeEvent<SortType>) => {
        store().sort = event.target.value as SortType
    }

    return (
        <FormControl sx={{ minWidth: 120 }} size='small'>
            <InputLabel id='select'>Sort</InputLabel>
            <Select labelId='select' id='select' value={store().sort} label='Age' onChange={handleChange}>
                <MenuItem value={'follower' as SortType}>
                    <Typography color='primary'>Followers</Typography>
                </MenuItem>
                <MenuItem value={'name' as SortType}>
                    <Typography color='primary'>Name</Typography>
                </MenuItem>
            </Select>
        </FormControl>
    )
}
