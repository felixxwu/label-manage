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
