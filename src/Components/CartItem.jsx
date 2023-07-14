import React, {useState} from 'react'
import '../styles/CartItem.css'
import ElementBlock from './ElementBlock'

function CartItem({item}) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [qtyData, setQtyData] = useState(1)
    const changeQty = (e) => {
    setQtyData((prev) => (
      prev = e.target.value)
    )
    }
  console.log(item)
  return (
    <div className='item--main'>
        <ElementBlock element={item}/>
        <h3>{item.element}</h3>
        <form action="">
              <label htmlFor="Qty">Qty:</label>
              <select name="Qty" id="qty" value={item.qtyData} onChange={changeQty}>
                {numbers.map(num => (
                  <option value={num} key={num}>{num}</option>
                ))}
              </select>
        </form>
        <p>${Number(item.unitCost)}</p>
        <h4>${Math.round(Number(item.unitCost) * Number(item.qtyData) * 100)/100}</h4>
    </div>
  )
}

export default CartItem