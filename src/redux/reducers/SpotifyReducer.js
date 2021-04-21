import queryString from 'query-string'

const initialState = {
    topArtists: {
        status: 'none',
        content: []
    },
    topTracks: {
        status: 'none',
        content: []
    }
}

const SpotifyReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_TOP_TRACKS_PENDING':
            return {
                ...state,
                topTracks: {
                    ...state.topTracks,
                    status: 'pending'
                }
            }
        case 'SET_TOP_TRACKS_FULFILLED':
            console.log(action.payload.data)
            return {
                ...state,
                topTracks: {
                    ...state.topTracks,
                    status: 'fulfilled',
                    content: [...action.payload.data.items]
                }
            }
        case 'SET_TOP_ARTISTS_PENDING':
            return {
                ...state,
                topArtists: {
                    ...state.topArtists,
                    status: 'pending'
                }
            }
        case 'SET_TOP_ARTISTS_FULFILLED':
            console.log(action.payload.data)
            return {
                ...state,
                topArtists: {
                    ...state.topArtists,
                    status: 'fulfilled',
                    content: [...action.payload.data.items]
                }
            }
        default:
            return {...state}
    }
}

export default SpotifyReducer