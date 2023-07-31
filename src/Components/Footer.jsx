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
        <div>
          <h4>Get Help</h4>
          <p><Link to ='/faq'>Frequenty Asked Questions</Link></p>
          <p>Order Status</p>
          <p><Link to='/recalls'>Recall Notice</Link></p>
          <p><Link to='/returns'>Returns</Link></p>
        </div>
        <div>
          <h4>Legal and Privacy</h4>
          <p>Privacy Rights</p>
          <p>Transparancy Act</p>
          <p>Conditions of Use</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h4>About Us</h4>
          <p>Accessibility</p>
          <p>Affiliates</p>
          <p>Careers</p>
          <p>Investors</p>
        </div>
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