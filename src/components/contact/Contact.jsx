import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2> Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" onClick={(e) => {
                                              e.preventDefault();
                                              window.open('mailto:joshengert@hotmail.com', '_blank');}}>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>joshengert@hotmail.com</h5>
            <a>Send a Message</a>
          </article>
          <article className="contact__option" onClick={(e) => {
                                                e.preventDefault();
                                                window.open('https://m.me/joshengert', '_blank');}}>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Josh Engert</h5>
            <a>Send a Message</a>
          </article>
        </div>
        {/*end of contact options*/}
      </div>
    </section>
  )
}

export default Contact