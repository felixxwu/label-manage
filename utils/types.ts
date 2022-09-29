import { Firestore } from 'firebase/firestore'

export interface Store {
    db: Firestore
    error: string
    labels: Label[]
    selectedLabelId: string
}

export interface Label {
    id: string
    name: string
    link: string
    followers: '1k' | '5k' | '10k' | '50k' | '100k' | '500k' | '1m'
    styles: ('Liquid' | 'Deep' | 'Heavy' | 'Melodic' | 'Vocal')[]
    artists: string[]
    notes: string
    email: string
    submission: string
}
