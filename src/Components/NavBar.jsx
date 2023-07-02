import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import {BsHexagon, BsSearch, BsCart, BsSun} from 'react-icons/bs'
import {BiMoon, BiSun} from 'react-icons/bi'


function NavBar() {

  return (
    <div className='nav--bar'>
        <div className='left--nav'>
            <BsHexagon /> 
            <Link to={`/`}><h1>proteus</h1></Link>
            <Link to={`/products`}>products</Link>
        </div>
        <div className='right--nav'>
            <Link to={'/login'}>Sign in</Link>
            <Link to={'/register'}>Register</Link>
            <Link><BsSearch/></Link>
            <Link to={'/cart'}><BsCart/> 0</Link>
            <BiSun />
            <BiMoon />
        </div>
    </div>
  )
}

export default NavBar