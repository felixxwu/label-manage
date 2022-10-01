import { LoadingButton } from '@mui/lab'
import { Button, ButtonGroup, IconButton, TextField } from '@mui/material'
import { consts } from '../utils/consts'
import { Label, Store } from '../utils/types'
import LaunchIcon from '@mui/icons-material/Launch'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { useShortLoad } from '../utils/useShortLoad'
import { updateDocTyped } from '../utils/db'
import GoogleIcon from '@mui/icons-material/Google'
import ClearIcon from '@mui/icons-material/Backspace'
import { useState } from 'react'
import { theme } from '../utils/theme'

export function LinkForm(props: { label: Label; store: Store }) {
    const [searchLoading, loadSearch] = useShortLoad()
    const [pasteLoading, loadPaste] = useShortLoad()

    async function handleSearch() {
        await loadSearch()
        const linkToOpen = 'https://www.google.com/search?q=' + encodeURIComponent(props.label.name + ' soundcloud')
        window.open(linkToOpen, '_blank').focus()
    }

    async function handlePaste() {
        await loadPaste()

        const regex =
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

        const results = (await navigator.clipboard.readText()).match(regex)
        if (!results || results.length === 0) return
        const text = results[0].split('?')[0]
        updateDocTyped(props.store.db, props.label.id, { link: text })
    }

    function handleClear() {
        updateDocTyped(props.store.db, props.label.id, { link: '' })
    }

    return (
        <div className='link-form'>
            {props.label.link ? (
                <>
                    <a className='link' href={props.label.link} target='_blank'>
                        {props.label.link}
                    </a>
                    <Button onClick={handleClear} color='secondary' variant='contained' startIcon={<ClearIcon />}>
                        Clear
                    </Button>
                </>
            ) : (
                <>
                    Link:
                    <LoadingButton
                        variant='contained'
                        color='secondary'
                        sx={{ height: 'min-content' }}
                        startIcon={<ContentPasteIcon />}
                        onClick={handlePaste}
                        loading={pasteLoading}
                    >
                        Paste
                    </LoadingButton>
                    <LoadingButton
                        variant='contained'
                        color='secondary'
                        sx={{ height: 'min-content' }}
                        startIcon={<GoogleIcon />}
                        onClick={handleSearch}
                        loading={searchLoading}
                    >
                        Search
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

                .link {
                    color: ${theme.palette.primary.main};
                    flex: 1;
                    word-break: break-all;
                }
            `}</style>
        </div>
    )
}
