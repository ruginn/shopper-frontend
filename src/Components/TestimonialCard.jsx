import React from 'react'
import '../styles/TestimonialCard.css'

function TestimonialCard({img, name, company, role, }) {
  return (
    <div className='tcard--main'>
        <img src={img} alt="" loading='lazy' className='test--img'/>
        <h3>{name}</h3>
        <p>{role}</p>
        <div className='tcomp--container'>
          <img src={company} alt="" loading='lazy' className='company--img'/>
        </div>
        {/* <img src={company} alt="" loading='lazy' className='company--img'/> */}
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, ex qui! Id consectetur 
            rerum nobis ipsam aperiam repellendus, vitae accusantium laboriosam. Non perspiciatis possimus consectetur 
            ipsum blanditiis voluptatem, delectus molestiae?</p>
    </div>
  )
}

export default TestimonialCard