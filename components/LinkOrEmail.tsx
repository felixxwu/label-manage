import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import { consts } from '../utils/consts'
import { Label, Store } from '../utils/types'
import LaunchIcon from '@mui/icons-material/Launch'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { useShortLoad } from '../utils/useShortLoad'
import { updateDocTyped } from '../utils/db'
import GoogleIcon from '@mui/icons-material/Google'
import ClearIcon from '@mui/icons-material/Backspace'
import { theme } from '../utils/theme'

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
    const [searchLoading, loadSearch] = useShortLoad()
    const [pasteLoading, loadPaste] = useShortLoad()

    async function handleSearch() {
        await loadSearch()
        window.open(props.searchUrl, '_blank').focus()
    }

    async function handlePaste() {
        await loadPaste()
        const text = await navigator.clipboard.readText()
        updateDocTyped(props.store.db, props.label.id, { [props.dbKey]: text })

        // if (props.type === 'link') {
        //     const regex =
        //         /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

        //     const results = (await navigator.clipboard.readText()).match(regex)
        //     if (!results || results.length === 0) return
        //     const link = results[0].split('?')[0]
        //     updateDocTyped(props.store.db, props.label.id, { [props.dbKey]: link })
        // }

        // if (props.type === 'email') {
        //     const email = await navigator.clipboard.readText()
        //     updateDocTyped(props.store.db, props.label.id, { [props.dbKey]: email })
        // }
    }

    function handleClear() {
        updateDocTyped(props.store.db, props.label.id, { [props.dbKey]: '' })
    }

    return (
        <div className='link-form'>
            {props.label[props.dbKey] ? (
                <>
                    {props.label[props.dbKey].includes('@') ? (
                        <a className='link' href={'mailto:' + props.label[props.dbKey]} target='_blank'>
                            {props.label[props.dbKey]}
                        </a>
                    ) : (
                        <a className='link' href={props.label[props.dbKey]} target='_blank'>
                            {props.label[props.dbKey]}
                        </a>
                    )}

                    <Button onClick={handleClear} color='secondary' variant='contained' startIcon={<ClearIcon />}>
                        Clear
                    </Button>
                </>
            ) : (
                <>
                    {props.prompt}
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
                    {props.searchUrl && (
                        <LoadingButton
                            variant='contained'
                            color='secondary'
                            sx={{ height: 'min-content' }}
                            startIcon={props.useGoogleIcon ? <GoogleIcon /> : <LaunchIcon />}
                            onClick={handleSearch}
                            loading={searchLoading}
                        >
                            Search
                        </LoadingButton>
                    )}
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
