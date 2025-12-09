import styled from '@emotion/styled'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { theme } from '../../utils/theme'

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
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Artist</StyledTableCell>
            <StyledTableCell>Album Name</StyledTableCell>
            <StyledTableCell>Copyrights</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albums.map((album, albumIndex) => {
            const artists = album.artists?.map(a => a.name).join(', ') || 'Unknown'
            const albumName = album.name || 'Unknown'
            const copyrights = album.copyrights?.[0]?.text || 'No copyright info'

            return (
              <StyledTableRow key={`${album.id}-${albumIndex}`} index={albumIndex}>
                <StyledTableCell>{artists}</StyledTableCell>
                <StyledTableCell>{albumName}</StyledTableCell>
                <SelectableTableCell>{copyrights}</SelectableTableCell>
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

