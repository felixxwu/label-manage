import styled from '@emotion/styled'
import Edit from '@mui/icons-material/Edit'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { consts } from '../utils/consts'
import { updateDocTyped } from '../utils/db'
import { store } from '../utils/store'
import { Chips } from './Chips'

export function StylesSelector(props: {
    onSelectStyle: (style: string) => void
    ignore: string[]
}) {
    const [styleToAdd, setStyleToAdd] = useState('')
    const [editMode, setEditMode] = useState(false)

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setStyleToAdd(e.target.value)
    }

    function handleKeyUp(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            addStyle()
        }
    }

    async function addStyle() {
        if (store().extra.styles.includes(styleToAdd)) return

        await updateDocTyped(store().db, consts.dbExtraId, {
            styles: store().extra.styles.concat(styleToAdd),
        })
        setStyleToAdd('')
    }

    async function handleDelete(style: string) {
        await updateDocTyped(store().db, consts.dbExtraId, {
            styles: store().extra.styles.filter(s => s !== style),
        })
    }

    async function handleClick(style: string) {
        props.onSelectStyle(style)
    }

    return (
        <Wrapper>
            <Chips
                chips={store().extra.styles.filter(style => !props.ignore.includes(style))}
                onClick={handleClick}
                onDelete={editMode ? handleDelete : null}
                colorful
            />
            {editMode ? (
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
                    <Button onClick={addStyle}>Add to list</Button>
                </>
            ) : (
                <Button onClick={() => setEditMode(true)} startIcon={<Edit />}>
                    Edit
                </Button>
            )}
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`
