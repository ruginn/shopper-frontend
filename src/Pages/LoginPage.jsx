import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authSlice'
import '../styles/LoginPage.css'

function LoginPage() {
  const {user, isSuccess} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    'email': '', 
    'password': ''
  })

  useEffect(() =>{
    if(user ) {
      navigate('/')
    }

  }, user, isSuccess)

  const {email, password} = loginData
  const onChange = (e) => {
    setLoginData((prevState) => (
      {
        ...prevState, 
        [e.target.name] : e.target.value
      }
    ))
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    dispatch(login(loginData))
  }
  return (
    <div className='login--main'>
      <div className="login--top">
        <h1>Welcome to Proteus</h1>
        <p>Sign in to your Proteus account</p>
      </div>
      
      <form onSubmit={onSubmit} className='login--mid'>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' name='email' value={email} onChange={onChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' value={password} onChange={onChange}/>
        <Link>Forgot Password</Link>
        <button type='submit'>Sign in</button>
      </form>
      <div className="login--mid">
        <p>or</p>
        <Link to={'/register'}><button>Create Account</button></Link>
      </div>
    </div>
  )
}

export default LoginPage