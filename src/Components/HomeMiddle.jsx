import React from 'react'
import '../styles/HomeMiddle.css'
import {BsGlobeAmericas} from 'react-icons/bs'
import {IoFlaskOutline} from 'react-icons/io5'
import {BiDroplet} from 'react-icons/bi'
import {LuTreeDeciduous} from 'react-icons/lu'



function HomeMiddle() {
  return (
    
    <div className='mid--home--main'>
      <h2>Environmentally Friendly Purification</h2>
      <div className='mid--home'>
        <div>
          <div className="circle--home"><LuTreeDeciduous/></div>
          <h5>Reduced Carbon Footprint</h5>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet.</p> */}
        </div>
        <div>
          <div className="circle--home"><BiDroplet/></div>
          <h5>Recycled Solvents</h5>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illo?</p> */}
        </div>
        <div>
          <div className="circle--home"><IoFlaskOutline/></div>
          <h5>No Harsh Chemicals</h5>
          {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, labore.</p> */}
        </div>
        <div>
          <div className="circle--home"><BsGlobeAmericas/></div>
          <h5>World Wide Shipping</h5>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, rem?</p> */}
        </div>
        {/* <div className="circle--home"><LuTreeDeciduous/></div>
        <div className="circle--home"><BiDroplet/></div>
        <div className="circle--home"><IoFlaskOutline/></div>
        <div className="circle--home"><BsGlobeAmericas/></div> */}
      </div>
    </div>
  )
}

export default HomeMiddle 