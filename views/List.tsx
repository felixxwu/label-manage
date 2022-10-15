import { Fab, FormControlLabel, Switch } from '@mui/material'
import { Store } from '../utils/types'
import { ListItem } from '../components/ListItem'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import { Input } from '../components/Input'
import { fade } from '../utils/animate'
import { updateDocTyped } from '../utils/db'
import { consts } from '../utils/consts'
import { setHistory } from '../utils/history'

export function List(props: { store: Store }) {
    setHistory('')

    async function showMusic() {
        await fade()
        props.store.showMusic = true
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateDocTyped(props.store.db, consts.dbExtraId, { compact: event.target.checked })
    }

    return (
        <div className='list'>
            <h1>Label List</h1>

            <Input store={props.store} />

            <FormControlLabel
                control={<Switch onChange={handleChange} checked={props.store.extra.compact} />}
                label='Compact View'
            />

            <div className='list-items'>
                {props.store.labels.map((label, i) => {
                    return <ListItem label={label} key={i} store={props.store} />
                })}
            </div>

            <Fab onClick={showMusic} color='secondary' sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                <LibraryMusicIcon />
            </Fab>

            <style jsx>{`
                .list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .list-items {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: ${props.store.extra.compact ? '' : '20px'};
                }
            `}</style>
        </div>
    )
}
