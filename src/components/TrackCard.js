import React from 'react'

import {Row, Col, Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap'

const FavouriteTrack = ({ header, data }) => {
    return (
        <Card>
            <Card.Header>{header}</Card.Header>
            <Card.Img variant="top" src={`${data.album.images[0].url}`} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle>{data.artists[0].name}</Card.Subtitle>
                <br />
                <Button variant="success">Spotify</Button>
            </Card.Body>
        </Card>
    )
}

export default FavouriteTrack
