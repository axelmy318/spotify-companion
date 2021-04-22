import React, { useState } from 'react'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

import { IconContext } from 'react-icons'
import { ImSpotify as LogoSpotify } from 'react-icons/im'
import { FaTrophy as LogoTrophy } from 'react-icons/fa'

const TracksList = ({ long, short }) => {
    const [key, setKey] = useState('long');
    const cardHeight = '40vh'

    const LIST_STYLE = {
        height: cardHeight,
        maxHeight: cardHeight
    }

    const goToSpotifyPage = (e, url) => {
        e.preventDefault()
        window.open(url, '_blank')
    }

    const getFeaturingNamesString = (artists) => {
        let str = ''
        let addedNames = []
        for (let i = 0; i < artists.length; i++){
            if(!addedNames.includes(artists[i].name))
                str += artists[i].name + ", "
                
            addedNames.push(artists[i].name)
        }
        return str.substr(0, str.length - 2)
    }

    const displayTrophy = (number) => {
        let color = 'white'
        let size = '15px'

        switch(number){
            case 1:
                color = 'gold'
                size = '28px'
                break;
            case 2:
                color = 'silver'
                size = '22px'
                break;
            case 3:
                color = '#875600'
                size = '15px'
                break;
            default:
                break;
        }

        if(number >= 1 && number <= 3){
            return (
                <IconContext.Provider value={{color, size}}>
                    <LogoTrophy />
                </IconContext.Provider>
            )
        }
        return number;
    }

    return (
        <Card>
            <Card.Header>Your favorite tracks</Card.Header>
            <Card.Body>
                <Tabs
                id="controlled-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                style={{style:'100%'}}
                >
                    <Tab eventKey="long" title="Long term" >
                        <Table style={{marginTop: '20px'}}>
                            <div style={{height: cardHeight, maxHeight: cardHeight, overflowY: 'scroll'}}>
                                <tbody style={LIST_STYLE}>
                                    {long.map((track, index) => 
                                        <tr style={{style:'100%'}}>
                                            <td className='align-middle' style={{paddingRight: '0px', paddingLeft: '0px', textAlign:'center'}}>{displayTrophy(index+1)}</td>
                                            <td><img alt='' src={`${track.album.images[2].url}`} width={42} style={{borderRadius: '21px', border: '2px solid black'}} /></td>
                                            <td className='align-middle'>{track.name}&nbsp;<span className='text-muted sm'>-&nbsp;{getFeaturingNamesString(track.artists)}</span></td>
                                            <td className='align-middle'>
                                                <IconContext.Provider value={{color: 'green', size: '24px'}}>
                                                    <LogoSpotify className='clickable' onClick={(e) => goToSpotifyPage(e, track.external_urls.spotify)}/>
                                                </IconContext.Provider>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </div>
                        </Table>
                    </Tab>
                    <Tab eventKey="short" title="Recently">
                        <Table style={{marginTop: '20px'}}>
                            <div style={{height: cardHeight, maxHeight: cardHeight, overflowY: 'scroll'}}>
                                <tbody style={LIST_STYLE}>
                                    {short.map((track, index) => 
                                        <tr style={{style:'100%'}}>
                                            <td className='align-middle' style={{paddingRight: '0px', paddingLeft: '0px', textAlign:'center'}}>{displayTrophy(index+1)}</td>
                                            <td><img alt='' src={`${track.album.images[2].url}`} width={42} style={{borderRadius: '21px', border: '2px solid black'}} /></td>
                                            <td className='align-middle'>{track.name}&nbsp;<span className='text-muted sm'>-&nbsp;{getFeaturingNamesString(track.artists)}</span></td>
                                            <td className='align-middle'>
                                                <IconContext.Provider value={{color: 'green', size: '24px'}}>
                                                    <LogoSpotify className='clickable' onClick={(e) => goToSpotifyPage(e, track.external_urls.spotify)}/>
                                                </IconContext.Provider>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </div>
                        </Table>
                    </Tab>
                </Tabs>
            </Card.Body>
        
        </Card>
    )
}

export default TracksList
