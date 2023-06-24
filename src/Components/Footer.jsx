import React from 'react'
import {Link} from 'react-router-dom'
import {BsHexagon, BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

import '../styles/Footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <div className="foot--top">
        <Link to={`/`}>
          <BsHexagon />
          <h1>proteus</h1>
        </Link>
        <div className='foot--top--right'>
          <h4>FOLLOW US</h4>
          <a href="http://www.facebook.com" target='_blank'><BsFacebook /></a>
          <a href="http://www.instagram.com" target='_blank'><BsInstagram /></a>
          <a href="http://www.twitter.com" target='_blank'><BsTwitter /></a>
        </div>
      </div>
      <div className="foot--mid">
        <p>middle</p>
      </div>
      <div className="foot--bottom">
        <p>Proteus Labs, LLC All Rights Reserved</p>
        <p>Privacy & Security</p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  )
}

export default Footer