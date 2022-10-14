import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { updateDocTyped } from '../utils/db'
import { followerOptions, Label, Store } from '../utils/types'
import { EditButton } from './EditButton'

export function FollowersForm(props: { label: Label; store: Store }) {
    const [followers, setFollowers] = useState(props.label.followers)
    const [editMode, setEditMode] = useState(false)

    function handleChange(_, newFollowers: typeof followerOptions[number]) {
        if (newFollowers) {
            updateDocTyped(props.store.db, props.label.id, { followers: newFollowers })
            setFollowers(newFollowers)
        }
        toggleEditMode()
    }

    function toggleEditMode() {
        setEditMode(!editMode)
    }

    return (
        <div className='form'>
            {editMode ? (
                <ToggleButtonGroup color='primary' exclusive value={followers} onChange={handleChange}>
                    {followerOptions.map((option, index) => (
                        <ToggleButton value={option} key={index}>
                            {option}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            ) : (
                <div className='count'>
                    {props.label.followers ? (
                        `~ ${props.label.followers} followers`
                    ) : (
                        <div style={{ opacity: 0.5 }}>Followers:</div>
                    )}
                    <EditButton onClick={toggleEditMode} secondary={!!props.label.followers} />
                </div>
            )}

            <style jsx>{`
                .form {
                    width: 100%;
                }

                .count {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    justify-content: space-between;
                }
            `}</style>
        </div>
    )
}
