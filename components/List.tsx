import { Fab } from '@mui/material'
import { Store } from '../utils/types'
import { ListItem } from './ListItem'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import { Input } from './Input'
import { fade } from '../utils/animate'

export function List(props: { store: Store }) {
    async function showMusic() {
        await fade()
        props.store.showMusic = true
    }

    return (
        <div className='list'>
            <Input store={props.store} />

            {props.store.labels.map((label, i) => {
                return <ListItem label={label} key={i} store={props.store} />
            })}

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
            `}</style>
        </div>
    )
}
