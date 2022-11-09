import { Store } from '../../utils/store'
import { Label } from '../../utils/types'
import { LinkOrEmail } from '../LinkOrEmail'

export function SubmissionForm(props: { label: Label; store: Store }) {
    const googleUrl = 'https://www.google.com/search?q=' + encodeURIComponent(props.label.name + ' demo')
    const search = props.label.link ? props.label.link : googleUrl
    return (
        <LinkOrEmail
            label={props.label}
            prompt='Submission:'
            dbKey='submission'
            useGoogleIcon={!props.label.link}
            searchUrl={search}
            store={props.store}
        />
    )
}
