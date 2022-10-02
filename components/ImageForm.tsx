import { Avatar, IconButton } from '@mui/material'
import { Label, Store } from '../utils/types'
import AddIcon from '@mui/icons-material/Add'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { updateDocTyped } from '../utils/db'
import ClearIcon from '@mui/icons-material/Clear'
import { consts } from '../utils/consts'
import GoogleIcon from '@mui/icons-material/Google'
import { theme } from '../utils/theme'

export function ImageForm(props: { label: Label; store: Store }) {
    function searchImage() {
        const link = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(props.label.name + ' logo')
        window.open(link, '_blank').focus()
    }

    async function handlePaste() {
        const list = await navigator.clipboard.read()
        let image_type
        const item = list.find(item =>
            item.types.some(type => {
                if (type.startsWith('image/')) {
                    image_type = type
                    return true
                }
            })
        )
        const file = item && (await item.getType(image_type))
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function () {
            const base64data = reader.result
            updateDocTyped(props.store.db, props.label.id, { image: base64data.toString() })
        }
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
                    <div onClick={handlePaste}>
                        <Avatar
                            sx={{
                                width: consts.labelAvatarSize,
                                height: consts.labelAvatarSize,
                                cursor: 'pointer',
                                bgcolor: theme.palette.secondary.main,
                                color: theme.palette.primary.main,
                            }}
                        >
                            <ContentPasteIcon />
                        </Avatar>
                    </div>
                    <IconButton onClick={searchImage}>
                        <GoogleIcon />
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
