import React, {useEffect} from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import data from '../periodTable.json'
import {Link} from 'react-router-dom'
import ElementBlock from '../Components/ElementBlock'
import '../styles/Products.css'
import ProductCard from '../Components/ProductCard'

export default function Products() {
  // const filterElements = data.elements.filter((element) => element.name.toLowerCase().includes('hydro'))
  // console.log(filterElements)
  const searcher = useSelector((state) => state.general.search)
  const elements = useSelector((state) => state.general.chemicals)
  

  
  return (
    <div className='product--container'>
        {/* <ProductCard element={elements[0]}/> */}
        {elements.map((element) => (
        <div key={element.name}>
            <Link to={`/products/${element.name.toLowerCase()}`}>
            <ProductCard element={element}/>
            </Link>
        </div>
      ))}
    </div>
  )
}
