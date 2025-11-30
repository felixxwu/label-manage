import { getSpotifyAccessToken } from './getSpotifyAccessToken'

export async function searchSpotifyTracks(query: string) {
  const token = await getSpotifyAccessToken()

  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Spotify search failed: ${response.statusText}`)
  }

  return response.json()
}
