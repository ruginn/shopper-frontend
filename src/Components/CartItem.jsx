import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import '../styles/CartItem.css'
import ElementBlockSmall from './ElementBlockSmall'
import { removeItem, changeQty, addItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({item}) {
    const dispatch = useDispatch()
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [qtyData, setQtyData] = useState(item.qtyData)
    
    const changeData = (e) => {
    setQtyData(e.target.value)
    }
    const refOption = useRef()    

    const numComma = (num) =>{
      let num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
    }

    const clickRemove = ()=> {
      dispatch(removeItem(item))
    }

    const onChangeQty = (e) => {
      changeData(e)
      const dataChange = {
        element: item.element,
        qtyData: Number(refOption.current.value)
      }
      dispatch(changeQty(dataChange))
    }

  return (
    <div className='item--main'>
        <Link to={`/products/${(item.element).toLowerCase()}`}><ElementBlockSmall element={item}/></Link>
        <div className='item--mid'>
          <h3>{item.element}</h3>
          <form action="">
                <label htmlFor="Qty">Qty:</label>
                <select name="Qty" id="qty" value={qtyData} ref={refOption} onChange={onChangeQty}>
                  {numbers.map(num => (
                    <option value={num} key={num}>{num} </option>
                  ))}
                </select>
          </form>
          <p>(${numComma(Number(item.unitCost))} each)</p>
        </div>
        <div className='cart--item--right'>
          <h4>${numComma(Math.round(Number(item.unitCost) * Number(item.qtyData) * 100)/100)}</h4>
          <p onClick={clickRemove}>Remove</p>
        </div>     
    </div>
  )
}

export default CartItem