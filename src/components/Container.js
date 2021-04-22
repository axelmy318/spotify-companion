import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
    fetchTopArtists, fetchTopArtistsPending,
    fetchTopTracks, fetchTopTracksPending
} from '../redux/actions/Spotify'

import TrackCard from './TrackCard'
import ArtistCard from './ArtistCard'
import ArtistsList from './ArtistsList'
import TracksList from './TracksList'
import Recommendations from './Recommendations'

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
        console.log(user)
        if(spotify.topArtists.short.status === 'none'){
            dispatch(fetchTopArtistsPending('short_term'))
            dispatch(fetchTopArtists(user.accessToken, 'short_term'))
        }
        if(spotify.topTracks.short.status === 'none'){
            dispatch(fetchTopTracksPending('short_term'))
            dispatch(fetchTopTracks(user.accessToken, 'short_term'))
        }
        if(spotify.topArtists.long.status === 'none'){
            dispatch(fetchTopArtistsPending('long_term'))
            dispatch(fetchTopArtists(user.accessToken, 'long_term'))
        }
        if(spotify.topTracks.long.status === 'none'){
            dispatch(fetchTopTracksPending('long_term'))
            dispatch(fetchTopTracks(user.accessToken, 'long_term'))
        }
    }

    if(user.code !== null && user.code !== undefined)
        loadSpotifyData()

    const getSeedsFrom = (dataset) => {
        const samples = 2
        const dataSample = []
        if(dataset.length < samples) return;

        while(dataSample.length < samples){
            let pick = Math.floor(Math.random() * dataset.length)

            if(!dataSample.includes(pick))
            dataSample.push(pick)
        }

        const artistsSeed = []
        const tracksSeed = []

        dataSample.map(sampleId => {
            tracksSeed.push(dataset[sampleId].id)
            artistsSeed.push(dataset[sampleId].artists[0].id)
            return null
        })

        return {
            artistsSeed, tracksSeed
        }
    }

    return (
        <div>
            <div style={{margin: '20px'}}>

            </div>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <Row>
                        <Col md={3}>
                        {spotify.topArtists.short.status === 'fulfilled' &&
                            <ArtistCard header='Artist / band of the moment' data={spotify.topArtists.short.content[0]} />
                        }
                        </Col>
                        <Col md={3}>
                        {spotify.topArtists.long.status === 'fulfilled' &&
                            <ArtistCard header='Favorite artist / band' data={spotify.topArtists.long.content[0]} />
                        }
                        </Col>
                        <Col md={3}>
                        {spotify.topTracks.short.status === 'fulfilled' &&
                            <TrackCard header='Track of the moment' data={spotify.topTracks.short.content[0]} />
                        }
                        </Col>
                        <Col md={3}>
                        {spotify.topTracks.long.status === 'fulfilled' &&
                            <TrackCard header='Favorite track' data={spotify.topTracks.long.content[0]} />
                        }
                        </Col>
                    </Row>
                </Col>
                <Col md={1}></Col>
            </Row>
            <div style={{margin: '20px'}}></div>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <Row>
                        <Col md={4}>
                        {spotify.topArtists.long.status === 'fulfilled' &&
                            <ArtistsList long={spotify.topArtists.long.content} short={spotify.topArtists.short.content} />
                        }
                        </Col>
                        <Col md={4}>
                        {spotify.topTracks.long.status === 'fulfilled' &&
                            <TracksList long={spotify.topTracks.long.content} short={spotify.topTracks.short.content} />
                        }
                        </Col>
                        <Col md={4}>
                        {spotify.topTracks.short.status === 'fulfilled' &&
                            <Recommendations status={spotify.recommendations.status} recommendations={spotify.recommendations.content} seeds={getSeedsFrom(spotify.topTracks.short.content)} />
                        }
                        </Col>
                    </Row>
                </Col>
                <Col md={1}></Col>
            </Row>
        </div>
    )
}

export default Container
