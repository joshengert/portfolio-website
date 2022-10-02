import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Van-Go.png'
import IMG2 from '../../assets/TinyDJ_3D.png'
import IMG3 from '../../assets/Mandelbrot_Generator.png'
import IMG4 from '../../assets/3D_Engine.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Van-Go',
    descriptor: 'A puzzle platformer inspired by Vincent Van Gogh\'s Starry Night, created in unity using C#.' ,
    link: '#portfolio'
  },
  {
    id: 2,
    image: IMG2,
    title: 'TinyDJ',
    descriptor: 'TinyDJ is a credit card sized DJ controller designed for use with industry standard software.',
    link: '#portfolio'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Multi-Threaded Mandelbrot Generator',
    descriptor: 'A mandelbrot generator that runs on a number of threads specified by the user.',
    link: '#portfolio'
  },
  {
    id: 4,
    image: IMG4,
    title: '3D Engine',
    descriptor: 'An OpenGL 3D engine with lighting effects, fog and transparency, made with C++.', 
    link: '#portfolio'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, descriptor, link}) => {
            return (
            <a href={link}>
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <h4>{descriptor}</h4>
                </div>
              </article>
              </a>
            )
          }) 
        } 
      </div>
    </section>
  )
}

export default Portfolio