import React from 'react'
import './experience.css'

import {SiCplusplus} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {TbBrandHtml5} from 'react-icons/tb'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiSwift} from 'react-icons/si'
import {SiLua} from 'react-icons/si'

import {SiGithub} from 'react-icons/si'
import {DiScrum} from 'react-icons/di'
import {GiOrange} from 'react-icons/gi'
import {SiOpengl} from 'react-icons/si'
import {SiUnrealengine} from 'react-icons/si'
import {SiUnity} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {BiMicrochip} from 'react-icons/bi'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
    
      <div className="container experience__container">
        <div className="experience__languages">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiCplusplus className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCsharp className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className='experience__details'>
              <div className='experience__detals-icon__group'><TbBrandHtml5 className='experience__details-icon'/><TbBrandCss3 className='experience__details-icon'/><TbBrandJavascript className='experience__details-icon'/></div>
              <div>
                <h4>HTML, CSS, JS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiSwift className='experience__details-icon'/>
              <div>
                <h4>Swift</h4>
                <small className='text-light'>Small Project Completed</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiLua className='experience__details-icon'/>
              <div>
                <h4>Lua</h4>
                <small className='text-light'>Small Project Completed</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__other">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiGithub className='experience__details-icon'/>
              <div>
                <h4>Source Control</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <a href="https://courses.edx.org/certificates/a95cacc81c5649dab88eb81fe0f3e2e2" target="_blank" rel='noreferrer'>
              <article className='experience__details'>
                <BiMicrochip className='experience__details-icon'/>
                <div>
                  <h4>Embedded Systems</h4>
                  <small className='text-light'>Embedded Systems Essentials with Arm Professional Certificate</small>
                </div>
              </article>
            </a>
 
            <article className='experience__details'>
              <GiOrange className='experience__details-icon'/>
              <div>
                <h4>JUCE</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className='experience__details'>
              <div className='experience__detals-icon__group'><SiOpengl className='experience__details-icon'/><SiUnrealengine className='experience__details-icon'/><SiUnity className='experience__details-icon'/></div>
              <div>
                <h4>3D Engines/Libraries</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiScrum className='experience__details-icon'/>
              <div>
                <h4>Scrum Methodology</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>


          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience