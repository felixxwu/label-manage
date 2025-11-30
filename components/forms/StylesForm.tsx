import { Label } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { Chips } from '../Chips'
import { StylesSelector } from '../StylesSelector'
import styled from '@emotion/styled'
import MusicNote from '@mui/icons-material/MusicNote'
import { theme } from '../../utils/theme'
import { consts } from '../../utils/consts'
import { Tooltip } from '@mui/material'

export function StylesForm(props: { label: Label }) {
  async function handleDelete(style: string) {
    updateDocTyped(props.label.id, {
      styles: props.label.styles.filter(item => item !== style),
    })
  }

  return (
    <Wrapper
      style={props.label.styles.length ? {} : { backgroundColor: theme.palette.warning.dark }}
    >
      Styles:
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
              onClose={closeDialog}
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
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  background-color: ${theme.palette.secondary.main};
  padding: 10px;
  border-radius: ${consts.borderRadius}px;
`

const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Widgets = styled('div')`
  display: flex;
  align-items: center;
  opacity: 0.5;
`
