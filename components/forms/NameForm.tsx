import styled from '@emotion/styled'
import React, { useState } from 'react'
import { updateDocTyped } from '../../utils/db'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'

export function NameForm(props: { label: Label }) {
    const [name, setName] = useState(props.label.name)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
        updateDocTyped(props.label.id, { name: e.target.value })
    }

    return (
        <>
            <Wrapper
                type='text'
                value={name}
                onChange={handleChange}
                autoComplete='off'
                autoCorrect='off'
                spellCheck='false'
            />
        </>
    )
}

const Wrapper = styled('input')`
    font-size: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${theme.palette.primary.main};
    max-width: 100%;
    padding: 0;
`
