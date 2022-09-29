const transition = 200

export async function fade() {
    window.document.body.style.transition = transition + 'ms'
    window.document.body.style.opacity = '0'

    await new Promise(r => setTimeout(r, transition))

    window.document.body.style.opacity = '1'
}

export async function shortWait() {
    await new Promise(r => setTimeout(r, 600))
}
