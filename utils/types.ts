export const followerOptions = ['2k', '5k', '10k', '20k', '50k', '100k', '200k'] as const

export function followersToIndex(followers: Label['followers']) {
    return followerOptions.findIndex(option => option === followers)
}

export const sortTypes = ['follower', 'name'] as const
export type SortType = typeof sortTypes[number]

export interface Label {
    id: string
    name: string
    image: string
    link: string
    followers: typeof followerOptions[number] | ''
    styles: string[]
    artists: string[]
    notes: string
    submission: string
    songsSubmitted: string[]
}

export interface Song {
    id: string
    title: string
    link: string
    styles: string[]
}

export interface DbExtra {
    songs: Song[]
    compact: boolean
    styles: string[]
    template: string
}
