import styled from '@emotion/styled'
import { updateDocTyped } from '../../utils/db'
import { load } from '../../utils/load'
import { scrape } from '../../utils/scrape'
import { store } from '../../utils/store'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'
import { ClearButton } from '../buttons/ClearButton'
import { EditButton } from '../buttons/EditButton'
import { LinkOrEmail } from '../LinkOrEmail'

export function LinkForm(props: { label: Label }) {
    function handleClear() {
        updateDocTyped(props.label.id, { link: '' })
    }

    async function handleSearch() {
        const result = await load(
            scrape,
            `https://www.google.com/search?q=` +
                encodeURIComponent('site:soundcloud.com ' + props.label.name)
        )
        const links = Array.from(result.querySelector('#main').querySelectorAll('a'))
            .map(a => a.href)
            .filter(href => href.includes('https://soundcloud.com/'))
            .map(
                url =>
                    'https://soundcloud.com/' +
                    decodeURIComponent(url).split('https://soundcloud.com/')[1].split('&')[0]
            )

        store().dialog = {
            actions: [{ label: 'Close' }],
            message: 'Choose SoundCloud Link',
            multiselect: {
                choices: links,
                onChoose: choice => {
                    load(updateDocTyped, props.label.id, { link: choice })
                },
            },
        }
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
                    <EditButton onClick={handleSearch} />
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
