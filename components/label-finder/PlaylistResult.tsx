import styled from '@emotion/styled'
import { Accordion, AccordionSummary, AccordionDetails, Avatar, IconButton } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteIcon from '@mui/icons-material/Delete'
import { theme } from '../../utils/theme'
import { PlaylistResult as PlaylistResultType } from './types'
import { AlbumsTable } from './AlbumsTable'
import { store } from '../../utils/store'
import { STORAGE_KEY } from './utils'

interface PlaylistResultProps {
  result: PlaylistResultType
  accordionKey: string
}

export function PlaylistResult({ result, accordionKey }: PlaylistResultProps) {
  const expanded = store().expandedAccordion === accordionKey

  function handleChange(_: React.SyntheticEvent, isExpanded: boolean) {
    store().expandedAccordion = isExpanded ? accordionKey : false
  }

  function handleDelete(e: React.MouseEvent) {
    e.stopPropagation() // Prevent accordion from toggling when clicking delete
    // Remove the playlist from store
    store().playlistResults = store().playlistResults.filter(
      r => r.playlistId !== result.playlistId
    )
    // Update localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store().playlistResults))
      store().snackbar = 'Playlist deleted'
    } catch (error) {
      store().snackbar = 'Error deleting playlist from local storage'
      console.error('Error deleting from localStorage:', error)
    }
    // Close accordion if it was expanded
    if (expanded) {
      store().expandedAccordion = false
    }
  }

  return (
    <PlaylistAccordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionTitleContent>
          {result.playlistImage && (
            <Avatar src={result.playlistImage} sx={{ width: 40, height: 40, mr: 1 }} />
          )}
          {result.playlistName}
          <IconButton
            size='small'
            onClick={handleDelete}
            sx={{ ml: 'auto', color: theme.palette.error.main }}
            aria-label='Delete playlist'
          >
            <DeleteIcon fontSize='small' />
          </IconButton>
        </AccordionTitleContent>
      </AccordionSummary>
      <StyledAccordionDetails>
        <AlbumsTable albums={result.albums} />
      </StyledAccordionDetails>
    </PlaylistAccordion>
  )
}

const PlaylistAccordion = styled(Accordion)`
  width: 100%;
  background-color: ${theme.palette.secondary.main};
`

const StyledAccordionDetails = styled(AccordionDetails)`
  padding-left: 0;
  padding-right: 0;
`

const AccordionTitleContent = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`
