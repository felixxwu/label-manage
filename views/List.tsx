import { Fab } from '@mui/material'
import { Store } from '../utils/types'
import { ListItem } from '../components/ListItem'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import { Input } from '../components/Input'
import { fade } from '../utils/animate'
import { useEffect } from 'react'

export function List(props: { store: Store }) {
    useEffect(() => {
        history.pushState('nohb', null, '#')
    }, [])

    async function showMusic() {
        await fade()
        props.store.showMusic = true
    }

    return (
        <div className='list'>
            <h1>Label List</h1>

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
