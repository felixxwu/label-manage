import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { updateDocTyped } from '../utils/db'
import { followerOptions, Label, Store } from '../utils/types'
import EditIcon from '@mui/icons-material/Edit'

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
        <div>
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
                    Followers: {props.label.followers && '~'}
                    {props.label.followers}
                    <Button variant='contained' color='secondary' startIcon={<EditIcon />} onClick={toggleEditMode}>
                        Choose
                    </Button>
                </div>
            )}

            <style jsx>{`
                .count {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
            `}</style>
        </div>
    )
}
