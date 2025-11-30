import { NextApiRequest, NextApiResponse } from 'next'
import { searchSpotifyTracks } from '../../utils/searchSpotifyTracks'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query

  if (!name || typeof name !== 'string') {
    res.status(400).json({ message: 'Missing or invalid label name' })
    return
  }

  try {
    const searchData = await searchSpotifyTracks(`label:${name}`)

    if (!searchData.tracks || !searchData.tracks.items || searchData.tracks.items.length === 0) {
      res.status(200).json({ averagePopularity: 0, name })
      return
    }

    const popularity = searchData.tracks.items.map((item: any) => item.popularity)
    const averagePopularity =
      popularity.reduce((a: number, b: number) => a + b, 0) / popularity.length

    const variance =
      popularity.reduce((a: number, b: number) => a + Math.pow(b - averagePopularity, 2), 0) /
      popularity.length
    const stdDev = Math.sqrt(variance)

    res.status(200).json({ averagePopularity, name, stdDev, popularity })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Error searching Spotify' })
  }
}
