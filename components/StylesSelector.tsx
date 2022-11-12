import { LoadingButton } from '@mui/lab'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { consts } from '../utils/consts'
import { updateDocTyped } from '../utils/db'
import { store } from '../utils/store'
import { useShortLoad } from '../utils/useShortLoad'
import { Chips } from './Chips'

export function StylesSelector(props: { onSelectStyle: (style: string) => void }) {
    const [styleToAdd, setStyleToAdd] = useState('')
    const [loading, load] = useShortLoad()
    const [addMode, setAddMode] = useState(false)

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setStyleToAdd(e.target.value)
    }

    function handleKeyUp(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            addStyle()
        }
    }

    async function addStyle() {
        await load()
        if (store().extra.styles.includes(styleToAdd)) return

        await updateDocTyped(store().db, consts.dbExtraId, {
            styles: store().extra.styles.concat(styleToAdd),
        })
        setStyleToAdd('')
    }

    async function handleDelete(style: string) {
        await load()

        await updateDocTyped(store().db, consts.dbExtraId, {
            styles: store().extra.styles.filter(s => s !== style),
        })
    }

    async function handleClick(style: string) {
        props.onSelectStyle(style)
    }

    return (
        <div className='style-selector'>
            <Chips chips={store().extra.styles} onClick={handleClick} onDelete={handleDelete} colorful />
            {addMode ? (
                <>
                    <TextField
                        margin='normal'
                        label='New style name...'
                        fullWidth
                        variant='standard'
                        onChange={handleInput}
                        onKeyUp={handleKeyUp}
                        value={styleToAdd}
                        autoComplete='off'
                        autoCorrect='off'
                        autoFocus
                        sx={{ margin: 0 }}
                    />
                    <LoadingButton onClick={addStyle} loading={loading}>
                        Add to list
                    </LoadingButton>
                </>
            ) : (
                <Button onClick={() => setAddMode(true)}>Add new style</Button>
            )}

            <style jsx>{`
                .style-selector {
                    max-width: 400px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    padding: 20px;
                }

                .chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
            `}</style>
        </div>
    )
}
