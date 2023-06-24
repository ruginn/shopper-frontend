import React from 'react'
import '../styles/SimilarProduct.css'
import ElementBlock from './ElementBlock'
import { Link } from 'react-router-dom'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'


function SimilarProducts({similar, name}) {


const otherElements = similar.filter(elements => elements.name !== name)

const perChunk = 4 // items per chunk    

const result = otherElements.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/perChunk)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])

console.log(result)




// console.log(chunk)


return (
    <div className='similar--products'>
        <h3>Similar Products</h3>
        <div className='sp--outer--container'>
           <BsFillArrowLeftCircleFill />
        <div className='sp--container'>
            {/* <BsFillArrowLeftCircleFill /> */}
            {otherElements.slice(0, 4).map((element) => (
                <Link to={`/products/${element.name.toLowerCase()}`} key={element.name}>
                    <ElementBlock element={element}/>
                </Link>
            ))}
            {/* <BsFillArrowRightCircleFill /> */}
        </div>
        <BsFillArrowRightCircleFill />
        </div>

    </div>
  )
}

export default SimilarProducts