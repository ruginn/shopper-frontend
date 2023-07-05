import React from 'react'
import chemSet from  '../assets/chemSet.jpg'
import '../styles/Hero.css'
import {Link} from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero--img'>
      <div className='hero--content'>
        <h1>Welcome to proteus</h1>
        <Link to='/products'>
          <button>View our products</button>
        </Link>
      </div>
    </div>
  )
}
