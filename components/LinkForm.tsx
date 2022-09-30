import { LoadingButton } from '@mui/lab'
import { IconButton, TextField } from '@mui/material'
import { consts } from '../utils/consts'
import { Label, Store } from '../utils/types'
import LaunchIcon from '@mui/icons-material/Launch'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { useShortLoad } from '../utils/useShortLoad'
import { updateDocTyped } from '../utils/db'
import GoogleIcon from '@mui/icons-material/Google'
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from 'react'

export function LinkForm(props: { label: Label; store: Store }) {
    const [link, setLink] = useState(props.label.link)
    const [searchLoading, loadSearch] = useShortLoad()
    const [pasteLoading, loadPaste] = useShortLoad()

    function handleTextInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setLink(e.target.value)
        updateDocTyped(props.store.db, props.label.id, { link: e.target.value })
    }

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
        setLink(text)
        updateDocTyped(props.store.db, props.label.id, { link: text })
    }

    function handlLaunch() {
        window.open(link, '_blank').focus()
    }

    function handleClear() {
        setLink('')
        updateDocTyped(props.store.db, props.label.id, { link: '' })
    }

    return (
        <div className='link-form'>
            <TextField
                label='Link'
                variant='outlined'
                sx={{ width: '100%', flex: '1' }}
                value={link}
                autoComplete='off'
                onChange={handleTextInput}
            />
            {link ? (
                <div>
                    <IconButton onClick={handlLaunch}>
                        <LaunchIcon />
                    </IconButton>
                    <IconButton onClick={handleClear}>
                        <ClearIcon />
                    </IconButton>
                </div>
            ) : (
                <>
                    <LoadingButton
                        variant='contained'
                        sx={{ height: 'min-content' }}
                        startIcon={<GoogleIcon />}
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
