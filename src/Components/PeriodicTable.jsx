import React from 'react'
import '../styles/PeriodicTable.css'
import data from '../periodTable.json'
import { Link } from 'react-router-dom';

function PeriodicTable({currElement}) {
   
      return (
        <div className='periodic--table--content'>
            <h3>Periodic Table</h3>
            <div className="periodic-table">
            {data.elements.map((element) => (
                <Link
                to={`/products/${element.name.toLowerCase()}`}
                className="element"
                key={element.name}
                style={{
                    color: 'black',
                    textDecoration: 'none',
                    gridRow: element.ypos,
                    gridColumn: element.xpos,
                    borderColor: currElement === element.name?'black':'',
                    borderWidth: currElement === element.name?'3px':'', 
                    
                }}
                >
                {/* <Link to={`/products/${element.name.toLowerCase()}`}> */}
                    {currElement === element.name?<stong>{element.symbol}</stong>:<small>{element.symbol}</small>}
                    {/* <p>{element.symbol}</p> */}
                {/* </Link> */}
                {/* <small className="number">{element.number}</small> */}
                {/* <small className="name">{element.name}</small> */}
                </Link>
            ))}
            
            </div>
        </div>
      );    
}

export default PeriodicTable