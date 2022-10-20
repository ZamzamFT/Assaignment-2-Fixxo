import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='container'>
            <a href="index.html" id="logo">Fixxo.</a>

            <button className="mobile-nav-toggle d-none">
                    <i className="fa-sharp fa-solid fa-bars"></i>
                    <i className="fa-sharp fa-solid fa-x" id="icon-close"></i>
            </button>

            <ul role="list" className="nav-list">
                        <li><a href="#"><span className="active">Home</span></a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contacts</a></li>
            </ul>


            <div className ="shopping-menu">
                    <a href="#"><i id="magniGlass" className="fa-regular fa-magnifying-glass"></i></a>
                    <a href="#"><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></a>
                    <a href="#"><i className="fa-regular fa-heart"></i></a>
                    <a href="#"><i className="fa-regular fa-bag-shopping"></i></a>
            </div>





        </div>







    </nav>
    
  )
}

export default Navbar