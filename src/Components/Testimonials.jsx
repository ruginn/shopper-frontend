import React from 'react'
import TestimonialCard from './TestimonialCard'
import '../styles/Testimonials.css'
import img1 from '../assets/s1.jpeg'
import img2 from '../assets/s2.jpeg'
import img3 from '../assets/s3.jpeg'
import img4 from '../assets/s4.jpeg'
import img5 from '../assets/s5.jpeg'
import company1 from '../assets/alab.jpeg'
import company2 from '../assets/gulabs.jpeg'
import company3 from '../assets/vlab.jpeg'
import company4 from '../assets/elabs.jpeg'



function Testimonials() {
  return (
    <div className='testimonial--main'>
        <TestimonialCard img={img1} name={'Jeff Smith'} company={company1} role={'Senior Scientist'}/>
        <TestimonialCard img={img3} name={'Judy Lee'} company={company2} role={'Reasearch Associate'}/>
        <TestimonialCard img={img2} name={'Brock Jackson'} company={company3} role={'Lead Researcher'}/>
        <TestimonialCard img={img5} name={'Susan Rogen'} company={company4} role={'Formulation Scientist'}/>

    </div>
  )
}

export default Testimonials