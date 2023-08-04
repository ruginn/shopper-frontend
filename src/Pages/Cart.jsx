import React, {useState, useEffect} from 'react'
import '../styles/Cart.css'
import CartItem from '../Components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../features/cart/cartSlice'
import { checkoutSession } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'


function Cart() {
  const dispatch = useDispatch()
  const cartItem = JSON.parse(localStorage.getItem('cart'))
  const {cartItems} = useSelector((state) => state.cart)
  const items = useSelector((state) => state.cart.elementsInCart)
  const total = useSelector((state) => state.cart.total)
  useEffect(() => {
    dispatch(getItems())
  },[])
  
  

  const numComma = (num) =>{
    let num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

  let subTotal = (Math.round(total *100)/100)
  let estimatedTax = (Math.round(total * 0.065 *100)/100)
  let estimatedTotal = (Math.round((subTotal + estimatedTax)*100)/100)
  
  const clickCheckout = () =>{
    const totalData = {
      subTotal, 
      estimatedTax, 
      estimatedTotal
    }
    dispatch(checkoutSession(totalData))
  }

  console.log(cartItems)
  return (
    <div className='cart--main'>
        {items && <div className='cart--left'>
        {items?items.map((item) => 
          (
            <CartItem item={item} key={item.element}/>
        )
        ):<></>}
        </div>}
        {items?.length >= 1 && <div className="cart--right">
          <div className="order--summary">
            <h3>Order Summary</h3>
            <p>Total ({cartItems} Item{cartItems > 1?'s':''})</p>
            <h2>${numComma(Math.round(total * 100)/100)}</h2>
            {/* <p>Estimated Tax</p>
            <p>${numComma(estimatedTax)}</p>
            <h5>Estimated Total</h5>
            <h2>${numComma(estimatedTotal)}</h2> */}
            <button onClick={clickCheckout}>Checkout</button>
          </div>
        </div>}
        {/* {items?.length === 0 || cartItems === 0 &&  */}
        {cartItems === 0 && 
          <div className='empty--cart'>
            <h1>Your cart is empty</h1>
            <Link to='/products'>Take a look at some of our products</Link>
          </div>}
    </div>
  )
}

export default Cart