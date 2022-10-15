import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Store } from '../utils/store'
import { SortType } from '../utils/types'

export function Sort(props: { store: Store }) {
    const handleChange = (event: SelectChangeEvent<SortType>) => {
        props.store.sort = event.target.value as SortType
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <InputLabel id='select'>Sort</InputLabel>
            <Select labelId='select' id='select' value={props.store.sort} label='Age' onChange={handleChange}>
                <MenuItem value={'follower' as SortType}>Followers</MenuItem>
                <MenuItem value={'name' as SortType}>Name</MenuItem>
            </Select>
        </FormControl>
    )
}
