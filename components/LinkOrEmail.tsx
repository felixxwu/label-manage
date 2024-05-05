import { Label } from '../utils/types'
import { updateDocTyped } from '../utils/db'
import { theme } from '../utils/theme'
import { EditButton } from './buttons/EditButton'
import { useState } from 'react'
import { ClearButton } from './buttons/ClearButton'
import { PasteSearchPopup } from './popups/PasteSearchPopup'
import styled from '@emotion/styled'

type StringOnlyKeys<T extends Label> = {
  [K in keyof T]: T[K] extends String ? K : never
}[keyof T]

export function LinkOrEmail(props: {
  label: Label
  searchUrl: string
  dbKey: StringOnlyKeys<Label>
  useGoogleIcon: boolean
  prompt: string
}) {
  const [open, setOpen] = useState(false)

  async function handleSearch() {
    window.open(props.searchUrl, '_blank')?.focus()
  }

  async function handlePaste() {
    const clipbaord = await navigator.clipboard.readText()
    if (clipbaord.includes('@')) {
      updateDocTyped(props.label.id, { [props.dbKey]: clipbaord })
    } else {
      const regex =
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

      const results = clipbaord.match(regex)
      if (!results || results.length === 0) return
      const link = results[0].split('?')[0]
      updateDocTyped(props.label.id, { [props.dbKey]: link })
    }

    setOpen(false)
  }

  function handleClear() {
    updateDocTyped(props.label.id, { [props.dbKey]: '' })
  }

  const value = props.label[props.dbKey]

  return (
    <Wrapper>
      {value ? (
        <>
          {value.includes('@') ? (
            <Link href={'mailto:' + value} target='_blank'>
              {value}
            </Link>
          ) : (
            <Link href={value} target='_blank'>
              {value}
            </Link>
          )}
          <ClearButton onClick={handleClear} secondary />
        </>
      ) : (
        <>
          <div style={{ opacity: 0.5 }}>{props.prompt}</div>
          <EditButton onClick={() => setOpen(true)} />
        </>
      )}

      <PasteSearchPopup
        {...{
          open,
          prompt: props.prompt,
          setOpen,
          handlePaste,
          handleSearch,
          useGoogleIcon: props.useGoogleIcon,
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`

const Link = styled('a')`
  color: ${theme.palette.primary.main};
  flex: 1;
  word-break: break-all;
`
