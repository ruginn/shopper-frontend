import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProductCard.css'
import ElementBlock from '../Components/ElementBlock'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

function ProductCard({element}) {
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
        unitCost: cost,
  
      }
      dispatch(addItem(sendData))
    }
    return (
    <div className='product--card--container'>
        <Link to={`/products/${element.name.toLowerCase()}`}> 
        <ElementBlock element={element}/>
        <div className='product--card--mid'>
            <h3>{element.name}</h3>
            <p>Category: {element.category}</p>
            <p>Phase: {element.phase}</p>
        </div>
        </Link>
        <div className="product--card--end">
            <h4>${cost}</h4>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard