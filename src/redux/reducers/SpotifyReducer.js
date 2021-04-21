import queryString from 'query-string'

const initialState = {
    topArtists: {
        short: {
            status: 'none',
            content: []
        },
        long: {
            status: 'none',
            content: []
        }
    },
    topTracks: {
        short: {
            status: 'none',
            content: []
        },
        long: {
            status: 'none',
            content: []
        }
    }
}

const SpotifyReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_TOP_TRACKS_SHORT_TERM_PENDING':
            return {
                ...state,
                topTracks: {
                    ...state.topTracks,
                    short: {
                        ...state.topTracks.short,
                        status: 'pending'
                    }
                }
            }
        case 'SET_TOP_TRACKS_SHORT_TERM_FULFILLED':
            return {
                ...state,
                topTracks: {
                    ...state.topTracks,
                    short: {
                        ...state.topTracks.short,
                        status: 'fulfilled',
                        content: [...action.payload.data.items]
                    }
                }
            }
        case 'SET_TOP_TRACKS_LONG_TERM_PENDING':
            return {
                ...state,
                topTracks: {
                    ...state.topTracks,
                    long: {
                        ...state.topTracks.long,
                        status: 'pending'
                    }
                }
            }
        case 'SET_TOP_TRACKS_LONG_TERM_FULFILLED':
            return {
                ...state,
                topTracks: {
                    ...state.topTracks,
                    long: {
                        status: 'fulfilled',
                        content: [...action.payload.data.items]
                    }
                }
            }
        case 'SET_TOP_ARTISTS_SHORT_TERM_PENDING':
            return {
                ...state,
                topArtists: {
                    ...state.topArtists,
                    short: {
                        ...state.topArtists.short,
                        status: 'pending'
                    }
                }
            }
        case 'SET_TOP_ARTISTS_SHORT_TERM_FULFILLED':
            return {
                ...state,
                topArtists: {
                    ...state.topArtists,
                    short: {
                        ...state.topArtists.short,
                        status: 'fulfilled',
                        content: [...action.payload.data.items]
                    }
                }
            }
        case 'SET_TOP_ARTISTS_LONG_TERM_PENDING':
            return {
                ...state,
                topArtists: {
                    ...state.topArtists,
                    long: {
                        ...state.topArtists.long,
                        status: 'pending'
                    }
                }
            }
        case 'SET_TOP_ARTISTS_LONG_TERM_FULFILLED':
            return {
                ...state,
                topArtists: {
                    ...state.topArtists,
                    long: {
                        ...state.topArtists.long,
                        status: 'fulfilled',
                        content: [...action.payload.data.items]
                    }
                }
            }
        default:
            return {...state}
    }
}

export default SpotifyReducer