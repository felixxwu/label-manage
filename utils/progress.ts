import { emptyLabel } from './db'
import { Label } from './types'

export function getProgress(label: Label) {
    const fields: (keyof Label)[] = (Object.keys(emptyLabel) as (keyof typeof emptyLabel)[]).filter(
        field => field !== 'songsReleased'
    )
    const filledOut = fields.filter(field => {
        if (Array.isArray(label[field])) {
            return label[field].length !== 0
        } else {
            return !!label[field]
        }
    }).length
    const percentage = (filledOut / fields.length) * 100
    return percentage
}
