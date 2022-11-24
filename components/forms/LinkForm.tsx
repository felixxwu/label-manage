import styled from '@emotion/styled'
import { updateDocTyped } from '../../utils/db'
import { searchForLinks } from '../../utils/searchForLinks'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'
import { ClearButton } from '../buttons/ClearButton'
import { EditButton } from '../buttons/EditButton'

export function LinkForm(props: { label: Label }) {
    function handleClear() {
        updateDocTyped(props.label.id, { link: '' })
    }

    return (
        <Wrapper>
            {props.label.link ? (
                <>
                    <Link href={props.label.link} target='_blank'>
                        {props.label.link}
                    </Link>

                    <ClearButton onClick={handleClear} secondary />
                </>
            ) : (
                <>
                    <div style={{ opacity: 0.5 }}>SoundCloud Link</div>
                    <EditButton onClick={() => searchForLinks(props.label)} />
                </>
            )}
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
`

const Link = styled('a')`
    color: ${theme.palette.primary.main};
    flex: 1;
    word-break: break-all;
`
