import React from 'react'
import './about.css'
import ME from '../../assets/sitting.jpg'
import {AiOutlineDesktop} from 'react-icons/ai'
import { FaNetworkWired } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
      <h5>What You Need To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaNetworkWired className='about__icon'/>
              <h5>Networking</h5>
            </article>

            <article className="about__card">
              <AiOutlineDesktop className='about__icon'/>
              <h5>Systems</h5>
            </article>

            <article className="about__card">
              <FaLaptopCode className='about__icon'/>
              <h5>Development</h5>
            </article>
          </div>

          <p>
          Driven and results-oriented Network and Systems Engineer with two years of experience, seeking to leverage my expertise in network infrastructure, systems management, and software development to contribute to innovative and impactful solutions at the intermediate level in either network engineering or software development roles.          
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About