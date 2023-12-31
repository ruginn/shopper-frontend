import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/Products.css'
import ProductCard from '../Components/ProductCard'
import { searchParas, alphabetize, reverseAlphabetize, resetChemicals } from '../features/general'


export default function Products() {
  const dispatch = useDispatch()
  const elements = useSelector((state) => state.general.chemicals)
  

  const filter = (e) => {
    let searchVal = {
      searchPara: e.target.outerText
    }
    dispatch(searchParas(searchVal))
    window.scrollTo(0, 0);
  }

  const alphabetizer = () => {
    dispatch(alphabetize())
  }
  const reverseAlphabetizer = ()=> {
    dispatch(reverseAlphabetize())
  }

  const resetChemical = () => {
    dispatch(resetChemicals())
  }
  
  return (
    <div className='product--container'>
        <div className='product--filter'>
          <div>
            <h2>Filter</h2>
            <h4>Alphabetize</h4>
            <div className='filter--button'>
              <button onClick={alphabetizer}>A-Z</button>
              <button onClick={reverseAlphabetizer}>Z-A</button>
            </div>
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
            <h4 onClick={resetChemical} className='filter--reset'>Reset</h4>
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
