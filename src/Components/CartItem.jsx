import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../styles/CartItem.css'
import ElementBlockSmall from './ElementBlockSmall'

function CartItem({item}) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [qtyData, setQtyData] = useState(1)
    const changeQty = (e) => {
    setQtyData((prev) => (
      prev = e.target.value)
    )
    }


    const numComma = (num) =>{
      let num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
    }
  console.log(item)
  return (
    <div className='item--main'>
        <Link><ElementBlockSmall element={item}/></Link>
        <div className='item--mid'>
          <h3>{item.element}</h3>
          <form action="">
                <label htmlFor="Qty">Qty:</label>
                <select name="Qty" id="qty" value={item.qtyData} onChange={changeQty}>
                  {numbers.map(num => (
                    <option value={num} key={num}>{num}</option>
                  ))}
                </select>
          </form>
          <p>(${numComma(Number(item.unitCost))} each)</p>
        </div>     
        <h4>${numComma(Math.round(Number(item.unitCost) * Number(item.qtyData) * 100)/100)}</h4>
    </div>
  )
}

export default CartItem