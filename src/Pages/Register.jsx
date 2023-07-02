import React from 'react'
import {Link} from 'react-router-dom'

function Register() {
  return (
    <div>
        <div className='register--left'>
            <h3>Create Account</h3>
            <p>Create your Proteus account to start earing points and rewards today</p>
            <form action="">
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Password</label>
                <input type="password" />
                <label htmlFor="">Phone</label>
                <input type="numbers" />
            </form>
            <p>By clicking 'Create Account', I acknowledge and agree to Proteus' Privacy Policy, Condition of Use, and the Proteus Terms and Conditions</p>
            <button>Create Account</button>
            <p>or</p>
            <Link to='/login'><button>Sign in</button></Link>
        </div>
        <div className="register--right"></div>
    </div>
  )
}

export default Register