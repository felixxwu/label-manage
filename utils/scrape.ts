import { updateDocTyped } from './db'
import { load } from './load'
import { snackErrorReturn } from './snackError'
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
    const result = await load(
        scrape,
        `https://soundcloud.com/search/people?q=` + encodeURIComponent(labelName)
    )
    const noscript = noscriptContent(result)
    if (!noscript) return snackErrorReturn('Could not find tracks in the html', [])
    return Array.from(noscript.querySelectorAll('h2 > a')).map(
        (article: HTMLAnchorElement) => article.getAttribute('href') ?? ''
    )
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
            reposts: reposts,
            lastUpload:
                allTracks.length === 0
                    ? null
                    : allTracks.reduce((prev, curr) =>
                          new Date(prev.published ?? 0) > new Date(curr.published ?? 0)
                              ? prev
                              : curr
                      ).published,
        },
    }
}

export async function reScrapeData() {
    // wait for any previous dialogs to close
    await new Promise(r => setTimeout(r, 1000))
    let i = 0
    for (const label of store().labels) {
        // stop if dialog is closed mid way through the scrape
        if (store().dialog === null && i > 0) return
        i++
        store().dialog = {
            actions: [{ label: 'Cancel' }],
            message: i + '/' + store().labels.length,
        }
        await updateProfile(label)
    }
    store().dialog = null
}

export async function updateProfile(label: Label) {
    const res = await scrapeSoundCloudProfile(label.link)
    await load(updateDocTyped, label.id, {
        ...(res.profile.image ? { image: res.profile.image } : {}),
        ...(res.profile.followers ? { followers: res.profile.followers } : {}),
        ...(res.profile.description ? { description: res.profile.description } : {}),
        ...(res.tracks.lastUpload ? { lastUploaded: res.tracks.lastUpload } : {}),
        lastScraped: new Date().getTime(),
        tracks: {
            popular: res.tracks.popular,
            recent: res.tracks.recent,
            reposts: res.tracks.reposts,
        },
    })
}

function noscriptContent(el: HTMLHtmlElement): HTMLHtmlElement | undefined {
    return Array.from(el.querySelectorAll('#app noscript:not(.errorPage__inner)')).map(noscript => {
        const el = document.createElement('html')
        el.innerHTML = noscript.innerHTML
        return el
    })[0]
}

function htmlDecode(input: string) {
    const doc = new DOMParser().parseFromString(input, 'text/html')
    return doc.documentElement.textContent
}

function parseSCTracks(el: HTMLHtmlElement) {
    const noscript = noscriptContent(el)
    if (!noscript) return snackErrorReturn('Could not find tracks', [])

    return Array.from(noscript.querySelectorAll('article.audible')).map(
        (article: HTMLAnchorElement) => ({
            title: (() => {
                const anchor = article.querySelector('a[itemprop="url"]')
                if (!anchor) return snackErrorReturn('Could not find title tag', null)
                return htmlDecode(anchor.innerHTML)
            })(),
            url: (() => {
                const anchor = article.querySelector('a[itemprop="url"]')
                if (!anchor) return snackErrorReturn('Could not find url tag', null)
                return 'https://soundcloud.com' + anchor.getAttribute('href')
            })(),
            published: (() => {
                const time = article.querySelector('time')
                if (!time) return snackErrorReturn('Could not find time tag', null)
                return time.innerHTML
            })(),
        })
    )
}

function parseSCProfile(el: HTMLHtmlElement) {
    return {
        followers: (() => {
            const followerMeta = el.querySelector('meta[property="soundcloud:follower_count"]')
            if (!followerMeta) return snackErrorReturn('Could not find a follower meta tag', null)
            return parseInt(followerMeta.getAttribute('content') ?? '0')
        })(),
        image: (() => {
            const imageMeta = el.querySelector('meta[property="og:image"]')
            if (!imageMeta) return snackErrorReturn('Could not find image meta tag', null)
            return imageMeta.getAttribute('content')
        })(),
        description: (() => {
            const noscript = noscriptContent(el)
            if (!noscript) return snackErrorReturn('Could not find noscript', '')
            const description = noscript.querySelector('p[itemprop="description"]')
            if (!description) return snackErrorReturn('Could not find description', '')
            return htmlDecode(description.innerHTML)
        })(),
    }
}
