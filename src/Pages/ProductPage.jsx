import React from 'react'
import {useParams} from 'react-router-dom'
import data from '../periodTable.json'
import ElementBlock from '../Components/ElementBlock'
import '../styles/ProductPage.css'
import SimilarProducts from '../Components/SimilarProducts'
import PeriodicTable from '../Components/PeriodicTable'

function ProductPage() {
  const params = useParams()

  const currElement = data.elements.filter(element => element.name.toLowerCase() === `${params.productId}`)
  const element = currElement[0]
  
  const similar = data.elements.filter(elements => elements.category === element.category)
  const cost = Math.round(element.atomic_mass * element.number * 100)/100
  return (
    
    <div className='product--item--container'>
      <div className='product--main'>
        <div className='pp--left'>
            <ElementBlock element={element} />
          </div>
          <div className='pp--center'>
            <h1>{element.name}</h1>
            <h3>{element.category.toUpperCase()}</h3>
            <p>{element.summary}</p>
            <span className='bold'>First Discovered:</span>
            <span>{element.discovered_by}</span>
          </div>
          <div className='pp--right'>
            <h2>${cost}</h2>
            <button>Request a Quote</button>
            <button className='primary--button'>Add to Cart</button>
          </div>
        </div>
        <div className="product--info">
          <h3>Product Information</h3>
          <div className='product--info--table'>
          <p className='bold'>Chemical Name</p>
          <p>{element.name}</p>
          <p className='bold'>Appearance</p>
          <p>{element.appearance}</p>
          <p className="bold">Chemical Symbol</p>
          <p>{element.symbol}</p>
          <p className='bold'>Atomic Mass (g/mol)</p>
          <p>{Math.round(element.atomic_mass * 100)/100}</p>
          <p className="bold">Boiling Point (K)</p>
          <p>{element.boil}</p>
          <p className="bold">Melting Point (K)</p>
          <p>{element.melt}</p>
          <p className="bold">Phase</p>
          <p>{element.phase}</p>
          <p className="bold">Density</p>
          <p>{element.density}</p>
          </div>
        </div>
        <PeriodicTable currElement={element.name}/>
        <SimilarProducts similar={similar} name={element.name}/>
    </div>

  )
}

export default ProductPage