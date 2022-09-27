import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Van-Go.png'
import IMG2 from '../../assets/TinyDJ_3D.png'
import IMG3 from '../../assets/Van-Go.png'
import IMG4 from '../../assets/Van-Go.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Van-Go',
    descriptor: 'A puzzle platformer inspired by Vincent Van Gogh\'s Starry Night, created in unity using C#' 
  },
  {
    id: 2,
    image: IMG2,
    title: 'TinyDJ',
    descriptor: 'TinyDJ is a credit card sized DJ controller designed for use with industry standard software.  ' /*Required knowledge of microcontrollers and basic electical engineering principles'*/
  },
  {
    id: 3,
    image: IMG3,
    title: 'Van-Go',
    descriptor: 'A puzzle platformer inspired by Vincent Van Gogh\'s Starry Night, created in unity using C#' 
  },
  {
    id: 4,
    image: IMG4,
    title: 'Van-Go',
    descriptor: 'A puzzle platformer inspired by Vincent Van Gogh\'s Starry Night, created in unity using C#' 
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, descriptor}) => {
            return (
              <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <h5>{descriptor}</h5>
            </div>
          </article>
            )
          }) 
        } 
      </div>
    </section>
  )
}

export default Portfolio