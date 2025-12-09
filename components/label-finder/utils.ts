export const STORAGE_KEY = 'labelFinderPlaylists'

export function extractPlaylistId(url: string): string | null {
  // Match patterns like:
  // https://open.spotify.com/playlist/{id}
  // https://spotify.com/playlist/{id}
  // spotify:playlist:{id}
  const patterns = [
    /(?:https?:\/\/)?(?:open\.)?spotify\.com\/playlist\/([a-zA-Z0-9]+)/,
    /spotify:playlist:([a-zA-Z0-9]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

