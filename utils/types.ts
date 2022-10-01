import { Firestore } from 'firebase/firestore'

export interface Store {
    db: Firestore
    error: string
    labels: Label[]
    selectedLabelId: string
}

export const followerOptions = ['2k', '5k', '10k', '20k', '50k', '100k', '200k'] as const

export interface Label {
    id: string
    name: string
    link: string
    followers: typeof followerOptions[number] | '?'
    styles: ('Liquid' | 'Deep' | 'Heavy' | 'Melodic' | 'Vocal')[]
    artists: string[]
    notes: string
    email: string
    submission: string
}
