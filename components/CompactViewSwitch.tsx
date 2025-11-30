import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { consts } from '../utils/consts'
import { updateDocTyped } from '../utils/db'
import { store } from '../utils/store'
import styled from '@emotion/styled'
import { Visibility } from '@mui/icons-material'

export function CompactViewSwitch() {
  const compact = store().extra.compact

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: boolean | null) => {
    if (newAlignment !== null) {
      updateDocTyped(consts.dbExtraId, { compact: newAlignment })
    }
  }

  return (
    <Wrapper>
      <ToggleButtonGroup
        value={compact}
        exclusive
        onChange={handleChange}
        aria-label='view density'
        size='small'
      >
        <ToggleButton value={true} aria-label='compact'>
          Compact
        </ToggleButton>
        <ToggleButton value={false} aria-label='comfortable'>
          Detailed
        </ToggleButton>
      </ToggleButtonGroup>
      <Visibility />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
