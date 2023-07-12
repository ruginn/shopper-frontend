import React from 'react'
import '../styles/Cart.css'
import CartItem from '../Components/CartItem'

function Cart() {
  return (
    <div className='cart--main'>
        <div className='cart--left'>
        <CartItem />
        <CartItem />
        </div>
        <div className="cart--right">
        <div className="order--summary">
          <h3>Order Summary</h3>
          <p>Subtotal (1 item)</p>
          <p>$37.99</p>
          <p>Estimated Tax</p>
          <p>$3.46</p>
          <h5>Estimated Total</h5>
          <h5>$42.99</h5>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        </div>
    </div>
  )
}

export default Cart