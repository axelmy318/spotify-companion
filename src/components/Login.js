import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Login = () => {
    const authorizeSpotify = (e) => {
        e.preventDefault()

        let redirectLink = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(process.env.REACT_APP_SPOTIFY_SCOPES)}&redirect_uri=${encodeURIComponent(process.env.REACT_APP_SPOTIFY_REDIRECT_URI)}`

        window.location.href = redirectLink
    }

    return (
        <>
            <Container fluid>
                <Row style={{marginTop: '40vh'}}>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Card className='mx-auto align-middle'>
                            <Card.Body>
                                <Card.Title>Login with spotify</Card.Title>
                                <Card.Text>
                                    This website will not save any of your data, only display it and suggest musics based on what you listen to.
                                </Card.Text>
                                <Button onClick={authorizeSpotify}>Authorize</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </>
    )
}

export default Login
