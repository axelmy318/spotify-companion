import { combineReducers } from 'redux'

import UserReducer from './UserReducer'
import SpotifyReducer from './SpotifyReducer'

const reducers = combineReducers({
    User: UserReducer,
    Spotify: SpotifyReducer
})

export default reducers