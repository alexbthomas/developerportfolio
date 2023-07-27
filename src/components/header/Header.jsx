import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/kuttu_wedding.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alex Thomas</h1>
        <h5 className="text-light">Computer Science Student</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header