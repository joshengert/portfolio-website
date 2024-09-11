import React from 'react'
import './experience.css'

import {SiCplusplus} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import { SiDotnet } from "react-icons/si";
import {TbBrandHtml5} from 'react-icons/tb'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import { SiKubernetes } from "react-icons/si";
import { SiDocker } from "react-icons/si";

import {SiGithub} from 'react-icons/si'
import { SiMicrosoftazure } from "react-icons/si";
import { SiCisco } from "react-icons/si";
import { SiFortinet } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa";
import { SiJenkins } from "react-icons/si";




const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
    
      <div className="container experience__container">
        <div className="experience__languages">
          <h3>Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiCplusplus className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiDotnet className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
              </div>
            </article>
            <article className='experience__details'>
              <div className='experience__detals-icon__group'><TbBrandHtml5 className='experience__details-icon'/><TbBrandCss3 className='experience__details-icon'/><TbBrandJavascript className='experience__details-icon'/></div>
              <div>
                <h4>HTML, CSS, JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiDocker className='experience__details-icon'/>
              <div>
                <h4>Docker</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiKubernetes className='experience__details-icon'/>
              <div>
                <h4>Kubernetes</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__other">
          <h3>Systems</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiGithub className='experience__details-icon'/>
              <div>
                <h4>Source Control</h4>
              </div>
            </article>
            <a>
              <article className='experience__details'>
                <SiMicrosoftazure className='experience__details-icon'/>
                <div>
                  <h4>Azure</h4>
                </div>
              </article>
            </a>
 
            <article className='experience__details'>
              <SiCisco className='experience__details-icon'/>
              <div>
                <h4>Cisco</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiFortinet className='experience__details-icon'/>
              <div>
                <h4>Fortinet</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCloudflare className='experience__details-icon'/>
              <div>
                <h4>Cloudflare</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiJenkins className='experience__details-icon'/>
              <div>
                <h4>Jenkins</h4>
              </div>
            </article>


          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience