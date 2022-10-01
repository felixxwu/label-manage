import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { updateDocTyped } from '../utils/db'
import { followerOptions, Label, Store } from '../utils/types'

export function FollowersForm(props: { label: Label; store: Store }) {
    const [followers, setFollowers] = useState(props.label.followers)

    function handleChange(_, newFollowers: typeof followerOptions[number]) {
        updateDocTyped(props.store.db, props.label.id, { followers: newFollowers })
        setFollowers(newFollowers)
    }

    return (
        <div>
            <ToggleButtonGroup color='primary' exclusive value={followers} onChange={handleChange}>
                {followerOptions.map((option, index) => (
                    <ToggleButton value={option} key={index}>
                        {option}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>

            <style jsx>{``}</style>
        </div>
    )
}
