import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {

  return (
    <div className='nav--bar'>
        <div className='left--nav'>
            <Link to={`/`}><h1>proteus</h1></Link>
            <Link to={`/products`}>products</Link>
        </div>
        <div className='right--nav'>
            <Link>Sign In</Link>
            <Link>Register</Link>
            <Link>Search</Link>
            <Link>Cart</Link>
        </div>
    </div>
  )
}

export default NavBar