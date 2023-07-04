import React, {useEffect} from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import {BsHexagon, BsSearch, BsCart, BsSun} from 'react-icons/bs'
import {BiMoon, BiSun} from 'react-icons/bi'
import { logout } from '../features/auth/authSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'


function NavBar() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const signOut = () => {
    dispatch(logout())
  }
  return (
    <div className='nav--bar'>
        <div className='left--nav'>
            <BsHexagon /> 
            <Link to={`/`}><h1>proteus</h1></Link>
            <Link to={`/products`}>products</Link>
        </div>
        <div className='right--nav'>
            {!user ?<Link to={'/login'}>Sign in</Link>: <p onClick={signOut}>Logout</p>}
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