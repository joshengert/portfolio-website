import React from 'react'
import './about.css'
import ME from '../../assets/mixing.jpg'
import {AiOutlineDesktop} from 'react-icons/ai'
import {SiArduino} from 'react-icons/si'
import {BsController} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>What You Need To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineDesktop className='about__icon'/>
              <h5>Desktop Development</h5>
            </article>

            <article className="about__card">
              <SiArduino className='about__icon'/>
              <h5>Embedded Systems</h5>
            </article>

            <article className="about__card">
              <BsController className='about__icon'/>
              <h5>Game Development</h5>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore officiis fugiat, obcaecati expedita earum deleniti, numquam harum veniam, esse cum unde? Omnis harum corrupti doloribus temporibus eius facere repudiandae explicabo?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About