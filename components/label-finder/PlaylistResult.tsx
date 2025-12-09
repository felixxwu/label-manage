import styled from '@emotion/styled'
import { Accordion, AccordionSummary, AccordionDetails, Avatar } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { theme } from '../../utils/theme'
import { PlaylistResult as PlaylistResultType } from './types'
import { AlbumsTable } from './AlbumsTable'
import { store } from '../../utils/store'

interface PlaylistResultProps {
  result: PlaylistResultType
  accordionKey: string
}

export function PlaylistResult({ result, accordionKey }: PlaylistResultProps) {
  const expanded = store().expandedAccordion === accordionKey

  function handleChange(_: React.SyntheticEvent, isExpanded: boolean) {
    store().expandedAccordion = isExpanded ? accordionKey : false
  }

  return (
    <PlaylistAccordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionTitleContent>
          {result.playlistImage && (
            <Avatar src={result.playlistImage} sx={{ width: 40, height: 40, mr: 1 }} />
          )}
          {result.playlistName}
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
`
