import { Firestore } from 'firebase/firestore'

export interface Store {
    db: Firestore
    error: string
    labels: Label[]
    extra: DbExtra
    selectedLabelId: string
    showMusic: boolean
}

export const followerOptions = ['2k', '5k', '10k', '20k', '50k', '100k', '200k'] as const

export function followersToIndex(followers: Label['followers']) {
    return followerOptions.findIndex(option => option === followers)
}

type Style = 'Liquid' | 'Deep' | 'Heavy' | 'Melodic' | 'Vocal'

export interface Label {
    id: string
    name: string
    image: string
    link: string
    followers: typeof followerOptions[number] | '?'
    styles: Style[]
    artists: string[]
    notes: string
    submission: string
}

export interface Song {
    id: string
    title: string
    link: string
    styles: Style[]
}

export interface DbExtra {
    songs: Song[]
}
