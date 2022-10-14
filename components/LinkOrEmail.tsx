import { Label, Store } from '../utils/types'
import { updateDocTyped } from '../utils/db'
import { theme } from '../utils/theme'
import { EditButton } from './EditButton'
import { useState } from 'react'
import { ClearButton } from './ClearButton'
import { PasteSearchPopup } from './PasteSearchPopup'

type StringOnlyKeys<T extends Label> = {
    [K in keyof T]: T[K] extends String ? K : never
}[keyof T]

export function LinkOrEmail(props: {
    label: Label
    store: Store
    searchUrl: string
    dbKey: StringOnlyKeys<Label>
    useGoogleIcon: boolean
    prompt: string
}) {
    const [open, setOpen] = useState(false)

    async function handleSearch() {
        window.open(props.searchUrl, '_blank').focus()
    }

    async function handlePaste() {
        const text = await navigator.clipboard.readText()
        setOpen(false)
        updateDocTyped(props.store.db, props.label.id, { [props.dbKey]: text })
    }

    function handleClear() {
        updateDocTyped(props.store.db, props.label.id, { [props.dbKey]: '' })
    }

    const value = props.label[props.dbKey]

    return (
        <div className='link-form'>
            {value ? (
                <>
                    {value.includes('@') ? (
                        <a className='link' href={'mailto:' + value} target='_blank'>
                            {value}
                        </a>
                    ) : (
                        <a className='link' href={value} target='_blank'>
                            {value}
                        </a>
                    )}
                    <ClearButton onClick={handleClear} secondary />
                </>
            ) : (
                <>
                    <div style={{ opacity: 0.5 }}>{props.prompt}</div>
                    <EditButton onClick={() => setOpen(true)} />
                </>
            )}

            <PasteSearchPopup {...{ open, setOpen, handlePaste, handleSearch, useGoogleIcon: props.useGoogleIcon }} />

            <style jsx>{`
                .link-form {
                    width: 100%;
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    justify-content: space-between;
                }

                .link {
                    color: ${theme.palette.primary.main};
                    flex: 1;
                    word-break: break-all;
                }
            `}</style>
        </div>
    )
}
