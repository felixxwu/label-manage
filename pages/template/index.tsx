import styled from '@emotion/styled'
import { Header } from '../../components/Header'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Template } from '../../components/Template'

export default () => {
  async function handleBack() {
    window.history.back()
  }

  return (
    <Wrapper>
      <Header
        left={
          <IconButton onClick={handleBack}>
            <ArrowBackIcon color='primary' />
          </IconButton>
        }
      >
        <h1>Template</h1>
      </Header>
      <Template />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: auto;
`
