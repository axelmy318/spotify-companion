const HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

export const fetchToken = () => {
    return {
        type: 'SET_TOKEN'
        /*payload: {

        }*/
    }
}

export const setCode = (code) => {
    return {
        type: 'SET_CODE',
        payload: {
            code
        }
    }
}