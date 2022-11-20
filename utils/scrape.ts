import { updateDocTyped } from './db'
import { load } from './load'
import { store } from './store'
import { Label } from './types'

export async function scrape(url: string) {
    const res = await fetch('/api/scraper', {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ url }),
    })
    const html = ((await res.json()) as { html: string }).html
    const el = document.createElement('html')
    el.innerHTML = html
    return el
}

export async function searchSoundCloudLinks(labelName: string) {
    try {
        const result = await load(
            scrape,
            `https://soundcloud.com/search/people?q=` + encodeURIComponent(labelName)
        )
        return Array.from(
            Array.from(result.querySelectorAll('#app noscript'))
                .map(noscript => {
                    const el = document.createElement('html')
                    el.innerHTML = noscript.innerHTML
                    return el
                })
                .filter(el => el.querySelectorAll('h2 > a').length)[0]
                .querySelectorAll('h2 > a')
        ).map((article: HTMLAnchorElement) => article.getAttribute('href'))
    } catch (error) {
        // alert(error)
        return []
    }
}

export async function scrapeSoundCloudProfile(url: string) {
    const repostScrape = await load(scrape, url + '/reposts')
    const popularTracks = parseSCTracks(await load(scrape, url + '/popular-tracks'))
    const recentTracks = parseSCTracks(await load(scrape, url + '/tracks'))
    const reposts = parseSCTracks(repostScrape)
    const profile = parseSCProfile(repostScrape)
    const allTracks = (popularTracks ?? []).concat(recentTracks ?? []).concat(reposts ?? [])
    return {
        profile,
        tracks: {
            popular: popularTracks,
            recent: recentTracks,
            lastUpload:
                allTracks.length === 0
                    ? undefined
                    : allTracks.reduce((prev, curr) =>
                          new Date(prev.published) > new Date(curr.published) ? prev : curr
                      ).published,
        },
    }
}

export async function reScrapeData() {
    let failed = 0
    let i = 0
    for (const label of store().labels) {
        try {
            i++
            store().dialog = {
                actions: [],
                message: i + '/' + store().labels.length + ' succeeded: ' + (i - failed),
            }
            await updateProfile(label)
        } catch (_) {
            failed++
        }
    }
    store().dialog = null
}

export async function updateProfile(label: Label) {
    const res = await scrapeSoundCloudProfile(label.link)
    await load(updateDocTyped, label.id, {
        ...(res.profile ? { image: res.profile.image } : {}),
        ...(res.profile ? { followers: res.profile.followers } : {}),
        ...(res.tracks.lastUpload ? { lastUploaded: res.tracks.lastUpload } : {}),
    })
}

function parseSCTracks(el: HTMLHtmlElement) {
    try {
        return Array.from(
            Array.from(el.querySelectorAll('#app noscript'))
                .map(noscript => {
                    const el = document.createElement('html')
                    el.innerHTML = noscript.innerHTML
                    return el
                })
                .filter(el => el.querySelectorAll('article.audible').length)[0]
                .querySelectorAll('article.audible')
        ).map((article: HTMLAnchorElement) => ({
            title: article.querySelector('a[itemprop="url"]').innerHTML,
            url:
                'https://soundcloud.com' +
                article.querySelector('a[itemprop="url"]').getAttribute('href'),
            published: article.querySelector('time').innerHTML,
        }))
    } catch (error) {
        // alert(error)
        return null
    }
}

function parseSCProfile(el: HTMLHtmlElement) {
    try {
        return {
            followers: parseInt(
                el
                    .querySelector('meta[property="soundcloud:follower_count"]')
                    .getAttribute('content')
            ),
            image: el.querySelector('meta[property="og:image"]').getAttribute('content'),
        }
    } catch (error) {
        // alert(error)
        return null
    }
}
