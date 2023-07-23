import React, {useState, useEffect} from 'react'
import '../styles/Cart.css'
import CartItem from '../Components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../features/cart/cartSlice'


function Cart() {
  const dispatch = useDispatch()
  const cartItem = JSON.parse(localStorage.getItem('cart'))
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

  return (
    <div className='cart--main'>
        {items && <div className='cart--left'>
        {items?items.map((item) => 
          (
            <CartItem item={item} key={item.element}/>
        )
        ):<></>}
        </div>}
        {items.length >= 1 && <div className="cart--right">
          <div className="order--summary">
            <h3>Order Summary</h3>
            <p>Subtotal (1 item)</p>
            <h4>${numComma(Math.round(total * 100)/100)}</h4>
            <p>Estimated Tax</p>
            <p>${numComma(estimatedTax)}</p>
            <h5>Estimated Total</h5>
            <h2>${numComma(estimatedTotal)}</h2>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>}
        {items.length == 0 && <div>
          <h1>There are no items in your cart</h1>
        </div>}
    </div>
  )
}

export default Cart