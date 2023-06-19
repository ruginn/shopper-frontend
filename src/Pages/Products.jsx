import React from 'react'
import data from '../periodTable.json'
import {Link} from 'react-router-dom'

export default function Products() {
  return (
    <div>
        {data.elements.map((element) => (
        <div key={element.name}>
            <Link to={`/products/${element.name.toLowerCase()}`}>
            <span>{element.name}</span>
            <span>{element.number}</span>
            </Link>
        </div>
      ))}

    </div>
  )
}
