import React from 'react'
import scientist from '../assets/groupofscientist.jpeg'
import '../styles/LowerHero.css'

function LowerHero() {
  return (
    <div className='lower--hero--main'>
        <div className="lh--left">
            <ul>
              <li>Exceptional product quality: Proteus consistently provides high-quality chemicals that meet stringent standards.</li>
              <li>Safety-first approach: They prioritize safety by providing detailed specifications and safety data sheets for all their chemicals.</li>
              <li>Efficient operations: Proteus ensures a seamless ordering process and quick delivery times, preventing delays in research and development.</li>
              <li>Tailored solutions: Proteus accommodates specific needs of scientific institutions and industries, providing customized chemical solutions.</li> 
              <li>Responsive customer support: Their knowledgeable staff is readily available to address any questions or concerns, offering excellent customer service.</li>
              {/* <li>Compliance with industry standards: They adhere to all relevant regulations and quality standards, ensuring compliance and reliability.</li>
              <li>Commitment to research: Proteus actively supports scientific advancements by providing essential chemicals to research institutions.</li>
              <li>Long-standing experience: With years of experience, Proteus brings expertise and knowledge to the table, further enhancing their reliability.</li> */}
            </ul>
        </div>
        <div className="lh--right">
            <img src={scientist} alt="" loading='lazy'/>
        </div>
    </div>
  )
}

export default LowerHero