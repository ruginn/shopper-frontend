import React, {useEffect} from 'react'
import Hero from '../Components/Hero'
import HomeMiddle from '../Components/HomeMiddle'
import Testimonials from '../Components/Testimonials'
import LowerHero from '../Components/LowerHero'
import { useSelector, useDispatch } from 'react-redux'
import { getCartItems } from '../features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    if(user){
      dispatch(getCartItems())
    }
  },[navigate])

  return (
    <div>
      <Hero />
      <HomeMiddle />
      <LowerHero />
      <Testimonials />
    </div>
  )
}

export default Home