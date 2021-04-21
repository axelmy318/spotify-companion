import queryString from 'query-string'

const initialState = {
    status: 'none',
    code: null,
    accessToken: null,
    refreshToken: null
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_TOKEN':
            return {
                ...state, 
                accessToken: action.payload.token
            }
        case 'SET_CODE':
            return {
                ...state,
                code: action.payload.code
            }
        case 'SET_CODE_AND_TOKEN_PENDING':
            return {
                ...state,
                status: 'pending'
            }
        case 'SET_CODE_AND_TOKEN_FULFILLED':
            let data = action.payload.config.url
            data = queryString.parse(data.split('?')[1])
            
            return {
                ...state,
                code: data.code,
                accessToken: action.payload.data.access_token,
                refreshToken: action.payload.data.refresh_token,
                status: 'fulfilled'
            }
        default:
            return {...state}
    }
}

export default UserReducer