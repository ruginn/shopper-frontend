import React from 'react'
import '../styles/ElementBlock.css'

function ElementBlock({element}) {

  return (
    <div className='element--container'>
        <div className='ec--top'>
            <h3>{element.number}</h3>
            <p>{Math.round(element.atomic_mass * 100)/100}</p>
        </div>
        <div className='ec--mid'>
            <h1>{element.symbol}</h1>
        </div>
        <div className='ec--bottom'>
            <p>{element.name}</p>
        </div>
    </div>
  )
}

export default ElementBlock