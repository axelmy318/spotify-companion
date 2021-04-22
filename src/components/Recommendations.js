import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Dropdown from 'react-bootstrap/Dropdown'

import { IconContext } from 'react-icons'
import { ImSpotify as LogoSpotify } from 'react-icons/im'
import { MdArrowDropDownCircle as LogoDropdown } from 'react-icons/md'

import { loadRecommendationsPending as fetchRecommendationsPending, loadRecommendations as fetchRecommendations } from '../redux/actions/Spotify'

const Recommendations = ({ status, recommendations, seeds }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.User)

    const cardHeight = '40vh'

    const LIST_STYLE = {
        height: cardHeight,
        maxHeight: cardHeight
    }

    const goToSpotifyPage = (e, url) => {
        e.preventDefault()
        window.open(url, '_blank')
    }

    const loadRecommendations = (e) => {
        if(e) e.preventDefault()
        console.log("Seeds", seeds)
        dispatch(fetchRecommendationsPending())
        dispatch(fetchRecommendations(user.accessToken, seeds))
    }

    const getFeaturingNamesString = (artists) => {
        let str = ''
        let addedNames = []
        for (let i = 0; i < artists.length; i++){
            if(!addedNames.includes(artists[i].name))
                str += artists[i].name + ", "
                
            addedNames.push(artists[i].name)
        }
        console.log('Added names', addedNames, 'String', str)
        return str.substr(0, str.length - 2)
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href="#"
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
        >
            <IconContext.Provider value={{color: 'grey', size: '20px'}}><LogoDropdown /></IconContext.Provider>
          
          {children}
      
        </a>
      ));

    if(status === 'none'){
        loadRecommendations(null)
    }

    if(status === 'fulfilled'){
        return (
            <Card>
                <Card.Header>
                    Recommendations
                    <div style={{float: 'right'}}>
                    <Dropdown >
                        <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                        <Dropdown.Menu size="sm" title=""> 
                            <Dropdown.Item onClick={(e) => loadRecommendations(e)}>Refresh</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Queue 5 firsts (coming soon...)</Dropdown.Item>
                            <Dropdown.Item>Queue 10 firsts (coming soon...)</Dropdown.Item>
                            <Dropdown.Item>Queue all (coming soon...)</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Create playlist (coming soon...)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Tabs
                    id="controlled-tab"
                    activeKey='tracks'
                    style={{style:'100%'}}
                    >
                        <Tab eventKey="tracks" title="Tracks" >
                            <Table style={{marginTop: '20px'}}>
                                <div style={{height: cardHeight, maxHeight: cardHeight, overflowY: 'scroll'}}>
                                    <tbody style={LIST_STYLE}>
                                        {recommendations.map((track, index) => 
                                            <tr style={{style:'100%'}}>
                                                <td className='align-middle'>{index+1}</td>
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
        else if(status === 'rejected' || status === 'none'){
            return (
                <Card>
                    <Card.Header>Recommendations</Card.Header>
                    <Card.Body>
                        <Button onClick={(e) => loadRecommendations(e)}>Load recommendations</Button>
                    </Card.Body>
                
                </Card>
                )
        }
        else if(status === 'pending'){
            return (
                <Card>
                    <Card.Header>Recommendations</Card.Header>
                    <Card.Body>
                        Finding some new songs...
                    </Card.Body>
                
                </Card>
                )
        }
}

export default Recommendations
