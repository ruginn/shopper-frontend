import React, {useEffect, useRef, useState} from 'react'
import { searchParas } from '../features/general'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {BsSearch} from 'react-icons/bs'
import '../styles/SearchBar.css'

function SearchBar() {
    const searchBar = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const clickSearch = () => {
        searchBar.current.focus()
    }
    
    const onSearch = (e) => {
        e.preventDefault()
        navigate('/products')
      }
      
    const [searchVal, setSearchVal] = useState({
        searchPara: ''
    })  

    const {searchPara} = searchVal

    const changeSearch = (e) => {
        setSearchVal((prev) => (
          {
            ...prev,
            [e.target.name]: e.target.value
          }
        ))
      }
    
      useEffect(()=>{
        dispatch(searchParas(searchVal))
      },[searchVal])

    return (
    <div>
        <div className="search--nav search--mobile" onClick={clickSearch}>
          <form action="submit" onSubmit={onSearch}>
            <input type="text" placeholder='Search' ref={searchBar} name='searchPara' value={searchPara} onChange={changeSearch} />
            <button><BsSearch/></button>
          </form>
        </div>
    </div>
  )
}

export default SearchBar