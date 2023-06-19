import React from 'react'
import {useParams} from 'react-router-dom'
import data from '../periodTable.json'
import ElementBlock from '../Components/ElementBlock'

function ProductPage() {
  const params = useParams()
  // const currElement = params.productId

  const currElement = data.elements.filter(element => element.name.toLowerCase() === `${params.productId}`)
  const element = currElement[0]
  
  console.log(element)
  return (
    
    <div>{element.name}
    
    <ElementBlock element={element} />
    </div>

  )
}

export default ProductPage