import styled from '@emotion/styled'
import { updateDocTyped } from '../../utils/db'
import { load } from '../../utils/load'
import { scrapeSoundCloudProfile, searchSoundCloudLinks } from '../../utils/scrape'
import { store } from '../../utils/store'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'
import { ClearButton } from '../buttons/ClearButton'
import { EditButton } from '../buttons/EditButton'

export function LinkForm(props: { label: Label }) {
    function handleClear() {
        updateDocTyped(props.label.id, { link: '' })
    }

    async function handleSearch() {
        const links = await searchSoundCloudLinks(props.label.name)

        store().dialog = {
            actions: [{ label: 'Close' }],
            message: 'Choose SoundCloud Link',
            multiselect: {
                choices: links,
                onChoose: setLink,
            },
        }
    }

    async function setLink(link: string) {
        const res = await scrapeSoundCloudProfile(link)
        await load(updateDocTyped, props.label.id, {
            link,
            ...(res.profile ? { image: res.profile.image } : {}),
            ...(res.profile ? { followers: res.profile.followers } : {}),
            ...(res.tracks.recent
                ? {
                      lastUploaded: res.tracks.recent.reduce((prev, curr) =>
                          new Date(prev.published) > new Date(curr.published) ? prev : curr
                      ).published,
                  }
                : {}),
        })
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
