import { LoadingButton } from '@mui/lab'
import { Chip, TextField } from '@mui/material'
import { useState } from 'react'
import { consts } from '../utils/consts'
import { updateDocTyped } from '../utils/db'
import { Store } from '../utils/store'
import { Label } from '../utils/types'
import { useShortLoad } from '../utils/useShortLoad'

export function StylesSelector(props: { label: Label; store: Store; onSelectStyle: (style: string) => void }) {
    const [styleToAdd, setStyleToAdd] = useState('')
    const [loading, load] = useShortLoad()

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
        if (props.store.extra.styles.includes(styleToAdd)) return

        await updateDocTyped(props.store.db, consts.dbExtraId, {
            styles: props.store.extra.styles.concat(styleToAdd),
        })
        setStyleToAdd('')
    }

    async function handleDelete(style: string) {
        await load()

        await updateDocTyped(props.store.db, consts.dbExtraId, {
            styles: props.store.extra.styles.filter(s => s !== style),
        })
    }

    async function handleClick(style: string) {
        await load()
        props.onSelectStyle(style)
    }

    return (
        <div className='style-selector'>
            <div className='chips'>
                {props.store.extra.styles.map(style => (
                    <Chip label={style} onClick={() => handleClick(style)} onDelete={() => handleDelete(style)} />
                ))}
                {props.store.extra.styles.length === 0 && 'No styles added.'}
            </div>
            <TextField
                margin='normal'
                label='Add Style...'
                fullWidth
                variant='standard'
                onChange={handleInput}
                onKeyUp={handleKeyUp}
                value={styleToAdd}
                autoComplete='off'
                autoCorrect='off'
            />
            <LoadingButton onClick={addStyle} loading={loading} variant='contained'>
                Add
            </LoadingButton>

            <style jsx>{`
                .style-selector {
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
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
