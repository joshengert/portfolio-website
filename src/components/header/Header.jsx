import React from 'react'
import './header.css'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Josh Engert</h1>
        <h5 className="text-light">Network Engineer and Software Developer</h5>
        <HeaderSocial />
      </div>
    </header>
  )
}

export default Header