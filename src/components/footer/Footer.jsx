import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Josh Engert</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/joshengert" target="_blank" rel="noreferrer">fb</a>
        <a href="https://instagram.com/josh_engert" target="_blank" rel="noreferrer">ig</a>
        <a href="https://linkedin.com/in/joshengert" target="_blank" rel="noreferrer">li</a>
      </div>

      {/* <div className="footer__copyright">
        <small>
          &copy; Josh Engert. All Rights Reserved.
        </small> 
  </div>*/}
    </footer>
  )
}

export default Footer