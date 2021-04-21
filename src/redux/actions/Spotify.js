import axios from 'axios'
import queryString from 'query-string'

const HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

export const fetchTopTracksPending = () => {
    return {
        type: 'SET_TOP_TRACKS_PENDING',
        payload: {}
    }
}

export const fetchTopTracks = (accessToken) => {
    return {
        type: 'SET_TOP_TRACKS',
        payload: {
            promise: axios.get(`https://api.spotify.com/v1/me/top/tracks?limit=${50}`,
                {
                    headers: {
                        ...HEADERS,
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
        }
    }
}

export const fetchTopArtistsPending = () => {
    return {
        type: 'SET_TOP_ARTISTS_PENDING',
        payload: {}
    }
}
export const fetchTopArtists = (accessToken) => {
    return {
        type: 'SET_TOP_ARTISTS',
        payload: {
            promise: axios.get(`https://api.spotify.com/v1/me/top/artists?limit=${50}`,
                {
                    headers: {
                        ...HEADERS,
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
        }
    }
}