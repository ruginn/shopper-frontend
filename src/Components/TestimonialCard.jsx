import React from 'react'
import '../styles/TestimonialCard.css'

function TestimonialCard({img, name, company, role, testimonial }) {
  return (
    <div className='tcard--main'>
        <img src={img} alt="" loading='lazy' className='test--img'/>
        <h3>{name}</h3>
        <p>{role}</p>
        <div className='tcomp--container'>
          <img src={company} alt="" loading='lazy' className='company--img'/>
        </div>
        {/* <img src={company} alt="" loading='lazy' className='company--img'/> */}
        <p>{testimonial}</p>
    </div>
  )
}

export default TestimonialCard