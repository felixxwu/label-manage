let cachedToken: string | null = null
let tokenExpiration: number | null = null

export async function getSpotifyAccessToken(): Promise<string> {
  // Check if we have a valid cached token
  if (cachedToken && tokenExpiration && Date.now() < tokenExpiration) {
    return cachedToken
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error('Missing Spotify credentials')
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  })

  if (!response.ok) {
    throw new Error(`Spotify token request failed: ${response.statusText}`)
  }

  const data = await response.json()

  // Cache the token
  cachedToken = data.access_token
  // Set expiration time (subtract 60s buffer to be safe)
  tokenExpiration = Date.now() + data.expires_in * 1000 - 60000

  return data.access_token
}
