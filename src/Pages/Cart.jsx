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
        console.log(cartItem[i].element)
        let itemCost = cartItem[i].qtyData * cartItem[i].unitCost
        console.log(itemCost)
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
            <h4>${numComma(Math.round(totalCost *100)/100)}</h4>
            <p>Estimated Tax</p>
            <p>${numComma(Math.round(totalCost * 0.065 *100)/100)}</p>
            <h5>Estimated Total</h5>
            <h2>${Math.round(numComma((Math.round(totalCost * 100)/ 100) + Math.round(totalCost * 0.06 *100)/100)*100)/100}</h2>
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