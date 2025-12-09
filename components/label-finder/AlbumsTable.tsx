import styled from '@emotion/styled'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { theme } from '../../utils/theme'
import { useRouter } from 'next/router'
import { store } from '../../utils/store'
import { createNewLabelDialog } from '../../utils/labelDialog'
import { findMatchingLabel } from '../../utils/fuzzyMatch'

interface Album {
  id: string
  artists?: Array<{ name: string }>
  name?: string
  copyrights?: Array<{ text: string }>
}

interface AlbumsTableProps {
  albums: Album[]
}

export function AlbumsTable({ albums }: AlbumsTableProps) {
  const router = useRouter()
  const { db } = store()

  function handleAddLabel(copyrights: string) {
    if (!db) return
    store().dialog = createNewLabelDialog(router, db, copyrights)
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Artist - Album</StyledTableCell>
            <StyledTableCell>Copyrights</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albums.map((album, albumIndex) => {
            const artists = album.artists?.map(a => a.name).join(', ') || 'Unknown'
            const albumName = album.name || 'Unknown'
            const artistAlbum = `${artists} - ${albumName}`
            const copyrights = album.copyrights?.[0]?.text || 'No copyright info'
            const matchingLabel = findMatchingLabel(copyrights, 0.6)

            return (
              <StyledTableRow key={`${album.id}-${albumIndex}`} index={albumIndex}>
                <StyledTableCell>{artistAlbum}</StyledTableCell>
                <SelectableTableCell>
                  <CopyrightsContent>
                    {copyrights}
                    {matchingLabel && (
                      <Tooltip
                        title={`Matches existing label: "${matchingLabel.label}"`}
                        placement='right'
                      >
                        <CheckCircleIcon
                          fontSize='small'
                          sx={{ color: theme.palette.success.main, ml: 1 }}
                        />
                      </Tooltip>
                    )}
                  </CopyrightsContent>
                </SelectableTableCell>
                <StyledTableCell>
                  <IconButton
                    size='small'
                    color='primary'
                    onClick={() => handleAddLabel(copyrights)}
                  >
                    <AddIcon fontSize='small' />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const StyledTableCell = styled(TableCell)`
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: none;
`

const SelectableTableCell = styled(TableCell)`
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: none;
  user-select: text;
`

const StyledTableRow = styled(TableRow)<{ index: number }>`
  background-color: ${({ index }) =>
    index % 2 === 0 ? theme.palette.secondary.main : 'transparent'};
`

const CopyrightsContent = styled('div')`
  display: flex;
  align-items: center;
`
