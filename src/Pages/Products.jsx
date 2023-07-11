import React, {useEffect} from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import data from '../periodTable.json'
import {Link} from 'react-router-dom'
import ElementBlock from '../Components/ElementBlock'
import '../styles/Products.css'

export default function Products() {
  // const filterElements = data.elements.filter((element) => element.name.toLowerCase().includes('hydro'))
  // console.log(filterElements)
  const searcher = useSelector((state) => state.general.search)
  let filterElements = []
  useEffect(() => {
    filterElements = data.elements.filter((element) => element.name.toLowerCase().includes(`${searcher.searchPara}`))
    console.log(searcher.searchPara)
    console.log(filterElements.length)
    console.log(filterElements[0]?.name)
  }, [searcher, filterElements])

  
  return (
    <div className='product--container'>
        {filterElements.length < 0 ? `yes` : 'no'}
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
