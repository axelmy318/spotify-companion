const initialState = {
    code: null,
    token: null
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_TOKEN':
            return {
                ...state, 
                token: action.payload.token
            }
        case 'SET_CODE':
            return {
                ...state,
                code: action.payload.code
            }
        default:
            return {...state}
    }
}

export default UserReducer