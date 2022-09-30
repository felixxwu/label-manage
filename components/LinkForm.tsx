import { LoadingButton } from '@mui/lab'
import { IconButton, TextField } from '@mui/material'
import { consts } from '../utils/consts'
import { Label, Store } from '../utils/types'
import LaunchIcon from '@mui/icons-material/Launch'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { useShortLoad } from '../utils/useShortLoad'
import { updateDocTyped } from '../utils/db'
import GoogleIcon from '@mui/icons-material/Google'

export function LinkForm(props: { label: Label; store: Store }) {
    const [searchLoading, loadSearch] = useShortLoad()
    const [pasteLoading, loadPaste] = useShortLoad()

    function handleTextInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        updateDocTyped(props.store.db, props.label.id, { link: e.target.value })
    }

    async function handleSearch() {
        await loadSearch()
        const linkToOpen = 'https://www.google.com/search?q=' + encodeURIComponent(props.label.name + ' soundcloud')
        window.open(linkToOpen, '_blank').focus()
    }

    async function handlePaste() {
        const regex =
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

        const text = (await navigator.clipboard.readText()).match(regex)[0].split('?')[0]
        await loadPaste()
        updateDocTyped(props.store.db, props.label.id, { link: text })
    }

    function handlLaunch() {
        window.open(props.label.link, '_blank').focus()
    }

    return (
        <div className='link-form'>
            <TextField
                label='Link'
                variant='outlined'
                sx={{ width: '100%', flex: '1' }}
                value={props.label.link}
                autoComplete='off'
                onChange={handleTextInput}
            />
            {props.label.link ? (
                <IconButton onClick={handlLaunch}>
                    <LaunchIcon />
                </IconButton>
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
