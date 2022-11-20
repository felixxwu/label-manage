import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { consts } from '../../utils/consts'
import { updateDocTyped } from '../../utils/db'
import { getDaysAgo } from '../../utils/getDaysAgo'
import { nFormatter } from '../../utils/nFormatter'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'

export function NameForm(props: { label: Label }) {
    const [name, setName] = useState(props.label.name)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
        updateDocTyped(props.label.id, { name: e.target.value })
    }

    return (
        <Wrapper>
            <Input
                type='text'
                value={name}
                onChange={handleChange}
                autoComplete='off'
                autoCorrect='off'
                spellCheck='false'
            />
            <InfoBar>
                <Typography variant='caption' color={theme.palette.primary.dark}>
                    {nFormatter(props.label.followers, 0)} Followers
                </Typography>
                <Typography
                    variant='caption'
                    color={
                        getDaysAgo(props.label) > consts.uploadWarning
                            ? theme.palette.warning.light
                            : theme.palette.primary.dark
                    }
                >
                    Last Upload: {getDaysAgo(props.label)} days
                </Typography>
            </InfoBar>
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

const Input = styled('input')`
    font-size: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${theme.palette.primary.main};
    max-width: 100%;
    padding: 0;
`

const InfoBar = styled('div')`
    display: flex;
    justify-content: space-between;
`
