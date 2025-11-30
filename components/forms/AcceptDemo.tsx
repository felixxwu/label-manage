import { FormControlLabel, Switch, Typography } from '@mui/material'
import { updateDocTyped } from '../../utils/db'
import { Label } from '../../utils/types'
import styled from '@emotion/styled'

export function AcceptDemo(props: { label: Label }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateDocTyped(props.label.id, { acceptDemos: event.target.checked })
  }
  return (
    <Row>
      Explicity wants demos
      <Switch onChange={handleChange} checked={props.label.acceptDemos} size='small' />
    </Row>
  )
}

const Row = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
