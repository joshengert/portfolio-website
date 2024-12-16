import React from 'react'
import './header.css'
import HeaderSocial from './HeaderSocials'
import ME from '../../assets/cover_pic.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 style={{ color: "#b3DEC1"}}>Josh Engert</h1>
        <h5 className="text-light">Network Engineer and Software Developer</h5>
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header