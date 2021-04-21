import React from 'react'

import {formatNumber} from '../functions/formatNumber'

import {Row, Col, Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap'

import { ImSpotify as LogoSpotify } from 'react-icons/all'

const FavouriteTrack = ({ header, data }) => {
    return (
        <Card>
            <Card.Header>{header}</Card.Header>
            <Card.Img variant="middle" src={`${data.images[0].url}`} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle>{formatNumber(data.followers.total)} followers</Card.Subtitle>
                <br />
                <Button variant="success"><LogoSpotify /> Spotify</Button>
            </Card.Body>
        </Card>
    )
}

export default FavouriteTrack
