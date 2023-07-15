import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'
import '../styles/Register.css'

function Register() {
    const dispatch = useDispatch()
    const [registerData, setRegisterData] = useState({
        'firstName': '', 
        'lastName': '',
        'email' : '', 
        'password': '',
        'phone': '', 
    })
    const {firstName, lastName, email, password, phone} = registerData
    const onChange = (e) => {
        setRegisterData((prevState) => (
            {
                ...prevState, 
                [e.target.name]: e.target.value
            }
        ))
    }

    const onSubmit = (e) =>{
        // dispatch(reset)
        e.preventDefault()
        console.log(registerData)
        dispatch(register(registerData))
    }
  
  
    return (
    <div className='register--main'>
        <div className='register--left'>
            <h3>Create Account</h3>
            <p>Create your Proteus account to start earing points and rewards today</p>
            <form onSubmit={onSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' id='firstName' value={firstName} onChange={onChange}/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' id='lastName' value={lastName} onChange={onChange}/>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' value={email} onChange={onChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' value={password} onChange={onChange} />
                <label htmlFor="phone">Phone</label>
                <input type="text" id='phone' name='phone' value={phone} onChange={onChange} />
            </form>
            <p>By clicking 'Create Account', I acknowledge and agree to Proteus' Privacy Policy, Condition of Use, and the Proteus Terms and Conditions</p>
            <button onClick={onSubmit}>Create Account</button>
            <p>or</p>
            <Link to='/login'><button>Sign in</button></Link>
        </div>
        <div className="register--right">
            <h1>Sign up for your FREE Proteus account and enjoy these benefits:</h1>
            <h3>Exclusive Rates</h3>
            <p>Custom same-day quotations</p>
            <h3>Order Tracking</h3>
            <p>Check the current status on all your orders</p>
            <h3>Speedy Checkout</h3>
            <p>Save you info for a quick checkout</p>
        </div>
    </div>
  )
}

export default Register