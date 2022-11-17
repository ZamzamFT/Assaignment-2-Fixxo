import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../assets/images/showcase-img-1.png'
import img2 from '../assets/images/showcase-img-2.png'



const ShowCase = () => {
  return (
    <section className='showcase'>
      <div className="showcase-conatainer">
        <img src={img1} className="img-left" alt="showcase-img-1" />
        <div className="showcase-body">
          <h1>Sale Up</h1>
          <h1>To 50% Off</h1>
          <p>Online shopping free home deliver over $100</p>
          <NavLink to="/products" className="btn-theme" end>
            <span className="btn-theme-corner-left"></span>
            <span className="btn-theme-corner-right"></span>
            SHOP NOW
          </NavLink>
        </div>
        <img src={img2} className="img-right" alt="showcase-img-2" />
      </div>
      






    </section>
  )
}

export default ShowCase