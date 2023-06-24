import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <div className="foot--top"></div>
         <Link to={`/`}><h1>proteus</h1></Link>
      <div className="foot--mid">
        <p>middle</p>
      </div>
      <div className="foot--bottom">
        <p>testing</p>
      </div>
    </div>
  )
}

export default Footer