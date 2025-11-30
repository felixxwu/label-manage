import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { store } from '../utils/store'
import { SortType } from '../utils/types'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import styled from '@emotion/styled'

export function Sort() {
  const handleChange = (_: React.MouseEvent<HTMLElement>, value: SortType) => {
    store().sort = value
  }

  return (
    <Wrapper>
      <SwapVertIcon />
      <ToggleButtonGroup value={store().sort} exclusive onChange={handleChange} size='small'>
        <ToggleButton value={'follower' as SortType} size='small'>
          Followers
        </ToggleButton>
        <ToggleButton value={'popularity' as SortType} size='small'>
          Popularity
        </ToggleButton>
        <ToggleButton value={'name' as SortType} size='small'>
          Name
        </ToggleButton>
      </ToggleButtonGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
