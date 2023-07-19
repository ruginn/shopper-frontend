import React from 'react'
import '../styles/ProductCard.css'
import ElementBlock from '../Components/ElementBlock'

function ProductCard({element}) {

  // Generate arbitary cost of element
    const cost = Math.round(element.atomic_mass) * Math.round(element.number) + 0.99
    
    return (
    <div className='product--card--container'>
        <ElementBlock element={element}/>
        <div className='product--card--mid'>
            <h3>{element.name}</h3>
            <p>Category: {element.category}</p>
            <p>Phase: {element.phase}</p>
        </div>
        <div className="product--card--end">
            <h4>${cost}</h4>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard