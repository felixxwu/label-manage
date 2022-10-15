import { Label } from '../utils/types'
import { updateDocTyped } from '../utils/db'
import { theme } from '../utils/theme'
import { EditButton } from './EditButton'
import { useState } from 'react'
import { ClearButton } from './ClearButton'
import { PasteSearchPopup } from './PasteSearchPopup'
import { Store } from '../utils/store'

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
        if (value.includes('@')) {
            const email = await navigator.clipboard.readText()
            updateDocTyped(props.store.db, props.label.id, { [props.dbKey]: email })
        } else {
            const regex =
                /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

            const results = (await navigator.clipboard.readText()).match(regex)
            if (!results || results.length === 0) return
            console.log(`results[0]`, results[0])
            const link = results[0].split('?')[0]
            console.log(`link`, link)
            updateDocTyped(props.store.db, props.label.id, { [props.dbKey]: link })
        }

        setOpen(false)
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
