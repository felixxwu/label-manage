import { Button, Fab } from '@mui/material'
import { ListItem } from '../components/ListItem'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import { Input } from '../components/Input'
import { fade } from '../utils/animate'
import { setHistory } from '../utils/history'
import { CompactViewSwitch } from '../components/CompactViewSwitch'
import { Sort } from '../components/Sort'
import { Store } from '../utils/store'
import { followersToIndex } from '../utils/types'

export function List(props: { store: Store }) {
    setHistory('')

    async function showMusic() {
        await fade()
        props.store.showMusic = true
    }

    const labels = props.store.labels.sort((a, b) => {
        if (props.store.sort === 'follower') {
            return followersToIndex(b.followers) - followersToIndex(a.followers)
        }
        if (props.store.sort === 'name') {
            return a.name > b.name ? 1 : -1
        }
    })

    return (
        <div className='list'>
            <h1>Label List</h1>

            <Input store={props.store} />

            <Button size='large' variant='contained' fullWidth endIcon={<LibraryMusicIcon />} onClick={showMusic}>
                Music Library
            </Button>

            <div className='options'>
                <CompactViewSwitch store={props.store} />
                <Sort store={props.store} />
            </div>

            <div className='list-items'>
                {labels.map((label, i) => {
                    return <ListItem label={label} key={i} store={props.store} />
                })}
            </div>

            <style jsx>{`
                .list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;
                }

                .list-items {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: ${props.store.extra.compact ? '' : '20px'};
                }

                .options {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}</style>
        </div>
    )
}
