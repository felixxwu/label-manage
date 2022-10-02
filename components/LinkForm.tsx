import { Label, Store } from '../utils/types'
import { LinkOrEmail } from './LinkOrEmail'

export function LinkForm(props: { label: Label; store: Store }) {
    return (
        <LinkOrEmail
            label={props.label}
            dbKey='link'
            useGoogleIcon={true}
            searchUrl={'https://www.google.com/search?q=' + encodeURIComponent(props.label.name + ' soundcloud')}
            store={props.store}
            prompt='SoundCloud:'
        />
    )
}
