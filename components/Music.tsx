import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddIcon from '@mui/icons-material/Add'
import { Store } from '../utils/types'
import { consts } from '../utils/consts'
import { fade } from '../utils/animate'

export function Music(props: { store: Store }) {
    async function handleBack() {
        await fade()
        props.store.showMusic = false
    }

    return (
        <div className='music'>
            <h1>Music Library</h1>

            <div className='bottom-buttons'>
                <Button color='primary' variant='contained' onClick={handleBack} startIcon={<ArrowBackIcon />}>
                    Back
                </Button>
                <Button color='primary' variant='contained' onClick={handleBack} startIcon={<AddIcon />}>
                    Add Song
                </Button>
            </div>

            <style jsx>{`
                .music {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    max-width: ${consts.maxAppWidth}px;
                    margin: auto;
                }

                .bottom-buttons {
                    display: flex;
                    gap: 20px;
                }
            `}</style>
        </div>
    )
}
