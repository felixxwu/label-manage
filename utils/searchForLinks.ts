import { updateDocTyped } from './db'
import { load } from './load'
import { nFormatter } from './nFormatter'
import { scrape, searchSoundCloudLinks, updateProfile } from './scrape'
import { store } from './store'
import { Label } from './types'

export async function searchForLinks(label: Label) {
  try {
    const links = await searchSoundCloudLinks(label.name)

    // Scrape each link for follower count
    const linksWithFollowers = await Promise.all(
      links.map(async partialLink => {
        try {
          const fullUrl = 'https://soundcloud.com' + partialLink
          const scraped = await load(scrape, fullUrl)
          const followerMeta = scraped.querySelector('meta[property="soundcloud:follower_count"]')
          const followers = followerMeta
            ? parseInt(followerMeta.getAttribute('content') ?? '0')
            : null
          return {
            link: partialLink,
            followers,
          }
        } catch (_) {
          return {
            link: partialLink,
            followers: null,
          }
        }
      })
    )

    store().dialog = {
      actions: [{ label: 'Close' }],
      message: `Searching SoundCloud for "${label.name}"`,
      multiselect: {
        choices: linksWithFollowers.map(({ link, followers }) => ({
          label: `${link}${followers !== null ? ` (${nFormatter(followers, 1)} followers)` : ''}`,
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
