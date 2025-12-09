import styled from '@emotion/styled'
import { Header } from '../../components/Header'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useEffect, useState } from 'react'
import { store } from '../../utils/store'
import { STORAGE_KEY } from '../../components/label-finder/utils'
import { PlaylistInput } from '../../components/label-finder/PlaylistInput'
import { PlaylistResult } from '../../components/label-finder/PlaylistResult'

export default () => {
  const [, forceUpdate] = useState({})

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        store().playlistResults = parsed
        forceUpdate({})
      }
    } catch (error) {
      store().snackbar = 'Error loading saved playlists from local storage'
      console.error('Error loading from localStorage:', error)
    }
  }, [])

  // Save to localStorage whenever playlistResults changes
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store().playlistResults))
      } catch (error) {
        store().snackbar = 'Error saving playlists to local storage'
        console.error('Error saving to localStorage:', error)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

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
        <h1>Label Finder</h1>
      </Header>
      <Content>
        <PlaylistInput />

        {store().playlistResults.map(result => {
          const accordionKey = `${result.playlistId}-${result.timestamp}`
          return <PlaylistResult key={accordionKey} result={result} accordionKey={accordionKey} />
        })}
      </Content>
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

const Content = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
