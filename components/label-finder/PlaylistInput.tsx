import styled from '@emotion/styled'
import { TextField, Button, CircularProgress } from '@mui/material'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { store } from '../../utils/store'
import { STORAGE_KEY, extractPlaylistId } from './utils'

export function PlaylistInput() {
  const playlistLink = store().playlistLink
  const loading = store().playlistLoading
  const isValidLink = extractPlaylistId(playlistLink) !== null
  const isSubmitDisabled = !isValidLink || loading

  function handlePlaylistLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
    store().playlistLink = e.target.value
  }

  async function handlePasteFromClipboard() {
    try {
      const text = await navigator.clipboard.readText()
      store().playlistLink = text
    } catch (err) {
      store().snackbar = 'Failed to read from clipboard'
      console.error('Failed to read clipboard:', err)
    }
  }

  async function handleSubmit() {
    const playlistId = extractPlaylistId(store().playlistLink)
    if (!playlistId) {
      store().snackbar = 'Invalid playlist link. Please enter a valid Spotify playlist URL.'
      return
    }

    store().playlistLoading = true
    try {
      const response = await fetch(`/api/getPlaylistTracks?playlist_id=${playlistId}`)

      if (!response.ok) {
        throw new Error(`Failed to fetch playlist: ${response.statusText}`)
      }

      const data = await response.json()

      if (data.albums && data.playlistName) {
        // Extract only essential album data to reduce storage size
        const minimalAlbums = data.albums.map((album: any) => ({
          id: album.id,
          name: album.name,
          artists: album.artists?.map((a: any) => ({ name: a.name })) || [],
          copyrights: album.copyrights?.map((c: any) => ({ text: c.text })) || [],
        }))

        const newResult = {
          playlistName: data.playlistName,
          playlistId: data.playlistId,
          albums: minimalAlbums,
          timestamp: Date.now(),
          playlistImage: data.playlistImage || null,
        }

        // Check if this playlist already exists and replace it, otherwise add it
        const filtered = store().playlistResults.filter(r => r.playlistId !== data.playlistId)
        const updatedResults = [newResult, ...filtered]

        // Limit to 10 most recent playlists to prevent storage quota issues
        const limitedResults = updatedResults.slice(0, 10)
        store().playlistResults = limitedResults

        // Save to localStorage immediately
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedResults))
          // Clear the input after successful submission
          store().playlistLink = ''
        } catch (error) {
          if (error instanceof Error && error.name === 'QuotaExceededError') {
            store().snackbar =
              'Storage quota exceeded. Please remove some playlists to save new ones.'
          } else {
            store().snackbar = 'Error saving playlist results to local storage'
          }
          console.error('Error saving to localStorage:', error)
        }
      } else {
        store().snackbar = 'No albums found in this playlist'
      }
    } catch (error) {
      store().snackbar = error instanceof Error ? error.message : 'Error fetching playlist tracks'
      console.error('Error fetching playlist tracks:', error)
    } finally {
      store().playlistLoading = false
    }
  }

  return (
    <>
      <StyledTextField
        label='Spotify Playlist Link'
        placeholder='Paste Spotify playlist link here...'
        fullWidth
        value={playlistLink}
        onChange={handlePlaylistLinkChange}
        variant='filled'
      />
      <PasteButton
        variant='outlined'
        startIcon={<ContentPasteIcon />}
        onClick={handlePasteFromClipboard}
        fullWidth
      >
        Paste from Clipboard
      </PasteButton>
      <SubmitButton
        variant='contained'
        onClick={handleSubmit}
        fullWidth
        disabled={isSubmitDisabled}
      >
        {loading ? <CircularProgress size={24} color='inherit' /> : 'Get Playlist Tracks'}
      </SubmitButton>
    </>
  )
}

const StyledTextField = styled(TextField)`
  width: 100%;
`

const PasteButton = styled(Button)`
  width: 100%;
`

const SubmitButton = styled(Button)`
  width: 100%;
`

