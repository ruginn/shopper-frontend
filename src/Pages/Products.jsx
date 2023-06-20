import React from 'react'
import data from '../periodTable.json'
import {Link} from 'react-router-dom'
import ElementBlock from '../Components/ElementBlock'
import '../styles/Products.css'

export default function Products() {
  return (
    <div className='product--container'>
        {data.elements.map((element) => (
        <div key={element.name}>
            <Link to={`/products/${element.name.toLowerCase()}`}>
            <ElementBlock element={element}/>
            </Link>
        </div>
      ))}

    </div>
  )
}
