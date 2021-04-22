import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { ImSpotify as LogoSpotify } from 'react-icons/im'

const FavouriteTrack = ({ header, data }) => {
    const goToSpotifyPage = (e) => {
        e.preventDefault()
        window.open(data.external_urls.spotify, "_blank");
    }

    return (
        <Card>
            <Card.Header>{header}</Card.Header>
            <Card.Img variant="middle" src={`${data.album.images[0].url}`} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle>by {data.artists[0].name}</Card.Subtitle>
                <br />
                <Button variant="success" onClick={(e) => goToSpotifyPage(e)}><LogoSpotify /> Spotify</Button>
            </Card.Body>
        </Card>
    )
}

export default FavouriteTrack
