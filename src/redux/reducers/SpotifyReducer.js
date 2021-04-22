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
    },
    recommendations: {
        status: 'none',
        content: []
    }
}

const SpotifyReducer = (state = initialState, action) => {
    action = action.action ? action.action : action
    switch(action.type){
        case 'LOAD_RECOMMENDATIONS_PENDING':
            return {
                ...state,
                recommendations: {
                    ...state.recommendations,
                    status: 'pending'
                }
            }
        case 'LOAD_RECOMMENDATIONS_FULFILLED':
            let data = action.payload.data.tracks
            return {
                ...state,
                recommendations: {
                    ...state.recommendations,
                    status: 'fulfilled',
                    content: [...data]
                }
            }
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