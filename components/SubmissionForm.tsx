import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Label, Store } from '../utils/types'
import { LinkOrEmail } from './LinkOrEmail'
import EmailIcon from '@mui/icons-material/Email'
import LinkIcon from '@mui/icons-material/Link'

export function SubmissionForm(props: { label: Label; store: Store }) {
    const [state, setState] = useState<'choosing' | 'searchingEmail' | 'searchingSubmission'>('choosing')

    useEffect(() => {
        if (!props.label.submission && !props.label.email) setState('choosing')
    }, [props.label])

    if (props.label.submission || state === 'searchingSubmission')
        return (
            <LinkOrEmail
                label={props.label}
                prompt='Submission Link:'
                dbKey='submission'
                type='link'
                useGoogleIcon={false}
                searchUrl={props.label.link}
                store={props.store}
            />
        )

    if (props.label.email || state === 'searchingEmail')
        return (
            <LinkOrEmail
                label={props.label}
                prompt='Email:'
                dbKey='email'
                type='email'
                useGoogleIcon={false}
                searchUrl={props.label.link}
                store={props.store}
            />
        )

    return (
        <div className='choose'>
            <Button
                onClick={() => setState('searchingEmail')}
                variant='contained'
                startIcon={<EmailIcon />}
                color='secondary'
            >
                Add Email
            </Button>
            <Button
                onClick={() => setState('searchingSubmission')}
                variant='contained'
                startIcon={<LinkIcon />}
                color='secondary'
            >
                Add Submission Link
            </Button>

            <style jsx>{`
                .choose {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
            `}</style>
        </div>
    )
}
