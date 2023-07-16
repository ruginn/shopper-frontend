import React from 'react'
import scientist from '../assets/groupofscientist.jpeg'
import '../styles/LowerHero.css'

function LowerHero() {
  return (
    <div className='lower--hero--main'>
        <div className="lh--left">
            <p></p>
        </div>
        <div className="lh--right">
            <img src={scientist} alt="" loading='lazy'/>
        </div>
    </div>
  )
}

export default LowerHero