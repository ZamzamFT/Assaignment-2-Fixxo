import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav  className='mainmenu container'>
      
      <NavLink className="logo" to="/" end>Fixxo.</NavLink>
   
    
      <div className={`menu-links ${ showMenu ? "d-grid": "" }`}>
        <NavLink className="menu-link" to="/" end>Home</NavLink>
        <NavLink className="menu-link" to="/Categories" end>Categories</NavLink>
        <NavLink className="menu-link" to="/Products" >Products</NavLink>
        <NavLink className="menu-link"  to="/Contact" end>Contact</NavLink>
      </div>


      <div className ="menu-icons ">
        <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
        <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare fa-flip-horizontal" />
        <MenuIcon hideOnMobile={true} quantity="5" link="/wishlist" icon="fa-regular fa-heart" />
        <MenuIcon quantity="3" link="/shoppingcart" icon="fa-regular fa-bag-shopping" /> 


        <button onClick={toggleMenu} className='menu-icon btn-menu-icon d-xl-none'><i className="fa-regular fa-bars" ></i></button>


      </div>

    </nav>
  )
}

export default MainMenu