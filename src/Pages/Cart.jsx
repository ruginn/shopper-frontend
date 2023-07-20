import React, {useState, useEffect} from 'react'
import '../styles/Cart.css'
import CartItem from '../Components/CartItem'


function Cart() {
  const cartItem = JSON.parse(localStorage.getItem('cart'))
  const [totalCost, setTotalCost] = useState(0)
  let tax 
  useEffect(() => {
    if (cartItem){
      for (let i = 0; i <= cartItem.length -1; i++){

        let itemCost = Number(cartItem[i].qtyData) * Number(cartItem[i].unitCost)

        setTotalCost(prev => prev + itemCost)
      }
    }
    tax = Math.round(totalCost * 0.06 *100)/100
  },[])

  const numComma = (num) =>{
    let num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

  let subTotal = (Math.round(totalCost *100)/100)
  let estimatedTax = (Math.round(totalCost * 0.065 *100)/100)

  return (
    <div className='cart--main'>
        {cartItem && <div className='cart--left'>
        {cartItem?cartItem.map((item) => 
          (
            <CartItem item={item} key={item.element}/>
        )
        ):<></>}
        </div>}
        {cartItem && <div className="cart--right">
          <div className="order--summary">
            <h3>Order Summary</h3>
            <p>Subtotal (1 item)</p>
            <h4>${numComma(subTotal)}</h4>
            <p>Estimated Tax</p>
            <p>${numComma(estimatedTax)}</p>
            <h5>Estimated Total</h5>
            <h2>${numComma(Math.round((subTotal + estimatedTax)*100)/100)}</h2>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>}
        {!cartItem && <div>
          <h1>There are no items in your cart</h1>
        </div>}
    </div>
  )
}

export default Cart