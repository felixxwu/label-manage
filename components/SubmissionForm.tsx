import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Label, Store } from '../utils/types'
import { LinkOrEmail } from './LinkOrEmail'
import EmailIcon from '@mui/icons-material/Email'
import LinkIcon from '@mui/icons-material/Link'

export function SubmissionForm(props: { label: Label; store: Store }) {
    return (
        <LinkOrEmail
            label={props.label}
            prompt='Submission:'
            dbKey='submission'
            useGoogleIcon={false}
            searchUrl={props.label.link}
            store={props.store}
        />
    )
}
