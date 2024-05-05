import { useState } from 'react'
import { store } from '../utils/store'
import styled from '@emotion/styled'
import { Button, TextareaAutosize, Typography } from '@mui/material'
import { theme } from '../utils/theme'
import { snackError } from '../utils/snackError'
import { updateDocTyped } from '../utils/db'
import { consts } from '../utils/consts'
import { ContentPaste, Email, Save } from '@mui/icons-material'
import { Label, Song } from '../utils/types'
import Link from 'next/link'

export function Template(props: { label?: Label; songs?: Song[] }) {
  const [localTemplate, setLocalTemplate] = useState(store().extra.template)

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setLocalTemplate(e.target.value)
  }

  function handleOverwriteTemplate() {
    snackError('Template saved')
    updateDocTyped(consts.dbExtraId, { template: localTemplate })
  }

  function evaluateTemplateForClipboard() {
    const config = {
      label: props.label?.name,
      songs: props.songs?.map(song => `${song.title}: ${song.link}`).join('\n\n'),
    }

    return localTemplate.replace(/<(.*?)>/g, match => {
      return config[match.split(/<|>/).filter(Boolean)[0]]
    })
  }

  function evaluateTemplateForEmail() {
    return evaluateTemplateForClipboard()
      .split('\n')
      .map(part => encodeURIComponent(part))
      .join('%0D%0A')
  }

  const anchorLink = (() => {
    return (
      'mailto:' +
      props.label?.submission +
      '?subject=' +
      encodeURIComponent('Drum & Bass Demo - WUFO') +
      '&body=' +
      evaluateTemplateForEmail()
    )
  })()

  async function copyContent() {
    await window.navigator.clipboard.writeText(evaluateTemplateForClipboard())
    store().snackbar = 'Copied to clipboard'
  }

  return (
    <Wrapper>
      <TextArea
        value={localTemplate}
        onChange={handleTextChange}
        placeholder='Type email template here...'
      />
      <Typography variant='caption' sx={{ color: theme.palette.primary.dark }}>
        Use &lt;label&gt; to insert the label's name and &lt;songs&gt; to insert links to the songs
      </Typography>
      {props.label?.notes && (
        <Typography variant='caption' sx={{ color: theme.palette.warning.light }}>
          {props.label.notes}
        </Typography>
      )}
      <Right>
        <Button
          onClick={handleOverwriteTemplate}
          startIcon={<Save />}
          disabled={localTemplate === store().extra.template}
        >
          Save template
        </Button>
      </Right>
      <Right>
        {props.label?.submission.includes('@') ? (
          <Link href={anchorLink} target='_blank'>
            <Button startIcon={<Email />}>Send Email</Button>
          </Link>
        ) : (
          <Button onClick={copyContent} startIcon={<ContentPaste />}>
            Copy content
          </Button>
        )}
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
  width: ${consts.maxAppWidth}px;
`

const TextArea = styled(TextareaAutosize)`
  border: none;
  outline: none;
  background-color: transparent;
  resize: none;
  color: ${theme.palette.primary.main};
  width: 100%;
  padding: 0;
`

const Right = styled('div')`
  text-align: right;
`
