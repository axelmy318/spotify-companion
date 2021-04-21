import axios from 'axios'
import queryString from 'query-string'

const HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

export const setCode = (code) => {
    return {
        type: 'SET_CODE',
        payload: {
            code
        }
    }
}

export const fetchTokenPending = () => {
    return {
        type: 'SET_CODE_AND_TOKEN_PENDING',
        payload: {}
    }
}

export const fetchToken = (code) => {
    return {
        type: 'SET_CODE_AND_TOKEN',
        payload: {
            promise: axios.post(`https://accounts.spotify.com/api/token?code=${code}`,
                queryString.stringify({
                    grant_type: "authorization_code",
                    code: code,
                    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
                    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
                    client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
                }),
                {
                    headers: {
                        'Content-Type':'application/x-www-form-urlencoded'
                    }
                }
            )
        },
        data: {
            test: 'test'
        }
    }
}