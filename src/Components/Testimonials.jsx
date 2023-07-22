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
        <TestimonialCard img={img1} name={'Jeff Smith'} company={company1} role={'Senior Scientist'} testimonial='As a company that specializes in cutting-edge research and development, we heavily rely on obtaining high-quality chemicals to ensure accurate and reliable results in our experiments. Proteus has consistently delivered on this front, providing us with a wide range of top-notch chemicals that meet and exceed our stringent standards.'/>
        <TestimonialCard img={img3} name={'Judy Lee'} company={company2} role={'Reasearch Associate'} testimonial='I wholeheartedly recommend Proteus as a trusted supplier of chemicals for any scientific institution or industry. Their dedication to excellence, safety, and customer satisfaction has played a vital role in our research successes here at GU Scientific. We look forward to continuing this fruitful partnership and unlocking new frontiers in science together.'/>
        <TestimonialCard img={img2} name={'Brock Jackson'} company={company3} role={'Lead Researcher'} testimonial='I have had the pleasure of working as a scientist at Voyager Industries for several years, and during this time, I have come across numerous chemical suppliers. Among them, Proteus stands out as a truly exceptional partner in our scientific endeavors. Their ordering process is seamless, and their delivery times are impressively quick. We never have to worry about delays impeding our research progress, which is invaluable in a fast-paced scientific environment.'/>
        <TestimonialCard img={img5} name={'Susan Rogen'} company={company4} role={'Formulation Scientist'} testimonial='What sets Proteus apart from other suppliers is their unwavering commitment to quality and safety. The chemicals they provide are always accompanied by detailed specifications and safety data sheets, allowing us to handle them with utmost confidence. This is of paramount importance in our line of work, where precision and safety go hand in hand.'/>

    </div>
  )
}

export default Testimonials