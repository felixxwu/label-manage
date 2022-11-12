import { Dialog } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import GoogleIcon from '@mui/icons-material/Google'
import styled from '@emotion/styled'

export function PasteSearchPopup(props: {
    open: boolean
    setOpen: (state: boolean) => void
    handlePaste: () => void
    handleSearch: () => void
    useGoogleIcon: boolean
}) {
    async function handlePaste() {
        props.handlePaste()
    }

    async function handleSearch() {
        props.handleSearch()
    }

    return (
        <Dialog open={props.open} onClose={() => props.setOpen(false)}>
            <Choices>
                <Choice onClick={handlePaste}>
                    <ContentPasteIcon color='primary' />
                    Paste
                </Choice>
                <Choice onClick={handleSearch}>
                    {props.useGoogleIcon ? (
                        <GoogleIcon color='primary' />
                    ) : (
                        <LaunchIcon color='primary' />
                    )}
                    Search
                </Choice>
            </Choices>
        </Dialog>
    )
}

const Choices = styled('div')`
    display: flex;
`

const Choice = styled('div')`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`
