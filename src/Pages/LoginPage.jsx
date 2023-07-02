import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div>
      <h3>Welcome to Proteus</h3>
      <p>Sign in to your Proteus account</p>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <Link>Forgot Password</Link>
        <button type='button'>Sign in</button>
      </form>
      <p>or</p>
      <Link to={'/register'}><button>Create Account</button></Link>
    </div>
  )
}

export default LoginPage