import React from 'react'
import Hero from '../Components/Hero'
import HomeMiddle from '../Components/HomeMiddle'
import Testimonials from '../Components/Testimonials'
import LowerHero from '../Components/LowerHero'

function Home() {
  return (
    <div>
      <Hero />
      <HomeMiddle />
      <LowerHero />
      <Testimonials />
    </div>
  )
}

export default Home