import { NextApiRequest, NextApiResponse } from 'next'
import { getSpotifyAccessToken } from '../../utils/getSpotifyAccessToken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { playlist_id } = req.query

  if (!playlist_id || typeof playlist_id !== 'string') {
    res.status(400).json({ message: 'Missing or invalid playlist_id' })
    return
  }

  try {
    const token = await getSpotifyAccessToken()

    // First, get the playlist name
    const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!playlistResponse.ok) {
      throw new Error(`Spotify API playlist request failed: ${playlistResponse.statusText}`)
    }

    const playlistData = await playlistResponse.json()
    const playlistName = playlistData.name || 'Unknown Playlist'
    const playlistImage = playlistData.images?.[0]?.url || null

    const limit = 50
    let allItems: any[] = []
    let nextUrl:
      | string
      | null = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=${limit}`

    // Fetch all pages of tracks
    while (nextUrl) {
      const response = await fetch(nextUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Spotify API request failed: ${response.statusText}`)
      }

      const data = await response.json()

      // Add items from this page to the collection
      if (data.items && Array.isArray(data.items)) {
        allItems = allItems.concat(data.items)
      }

      // Check if there's a next page
      nextUrl = data.next || null
    }

    // Extract unique album IDs from all playlist items
    const albumIds = new Set<string>()
    for (const item of allItems) {
      // Handle null tracks (unavailable tracks in playlists)
      if (!item || !item.track) {
        continue
      }
      // Handle tracks that might not have album data
      if (item.track.album && item.track.album.id) {
        albumIds.add(item.track.album.id)
      }
    }

    const uniqueAlbumIds = Array.from(albumIds)
    const albumLimit = 20 // Spotify API limit for get several albums
    let allAlbums: any[] = []

    // Fetch albums in batches of 20
    for (let i = 0; i < uniqueAlbumIds.length; i += albumLimit) {
      const batch = uniqueAlbumIds.slice(i, i + albumLimit)
      const idsParam = batch.join(',')

      const albumsResponse = await fetch(`https://api.spotify.com/v1/albums?ids=${idsParam}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!albumsResponse.ok) {
        throw new Error(`Spotify API albums request failed: ${albumsResponse.statusText}`)
      }

      const albumsData = await albumsResponse.json()

      // Add albums from this batch to the collection, filtering out null albums
      if (albumsData.albums && Array.isArray(albumsData.albums)) {
        const validAlbums = albumsData.albums.filter((album: any) => album !== null)
        allAlbums = allAlbums.concat(validAlbums)
      }
    }

    // Return the albums instead of playlist items
    res.status(200).json({
      albums: allAlbums,
      total: allAlbums.length,
      playlistItemsProcessed: allItems.length,
      uniqueAlbumIdsFound: uniqueAlbumIds.length,
      playlistName: playlistName,
      playlistId: playlist_id,
      playlistImage: playlistImage,
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Error fetching playlist tracks', error: String(e) })
  }
}
