import styled from '@emotion/styled'
import { Label } from '../../utils/types'
import { LinkOrEmail } from '../LinkOrEmail'
import { theme } from '../../utils/theme'
import { consts } from '../../utils/consts'
import { AcceptDemo } from './AcceptDemo'
import { InactiveForm } from './InactiveForm'
import { Title } from '../Title'
import { IconButton } from '@mui/material'
import { Edit, Search } from '@mui/icons-material'
import { searchForLinks } from '../../utils/searchForLinks'
import { useState } from 'react'

export function SubmissionForm(props: { label: Label }) {
  const [open, setOpen] = useState(false)
  const search =
    'https://www.google.com/search?q=' + encodeURIComponent(props.label.name + ' demo submission')
  const aiPrompt = `I'm a music producer looking to submit my music to the record label "${props.label.name}" for them to consider releasing it. Please search for how "${props.label.name}" accepts demo submissions and find the best way for me to submit my music to them. Specifically look for:
- A demo submission email address
- An online submission form (e.g. on their website, or via a platform like SubmitHub, Musosoup, Groover, etc.)
- Any submission guidelines they list (accepted genres, file formats, what to include, etc.)

Please give me the exact email address or form link you find, along with any submission requirements.`

  return (
    <Wrapper style={props.label.submission ? {} : { backgroundColor: theme.palette.warning.dark }}>
      <Title>
        Submission:
        {!props.label.submission && (
          <IconButton onClick={() => setOpen(true)} size='small'>
            <Edit />
          </IconButton>
        )}
      </Title>
      <LinkOrEmail
        label={props.label}
        prompt='Submission:'
        dbKey='submission'
        useGoogleIcon={true}
        searchUrl={search}
        aiPrompt={aiPrompt}
        open={open}
        setOpen={setOpen}
      />
      {props.label.submission && (
        <>
          <Divider />
          <AcceptDemo {...props} />
        </>
      )}
      <InactiveForm {...props} />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.secondary.main};
  padding: 10px;
  border-radius: ${consts.borderRadius}px;
`

const Divider = styled('div')`
  width: 100%;
  border-bottom: 2px solid ${theme.palette.primary.dark};
  margin: 10px 0 20px 0;
  opacity: 0.1;
`
