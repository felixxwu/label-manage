import { Label } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { Chips } from '../Chips'
import { StylesSelector } from '../StylesSelector'
import styled from '@emotion/styled'
import MusicNote from '@mui/icons-material/MusicNote'

export function StylesForm(props: { label: Label }) {
  async function handleDelete(style: string) {
    updateDocTyped(props.label.id, {
      styles: props.label.styles.filter(item => item !== style),
    })
  }

  return (
    <Wrapper>
      <Header>
        <div>Styles:</div>
        <Widgets>
          {props.label.tracks.popular.length +
            props.label.tracks.recent.length +
            props.label.tracks.reposts.length}
          <MusicNote fontSize='small' />
        </Widgets>
      </Header>
      <Chips
        colorful
        chips={props.label.styles}
        onDelete={handleDelete}
        addDialog={({ closeDialog }) => {
          async function handleStyleSelection(styles: string[]) {
            updateDocTyped(props.label.id, {
              styles: props.label.styles.concat(...styles),
            })
            closeDialog()
          }

          return (
            <StylesSelector
              onSelectStyle={handleStyleSelection}
              ignore={props.label.styles}
              label={props.label}
            />
          )
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Widgets = styled('div')`
  display: flex;
  align-items: center;
`
