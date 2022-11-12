import { Avatar } from '@mui/material'
import { Label } from '../../utils/types'
import { updateDocTyped } from '../../utils/db'
import { consts } from '../../utils/consts'
import { theme } from '../../utils/theme'
import EditIcon from '@mui/icons-material/Edit'
import { PasteSearchPopup } from '../PasteSearchPopup'
import { useState } from 'react'
import { store } from '../../utils/store'
import styled from '@emotion/styled'

export function ImageForm(props: { label: Label }) {
    const [open, setOpen] = useState(false)

    function handleSearch() {
        const link =
            'https://www.google.com/search?tbm=isch&q=' +
            encodeURIComponent(props.label.name + ' logo')
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
                updateDocTyped(store().db, props.label.id, { image: base64data.toString() })
                setOpen(false)
            }
        } catch (e) {
            alert('Image paste failed')
        }
    }

    function handleClear() {
        store().dialog = {
            message: 'Are you sure you want to delete the image?',
            actions: [
                { label: 'No' },
                {
                    label: 'Delete',
                    callback: () => updateDocTyped(store().db, props.label.id, { image: '' }),
                },
            ],
        }
    }

    return (
        <Wrapper>
            {props.label.image ? (
                <>
                    <div onClick={handleClear}>
                        <Avatar
                            src={props.label.image}
                            sx={{ width: consts.labelAvatarSize, height: consts.labelAvatarSize }}
                        />
                    </div>
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
                            <EditIcon color='primary' />
                        </Avatar>
                    </div>
                </>
            )}

            <PasteSearchPopup
                {...{ open, setOpen, handlePaste, handleSearch, useGoogleIcon: true }}
            />
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    display: flex;
    align-items: center;
    gap: 20px;
`
