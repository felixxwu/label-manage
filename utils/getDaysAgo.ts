import { Label } from './types'

export function getDaysAgo(label: Label) {
    const seconds = new Date().getTime() - new Date(label.lastUploaded).getTime()
    return Math.floor(seconds / (1000 * 60 * 60 * 24))
}

export function getDaysAgoScraped(label: Label) {
    if (label.lastScraped === 0) {
        return 'NaN'
    }
    const seconds = new Date().getTime() - label.lastScraped
    return Math.floor(seconds / (1000 * 60 * 60 * 24))
}
