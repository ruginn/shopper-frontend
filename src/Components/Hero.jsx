import React from 'react'
import chemSet from  '../assets/chemSet.jpg'
import '../styles/Hero.css'
import {Link} from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero--img'>
      <div className='hero--content'>
        <div className='hero--right'>
          <h1>Welcome to proteus</h1>
          <p>Explore our vast portfolio and see how Proteus can power your journey towards a brighter future.</p>
        </div>
        <Link to='/products'>
          <button>View our products</button>
        </Link>
      </div>
    </div>
  )
}
