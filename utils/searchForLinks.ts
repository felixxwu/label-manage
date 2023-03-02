import { updateDocTyped } from './db'
import { load } from './load'
import { searchSoundCloudLinks, updateProfile } from './scrape'
import { store } from './store'
import { Label } from './types'

export async function searchForLinks(label: Label) {
    try {
        const links = await searchSoundCloudLinks(label.name)

        store().dialog = {
            actions: [{ label: 'Close' }],
            message: 'https://soundcloud.com...',
            multiselect: {
                choices: links.map(l => ({ label: l })),
                onChoose: link => setLink(link, label),
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
