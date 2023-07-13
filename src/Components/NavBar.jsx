import React, {useEffect, useRef, useState} from 'react'
import '../styles/NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import {BsHexagon, BsSearch, BsCart, BsSun} from 'react-icons/bs'
import {BiMoon, BiSun} from 'react-icons/bi'
import { logout } from '../features/auth/authSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { changeMode } from '../features/general'
import { getItems } from '../features/cart/cartSlice'
import { searchParas } from '../features/general'


function NavBar() {
  const searcher = useSelector((state) => state.general.search)
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const mode = useSelector((state) => state.general.mode)
  const signOut = () => {
    dispatch(logout())
  }
  const activateMode = () => {
    dispatch(changeMode())
  }
  
  const {cartItems} = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getItems())
  },[])

  const searchBar = useRef()

  const clickSearch = () => {
    searchBar.current.focus()
  }

  const onSearch = (e) => {
    e.preventDefault()
    navigate('/products')
    console.log(searchPara)
  }

  const [searchVal, setSearchVal] = useState({
    searchPara: ''
  })
  const {searchPara} = searchVal

  const changeSearch = (e) => {
    setSearchVal((prev) => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }

  useEffect(()=>{
    dispatch(searchParas(searchVal))
  },[searchVal])

  return (
    <div className='nav--bar'>
        <div className='left--nav'>
            <BsHexagon /> 
            <Link to={`/`}><h1>proteus</h1></Link>
            <Link to={`/products`}>products</Link>
        </div>
        <div className="search--nav" onClick={clickSearch}>
          <form action="submit" onSubmit={onSearch}>
            <input type="text" placeholder='Search' ref={searchBar} name='searchPara' value={searchPara} onChange={changeSearch} />
            <button><BsSearch/></button>
          </form>
        </div>
        <div className='right--nav'>
            {!user ?<Link to={'/login'}>Sign in</Link>: <p onClick={signOut}>Logout</p>}
            <Link to={'/register'}>Register</Link>
            <Link to={'/cart'}><BsCart/>{cartItems}</Link>
            {mode === 'light'?<BiSun onClick={activateMode}/>:
            <BiMoon onClick={activateMode}/>}
        </div>
    </div>
  )
}

export default NavBar