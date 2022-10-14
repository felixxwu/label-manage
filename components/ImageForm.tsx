import { Avatar, IconButton } from '@mui/material'
import { Label, Store } from '../utils/types'
import { updateDocTyped } from '../utils/db'
import ClearIcon from '@mui/icons-material/Clear'
import { consts } from '../utils/consts'
import { theme } from '../utils/theme'
import EditIcon from '@mui/icons-material/Edit'
import { PasteSearchPopup } from './PasteSearchPopup'
import { useState } from 'react'

export function ImageForm(props: { label: Label; store: Store }) {
    const [open, setOpen] = useState(false)

    function handleSearch() {
        const link = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(props.label.name + ' logo')
        window.open(link, '_blank').focus()
    }

    async function handlePaste() {
        try {
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
                setOpen(false)
            }
        } catch (e) {
            alert('Image paste failed')
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
                    <div onClick={() => setOpen(true)}>
                        <Avatar
                            sx={{
                                width: consts.labelAvatarSize,
                                height: consts.labelAvatarSize,
                                cursor: 'pointer',
                                bgcolor: theme.palette.secondary.main,
                                color: theme.palette.primary.main,
                            }}
                        >
                            <EditIcon />
                        </Avatar>
                    </div>
                </>
            )}

            <PasteSearchPopup {...{ open, setOpen, handlePaste, handleSearch, useGoogleIcon: true }} />

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
