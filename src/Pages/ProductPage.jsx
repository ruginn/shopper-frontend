import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import data from '../periodTable.json'
import ElementBlock from '../Components/ElementBlock'
import '../styles/ProductPage.css'
import SimilarProducts from '../Components/SimilarProducts'
import PeriodicTable from '../Components/PeriodicTable'
import { addItem, getItems } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import QuoteModal from '../Components/QuoteModal'


function ProductPage() {
  const params = useParams()
  const dispatch = useDispatch()
  const [quoteModal, setQuoteModal] = useState(false)

  const currElement = data.elements.filter(element => element.name.toLowerCase() === `${params.productId}`)
  const element = currElement[0]
  
  const similar = data.elements.filter(elements => elements.category === element.category)
  
  // Generate arbitary cost of element
  const cost = Math.round(element.atomic_mass) * Math.round(element.number) + 0.99

  const numComma = (num) =>{
    let num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

  const addItemToCart = () =>{
    const sendData = {
      element: currElement[0].name,
      name: currElement[0].name,
      atomic_mass: currElement[0].atomic_mass,
      symbol: currElement[0].symbol, 
      number: currElement[0].number,
      qtyData, 
      unitCost: cost,

    }
    dispatch(addItem(sendData))
  }

  const clickQuote = () => {
    setQuoteModal(true)
  }

  useEffect(() => {
    dispatch(getItems())
  }, [addItemToCart])

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [qtyData, setQtyData] = useState(1)
  const changeQty = (e) => {
    setQtyData((prev) => (
      prev = e.target.value)
    )
  }

  useEffect(() => {
    setQtyData(1)
  }, [params])


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
            <h2>${numComma(cost)}</h2>
            <form action="">
              <label htmlFor="qty">Qty:</label>
              <select name="Qty" id="qty" value={qtyData} onChange={changeQty}>
                {numbers.map(num => (
                  <option value={num} key={num}>{num}</option>
                ))}
              </select>
            </form>
            <button onClick={clickQuote}>Request a Quote</button>
            <button className='primary--button' onClick={addItemToCart}>Add to Cart</button>
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
          <p className="bold">Chemical Number</p>
          <p>{element.number}</p>
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
        <QuoteModal quoteModal={quoteModal} setQuoteModal={setQuoteModal}/>
    </div>

  )
}

export default ProductPage