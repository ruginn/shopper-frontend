import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProductCard.css'
import ElementBlock from '../Components/ElementBlock'
import { useDispatch } from 'react-redux'
import { addItem, updateCartItems } from '../features/cart/cartSlice'
import { useSelector } from 'react-redux'

function ProductCard({element}) {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  // Generate arbitary cost of element
    const cost = Math.round(element.atomic_mass) * Math.round(element.number) + 0.99
    
    // const addToCart = () => {
    //   console.log(`${element.name} pressed`)
    // }

    const addToCart = () =>{
      const sendData = {
        element: element.name,
        name: element.name,
        atomic_mass: element.atomic_mass,
        symbol: element.symbol, 
        number: element.number,
        qtyData: 1, 
        maxQty: false, 
        unitCost: cost,
  
      }
      dispatch(addItem(sendData))
      if (user) {
        dispatch(updateCartItems())
      }
    }

    const numComma = (num) =>{
      let num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
    }

    return (
    <div className='product--card--container'>
        <Link to={`/products/${element.name.toLowerCase()}`}> 
        <ElementBlock element={element}/>
        <div className='product--card--mid'>
            <h3>{element.name}</h3>
            <p>Category: {element.category[0].toUpperCase() + element.category.slice(1)}</p>
            <p>Phase: {element.phase}</p>
        </div>
        </Link>
        <div className="product--card--end">
            <h4>${numComma(cost)}</h4>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard