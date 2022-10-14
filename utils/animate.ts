import { consts } from './consts'

export async function fade() {
    window.document.body.style.transition = consts.transition + 'ms'
    window.document.body.style.opacity = '0'

    await new Promise(r => setTimeout(r, consts.transition))

    window.document.body.style.opacity = '1'
}

export async function shortWait() {
    await new Promise(r => setTimeout(r, 300))
}
