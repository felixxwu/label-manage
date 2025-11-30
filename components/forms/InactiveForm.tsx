import { FormControlLabel, Switch } from '@mui/material'
import { updateDocTyped } from '../../utils/db'
import { Label } from '../../utils/types'
import styled from '@emotion/styled'

export function InactiveForm(props: { label: Label }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateDocTyped(props.label.id, { inactive: event.target.checked })
  }
  return (
    <Wrapper>
      Do not submit
      <Switch onChange={handleChange} checked={props.label.inactive} size='small' />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 5px 0;
`
