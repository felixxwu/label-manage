import styled from '@emotion/styled'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { updateDocTyped } from '../../utils/db'
import { store } from '../../utils/store'
import { followerOptions, Label } from '../../utils/types'
import { ClearButton } from '../ClearButton'
import { EditButton } from '../EditButton'

export function FollowersForm(props: { label: Label }) {
    const [followers, setFollowers] = useState(props.label.followers)
    const [editMode, setEditMode] = useState(false)

    function handleChange(newFollowers: typeof followerOptions[number]) {
        updateDocTyped(store().db, props.label.id, { followers: newFollowers })
        setFollowers(newFollowers)
        if (newFollowers) {
            toggleEditMode()
        }
    }

    function toggleEditMode() {
        setEditMode(!editMode)
    }

    return (
        <Wrapper>
            {editMode ? (
                <ToggleButtonGroup
                    color='primary'
                    exclusive
                    value={followers}
                    onChange={(_, value) => handleChange(value)}
                >
                    {followerOptions.map((option, index) => (
                        <ToggleButton value={option} key={index}>
                            {option}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            ) : (
                <Count>
                    {props.label.followers ? (
                        <>
                            ~ ${props.label.followers} followers
                            <ClearButton
                                onClick={() => handleChange(null)}
                                secondary={!!props.label.followers}
                            />
                        </>
                    ) : (
                        <>
                            <div style={{ opacity: 0.5 }}>Followers:</div>
                            <EditButton
                                onClick={toggleEditMode}
                                secondary={!!props.label.followers}
                            />
                        </>
                    )}
                </Count>
            )}
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    width: 100%;
`

const Count = styled('div')`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
`
