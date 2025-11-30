export const followerOptions = ['2k', '5k', '10k', '20k', '50k', '100k', '200k'] as const

export const sortTypes = ['follower', 'name', 'popularity'] as const
export type SortType = (typeof sortTypes)[number]

export interface Track {
  url: string | null
  title: string | null
  published: string | null
}

export interface Label {
  id: string
  name: string
  description: string
  image: string
  link: string
  followers: number
  styles: string[]
  artists: string[]
  notes: string
  submission: string
  songsSubmitted: string[]
  songsSkipped: string[]
  inactive: boolean
  acceptDemos: boolean
  lastUploaded: string
  lastScraped: number
  popularity: number
  popularityVariance: number
  tracks: {
    popular: Track[]
    recent: Track[]
    reposts: Track[]
  }
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
