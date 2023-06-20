import React from 'react'
import chemSet from  '../assets/chemSet.jpg'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <div>
    <img src={chemSet} alt="" className='hero--img' />
    </div>
  )
}
