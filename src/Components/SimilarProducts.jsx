import React, {useRef} from 'react'
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


const sideScroll = useRef(null)


const scrollLeft = () => {
  sideScroll.current.scrollLeft -= 700
}

const scrollRight = () => {
  sideScroll.current.scrollLeft += 700
}





return (
    <div className='similar--products'>
        <h3>Similar Elements</h3>
        <div className='sp--outer--container'>
           <BsFillArrowLeftCircleFill onClick={scrollLeft}/>
        <div className='sp--container' ref={sideScroll}>
            {/* <BsFillArrowLeftCircleFill /> */}
            {otherElements.map((element) => (
                <Link to={`/products/${element.name.toLowerCase()}`} key={element.name}>
                    <ElementBlock element={element}/>
                    <p>{element.name}</p>
                </Link>
            ))}
            {/* <BsFillArrowRightCircleFill /> */}
        </div>
        <BsFillArrowRightCircleFill  onClick={scrollRight}/>
        </div>

    </div>
  )
}

export default SimilarProducts