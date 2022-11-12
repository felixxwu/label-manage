import { Label } from '../../utils/types'
import { LinkOrEmail } from '../LinkOrEmail'

export function LinkForm(props: { label: Label }) {
    return (
        <LinkOrEmail
            label={props.label}
            dbKey='link'
            useGoogleIcon={true}
            searchUrl={'https://www.google.com/search?q=' + encodeURIComponent(props.label.name + ' soundcloud')}
            prompt='SoundCloud:'
        />
    )
}
