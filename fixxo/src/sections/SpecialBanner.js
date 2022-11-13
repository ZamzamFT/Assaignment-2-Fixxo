import React from 'react'
import img3 from '../assets/images/PamelaReifPlaceholder.svg'
import img4 from '../assets/images/specialMessage.svg'

const SpecialBanner = () => {
  return (
    <section className='Speccial-message'>
      <div className="_container">
        <div className='banner'>
            <img src={img3} alt=''/>
            <img src={img4}  alt=''/>
        </div>
      </div>
    </section>
  )
}

export default SpecialBanner