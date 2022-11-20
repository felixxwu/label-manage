import { Label } from "./types"

export function getDaysAgo(label: Label) {
    const seconds = new Date().getTime() - new Date(label.lastUploaded).getTime()
    return Math.floor(seconds / (1000 * 60 * 60 * 24))
}
