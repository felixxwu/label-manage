import { LoadingButton } from '@mui/lab'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { consts } from '../utils/consts'
import { Label, Store } from '../utils/types'
import LaunchIcon from '@mui/icons-material/Launch'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { useShortLoad } from '../utils/useShortLoad'
import { updateDocTyped } from '../utils/db'

export function LinkForm(props: { item: Label; store: Store }) {
    const [searchLoading, loadSearch] = useShortLoad()
    const [pasteLoading, loadPaste] = useShortLoad()

    function handleTextInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        updateDocTyped(props.store.db, props.item.id, { link: e.target.value })
    }

    async function handleSearch() {
        await loadSearch()
        const linkToOpen = 'https://www.google.com/search?q=' + encodeURIComponent(props.item.name + ' soundcloud')
        window.open(linkToOpen, '_blank').focus()
    }

    async function handlePaste() {
        const text = await navigator.clipboard.readText()
        await loadPaste()
        updateDocTyped(props.store.db, props.item.id, { link: text })
    }

    return (
        <div className='link-form'>
            <TextField
                label='Link'
                variant='outlined'
                sx={{ width: '100%', flex: '1' }}
                value={props.item.link}
                autoComplete='off'
                onChange={handleTextInput}
            />
            {!props.item.link && (
                <>
                    <LoadingButton
                        variant='contained'
                        sx={{ height: 'min-content' }}
                        startIcon={<LaunchIcon />}
                        onClick={handleSearch}
                        loading={searchLoading}
                    >
                        Search
                    </LoadingButton>
                    <LoadingButton
                        variant='contained'
                        sx={{ height: 'min-content' }}
                        startIcon={<ContentPasteIcon />}
                        onClick={handlePaste}
                        loading={pasteLoading}
                    >
                        Paste
                    </LoadingButton>
                </>
            )}

            <style jsx>{`
                .link-form {
                    width: 100%;
                    max-width: ${consts.maxAppWidth}px;
                    display: flex;
                    gap: 20px;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}
