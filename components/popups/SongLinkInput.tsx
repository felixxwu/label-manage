import { Button, IconButton, TextField } from '@mui/material'
import { Launch, ContentPaste } from '@mui/icons-material'
import styled from '@emotion/styled'

const TextWithIcon = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`

const ComboText = styled('div')`
  width: 100%;
`

const ComboIcon = styled('div')`
  flex: 1;
  margin-top: 10px;
`

const PasteButtonContainer = styled('div')`
  margin-top: -10px;
  margin-bottom: 20px;
  width: fit-content;
`

export function SongLinkInput(props: {
  value: string
  onChange: (value: string) => void
  onPasteClick: () => void
}) {
  return (
    <>
      <TextWithIcon>
        <ComboText>
          <TextField
            margin='normal'
            label='Song Link'
            fullWidth
            multiline
            rows={3}
            onChange={e => props.onChange(e.target.value)}
            value={props.value}
          />
        </ComboText>
        <ComboIcon>
          <IconButton onClick={() => window.open(props.value, '_blank')?.focus()}>
            <Launch color='primary' />
          </IconButton>
        </ComboIcon>
      </TextWithIcon>
      <PasteButtonContainer>
        <Button variant='text' startIcon={<ContentPaste />} onClick={props.onPasteClick} fullWidth>
          Paste from Clipboard
        </Button>
      </PasteButtonContainer>
    </>
  )
}
