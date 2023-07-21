import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import data from '../periodTable.json'
import {Link} from 'react-router-dom'
import '../styles/Products.css'
import ProductCard from '../Components/ProductCard'
import { searchParas } from '../features/general'

export default function Products() {
  // const filterElements = data.elements.filter((element) => element.name.toLowerCase().includes('hydro'))
  // console.log(filterElements)
  const dispatch = useDispatch()
  const searcher = useSelector((state) => state.general.search)
  const elements = useSelector((state) => state.general.chemicals)
  
  const [searchVal, setSearchVal] = useState({
    searchPara: ''
  })
  const {searchPara} = searchVal

  const filter = (e) => {
    setSearchVal((prev) => (
      {
        ...prev,
        searchPara: e.target.outerText
      }
    ))
    dispatch(searchParas(searchVal))
  }



  
  return (
    <div className='product--container'>
        <div className='product--filter'>
          <div>
            <h2>Filter</h2>
            <h4>Category</h4>
            <div className='filter--button'>
              <button onClick={filter}>Diatomic Nonmetal</button>
              <button onClick={filter}>Noble Gas</button>
              <button onClick={filter}>Alkali Metal</button>
              <button onClick={filter}>Alkaline Earth Metal</button>
              <button onClick={filter}>Metalloid</button>
              <button onClick={filter}>Polyatomic Nonmetal</button>
              <button onClick={filter}>Post-Transition Metal</button>
              <button onClick={filter}>Lanthanide</button>
              <button onClick={filter}>Actinide</button>
              <button onClick={filter}>Unknown</button>
            </div>
            <h4>Phase (at room temp)</h4>
            <div className='filter--button'>
              <button onClick={filter}>Solid</button>
              <button onClick={filter}>Liquid</button>
              <button onClick={filter}>Gas</button>
            </div>
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
