import axios from 'axios'

const HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

export const loadRecommendationsPending = () => {
    return {
        type: 'LOAD_RECOMMENDATIONS_PENDING',
        payload: {}
    }
}

export const loadRecommendations = (accessToken, seeds) => {
    return {
        type: 'LOAD_RECOMMENDATIONS',
        payload: {
            promise: axios.get(`https://api.spotify.com/v1/recommendations?limit=${50}&seed_artists=${seeds.artistsSeed.join(',')}&seed_genres=*&seed_tracks=${seeds.tracksSeed.join(',')}`,
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

export const fetchTopTracksPending = (term) => {
    return {
        type: `SET_TOP_TRACKS_${term.toUpperCase()}_PENDING`,
        payload: {}
    }
}

export const fetchTopTracks = (accessToken, term) => {
    return {
        type: `SET_TOP_TRACKS_${term.toUpperCase()}`,
        payload: {
            promise: axios.get(`https://api.spotify.com/v1/me/top/tracks?limit=${50}&time_range=${term}`,
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

export const fetchTopArtistsPending = (term) => {
    return {
        type: `SET_TOP_ARTISTS_${term.toUpperCase()}_PENDING`,
        payload: {}
    }
}
export const fetchTopArtists = (accessToken, term) => {
    return {
        type: `SET_TOP_ARTISTS_${term.toUpperCase()}`,
        payload: {
            promise: axios.get(`https://api.spotify.com/v1/me/top/artists?limit=${50}&time_range=${term}`,
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