import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests//img.webp'
import HeaderSocial from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className="header-container">
        <h3>Hello I'm</h3>
        <h1>Sabita Kumari</h1>
        <h3 className="text-light">Competitive Programmer | Front End Developer</h3>
        <CTA/>
        <HeaderSocial/>
        <div className="containe"><img src={ME}  alt="me" /></div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default header
