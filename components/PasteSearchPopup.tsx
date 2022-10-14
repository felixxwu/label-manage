import { CircularProgress, Dialog } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import GoogleIcon from '@mui/icons-material/Google'
import { useShortLoad } from '../utils/useShortLoad'

export function PasteSearchPopup(props: {
    open: boolean
    setOpen: (state: boolean) => void
    handlePaste: () => void
    handleSearch: () => void
    useGoogleIcon: boolean
}) {
    const [pasteLoading, loadPaste] = useShortLoad()
    const [searchLoading, searchPaste] = useShortLoad()

    async function handlePaste() {
        await loadPaste()
        props.handlePaste()
    }

    async function handleSearch() {
        await searchPaste()
        props.handleSearch()
    }

    return (
        <Dialog open={props.open} onClose={() => props.setOpen(false)}>
            <div className='choices'>
                <div className='choice' onClick={handlePaste}>
                    {pasteLoading ? (
                        <CircularProgress />
                    ) : (
                        <>
                            <ContentPasteIcon />
                            Paste
                        </>
                    )}
                </div>
                <div className='choice' onClick={handleSearch}>
                    {searchLoading ? (
                        <CircularProgress />
                    ) : (
                        <>
                            {props.useGoogleIcon ? <GoogleIcon /> : <LaunchIcon />}
                            Search
                        </>
                    )}
                </div>
            </div>

            <style jsx>{`
                .choices {
                    display: flex;
                }

                .choice {
                    width: 200px;
                    height: 200px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;

                    cursor: pointer;
                }

                .choice:hover {
                    background-color: rgba(0, 0, 0, 0.05);
                }
            `}</style>
        </Dialog>
    )
}
