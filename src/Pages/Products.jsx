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
        <div className='product--filter'>
          <div>
            <h2>Filter</h2>
            <h4>Product A-Z</h4>
            <h4>Product Z-A</h4>
            <h4>Category</h4>
            <p>-Diatomic Nonmetal</p>
            <p>-Noble Gas</p>
            <p>-Alkali Metal</p>
            <p>-Alkaline Earth Metal</p>
            <p>-Metalloid</p>
            <p>-Polyatomic Nonmetal</p>
            <p>-Post-Transitional Metal</p>
            <p>-Lanthanide</p>
            <p>-Actinide</p>
            <p>-Unknown</p>
            <h4>Phase (at room temp)</h4>
            <p>-Solid</p>
            <p>-Liquid</p>
            <p>-Gas</p>
          </div>
        </div>
        <div className='product--right'>
          {elements.map((element) => (
          <div key={element.name}>
              {/* <Link to={`/products/${element.name.toLowerCase()}`}> */}
              <ProductCard element={element}/>
              {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  )
}
