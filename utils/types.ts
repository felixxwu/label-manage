import { Firestore } from 'firebase/firestore'

export interface Store {
    db: Firestore
    error: string
    labels: Label[]
    selectedLabelId: string
    showMusic: boolean
}

export const followerOptions = ['2k', '5k', '10k', '20k', '50k', '100k', '200k'] as const

type Style = 'Liquid' | 'Deep' | 'Heavy' | 'Melodic' | 'Vocal'

export interface Label {
    id: string
    name: string
    link: string
    followers: typeof followerOptions[number] | '?'
    styles: Style[]
    artists: string[]
    notes: string
    email: string
    submission: string
}

export interface Song {
    title: string
    link: string
    styles: Style[]
}

export interface DbExtra {
    songs: Song[]
}
