import React from 'react'
import CV from './CV_JoshEngert.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="CV_JoshEngert.pdf" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>    
    </div>
  )
}

export default CTA