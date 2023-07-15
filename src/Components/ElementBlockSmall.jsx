import React from 'react'
import '../styles/ElementBlockSmall.css'

function ElementBlock({element}) {

  return (
    <div className='element--container--small'>
        <div className='ec--top--small'>
            <h3>{element.number}</h3>
            <p>{Math.round(element.atomic_mass * 100)/100}</p>
        </div>
        <div className='ec--mid--small'>
            <h1>{element.symbol}</h1>
        </div>
        <div className='ec--bottom--small'>
            <p>{element.name}</p>
        </div>
    </div>
  )
}

export default ElementBlock