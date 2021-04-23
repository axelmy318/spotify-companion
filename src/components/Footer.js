import React from 'react'

import Button from 'react-bootstrap/Button'
import { GoMarkGithub as LogoGithub } from 'react-icons/go'
import { IconContext } from 'react-icons'

const Footer = () => {
    const goToUrl = (url) => {
        const urls = {
            github: 'https://github.com/axelmy318/spotify-companion'
        }

        window.open(urls[url], '_blank')
    }

    const CustomToggle = React.forwardRef(({ children, url }, ref) => (
        <a href="#" ref={ref} onClick={e => { e.preventDefault(); goToUrl(url); }} >
            <IconContext.Provider value={{color: 'white', size: '25px'}}><LogoGithub />&nbsp;</IconContext.Provider>
            {children}
        </a>
    ));

    return (
        <footer style={{textAlign: 'center', margin:'30px 0px', fontSize: '105%'}}>
            <Button as={CustomToggle} url='github'>Github</Button>
        </footer>
    )
}

export default Footer
