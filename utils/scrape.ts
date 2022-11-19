import { load } from './load'

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
            `https://www.google.com/search?q=` +
                encodeURIComponent('site:soundcloud.com ' + labelName)
        )
        const main = result.querySelector('#main')
        if (main === null) return null
        return Array.from(main.querySelectorAll('a'))
            .map(a => a.href)
            .filter(href => href.includes('https://soundcloud.com/'))
            .map(
                url =>
                    'https://soundcloud.com/' +
                    decodeURIComponent(url).split('https://soundcloud.com/')[1].split('&')[0]
            )
    } catch (error) {
        alert(error)
        return []
    }
}

export async function scrapeSoundCloudProfile(url: string) {
    const popularTracksScrape = await load(scrape, url + '/popular-tracks')
    const recentTracksScrape = await load(scrape, url + '/tracks')
    const popularTracks = parseSCTracks(popularTracksScrape)
    const recentTracks = parseSCTracks(recentTracksScrape)
    const profile = parseSCProfile(popularTracksScrape)
    return {
        profile,
        tracks: {
            popular: popularTracks,
            recent: recentTracks,
        },
    }
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
        alert(error)
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
        alert(error)
        return null
    }
}
