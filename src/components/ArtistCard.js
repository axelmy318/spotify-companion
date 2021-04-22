import React from 'react'

import {formatNumber} from '../functions/formatNumber'

import Card from 'react-bootstrap/Card'

import {IconContext} from 'react-icons'
import { ImSpotify as LogoSpotify } from 'react-icons/im'

const FavouriteTrack = ({ header, data }) => {
    const goToSpotifyPage = (e) => {
        e.preventDefault()
        window.open(data.external_urls.spotify, "_blank");
    }

    return (
        <Card>
            <Card.Header>{header}</Card.Header>
            <Card.Img variant="middle" src={`${data.images[0].url}`} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle>{formatNumber(data.followers.total)} followers</Card.Subtitle>
                <br />
                <IconContext.Provider value={{color: 'green', size: '40px'}}>
                    <LogoSpotify className='clickable' onClick={(e) => goToSpotifyPage(e)}/>
                </IconContext.Provider>
            </Card.Body>
        </Card>
    )
}

export default FavouriteTrack
