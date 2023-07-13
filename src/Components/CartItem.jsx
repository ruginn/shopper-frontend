import React, {useState} from 'react'
import '../styles/CartItem.css'

function CartItem() {
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [qtyData, setQtyData] = useState(1)
    const changeQty = (e) => {
    setQtyData((prev) => (
      prev = e.target.value)
    )
  }
  return (
    <div className='item--main'>
        <p>picture</p>
        <h3>Item name</h3>
        <form action="">
              <label htmlFor="Qty">Qty:</label>
              <select name="Qty" id="qty" value={qtyData} onChange={changeQty}>
                {numbers.map(num => (
                  <option value={num} key={num}>{num}</option>
                ))}
              </select>
        </form>
        <h4>$34.99</h4>
    </div>
  )
}

export default CartItem