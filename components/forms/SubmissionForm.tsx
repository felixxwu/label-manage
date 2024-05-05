import { Label } from '../../utils/types'
import { LinkOrEmail } from '../LinkOrEmail'

export function SubmissionForm(props: { label: Label }) {
  const search =
    'https://www.google.com/search?q=' + encodeURIComponent(props.label.name + ' demo submission')
  return (
    <LinkOrEmail
      label={props.label}
      prompt='Submission:'
      dbKey='submission'
      useGoogleIcon={true}
      searchUrl={search}
    />
  )
}
