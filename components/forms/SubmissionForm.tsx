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
