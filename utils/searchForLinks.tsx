import { Avatar } from '@mui/material'
import { updateDocTyped } from './db'
import { load } from './load'
import { nFormatter } from './nFormatter'
import { scrape, searchSoundCloudLinks, updateProfile } from './scrape'
import { store } from './store'
import { Label } from './types'

export async function searchForLinks(label: Label) {
  try {
    const links = await searchSoundCloudLinks(label.name)

    // Scrape each link for follower count. These run concurrently, so they're wrapped in a
    // single load() call rather than one each - load() tracks loading state with a plain
    // boolean, and the first of several concurrent calls to finish would otherwise clear it
    // while the rest are still in flight.
    const linksWithFollowers = await load(() =>
      Promise.all(
        links.map(async partialLink => {
          try {
            const fullUrl = 'https://soundcloud.com' + partialLink
            const scraped = await scrape(fullUrl)
            const followerMeta = scraped.querySelector(
              'meta[property="soundcloud:follower_count"]'
            )
            const followers = followerMeta
              ? parseInt(followerMeta.getAttribute('content') ?? '0')
              : null
            const image =
              scraped.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? null
            return {
              link: partialLink,
              followers,
              image,
            }
          } catch (_) {
            return {
              link: partialLink,
              followers: null,
              image: null,
            }
          }
        })
      )
    )

    store().dialog = {
      actions: [{ label: 'Close' }],
      message: `Searching SoundCloud for "${label.name}"`,
      multiselect: {
        choices: linksWithFollowers.map(({ link, followers, image }) => ({
          label: `${link}${followers !== null ? ` (${nFormatter(followers, 1)} followers)` : ''}`,
          icon: image ? <Avatar src={image} sx={{ width: 40, height: 40 }} /> : undefined,
        })),
        onChoose: formattedLabel => {
          // Extract the original link (everything before " (" or just the whole string if no followers)
          const originalLink = formattedLabel.split(' (')[0]
          setLink(originalLink, label)
        },
      },
    }
  } catch (_) {
    store().snackbar = 'Could not find links for ' + label.name
    store().loading = false
  }
}

async function setLink(partialLink: string, label: Label) {
  const link = 'https://soundcloud.com' + partialLink
  await load(updateDocTyped, label.id, { link })
  try {
    await updateProfile({ ...label, link })
  } catch (e) {
    store().snackbar = 'Could not update profile: ' + e
    store().loading = false
  }
}
