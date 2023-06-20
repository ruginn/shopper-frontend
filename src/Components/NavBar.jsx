import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import {BsHexagon, BsSearch, BsCart} from 'react-icons/bs'


function NavBar() {

  return (
    <div className='nav--bar'>
        <div className='left--nav'>
            <BsHexagon /> 
            <Link to={`/`}><h1>proteus</h1></Link>
            <Link to={`/products`}>products</Link>
        </div>
        <div className='right--nav'>
            <Link>Sign in</Link>
            <Link>Register</Link>
            <Link><BsSearch/></Link>
            <Link><BsCart/> 0</Link>
        </div>
    </div>
  )
}

export default NavBar