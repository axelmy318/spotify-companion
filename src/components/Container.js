import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {Row, Col} from 'react-bootstrap'

import {
    fetchTopArtists, fetchTopArtistsPending,
    fetchTopTracks, fetchTopTracksPending
} from '../redux/actions/Spotify'
import { ActionType } from '../redux/middleware/promise'

const Container = () => {
    const user = useSelector(state => state.User)
    const spotify = useSelector(state => state.Spotify)
    const history = useHistory()
    const dispatch = useDispatch()

    //Making sure the user has authorized this app to access spotify
    if((user.code === null || user.code === undefined) && user.status === 'none'){
        if(history.location.pathname !== '/login')
        history.push('/login')
    }

    const loadSpotifyData = () => {
        if(spotify.topArtists.status === 'none'){
            dispatch(fetchTopArtistsPending())
            dispatch(fetchTopArtists(user.accessToken))
        }
        if(spotify.topTracks.status === 'none'){
            dispatch(fetchTopTracksPending())
            dispatch(fetchTopTracks(user.accessToken))
        }
    }

    if(user.code !== null && user.code !== undefined)
        loadSpotifyData()

    return (
        <div>
            <Row>
            <Col md={6}>
                {spotify.topArtists.status === 'fulfilled' && spotify.topArtists.content.map(content => <p>{content.name}</p>)}
            </Col>
            <Col md={6}>
                {spotify.topTracks.status === 'fulfilled' && spotify.topTracks.content.map(content => <p>{content.name}</p>)}
            </Col>
            </Row>
        </div>
    )
}

export default Container
