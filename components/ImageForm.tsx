import { Avatar, IconButton } from '@mui/material'
import { Label, Store } from '../utils/types'
import AddIcon from '@mui/icons-material/Add'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { updateDocTyped } from '../utils/db'
import ClearIcon from '@mui/icons-material/Clear'
import { consts } from '../utils/consts'

export function ImageForm(props: { label: Label; store: Store }) {
    function searchImage() {
        const link = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(props.label.name + ' logo')
        window.open(link, '_blank').focus()
    }

    async function handlePaste() {
        const url = await navigator.clipboard.readText()
        if (!url) return
        updateDocTyped(props.store.db, props.label.id, { image: url })
    }

    function handleClear() {
        updateDocTyped(props.store.db, props.label.id, { image: '' })
    }

    return (
        <div className='label-image'>
            {props.label.image ? (
                <>
                    <Avatar
                        src={props.label.image}
                        sx={{ width: consts.labelAvatarSize, height: consts.labelAvatarSize }}
                    />
                    <IconButton onClick={handleClear}>
                        <ClearIcon />
                    </IconButton>
                </>
            ) : (
                <>
                    <div onClick={searchImage}>
                        <Avatar
                            sx={{ width: consts.labelAvatarSize, height: consts.labelAvatarSize, cursor: 'pointer' }}
                        >
                            <AddIcon />
                        </Avatar>
                    </div>
                    <IconButton onClick={handlePaste}>
                        <ContentPasteIcon />
                    </IconButton>
                </>
            )}

            <style jsx>{`
                .label-image {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
            `}</style>
        </div>
    )
}
