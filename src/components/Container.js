import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Container = () => {
    const user = useSelector(state => state.User)
    const history = useHistory()

    //Making sure the user has authorized this app to access spotify
    if((user.code === null || user.code === undefined) && user.status === 'none'){
        if(history.location.pathname !== '/login')
        history.push('/login')
    }
    return (
        <div>
        </div>
    )
}

export default Container
