import React from 'react'
import {NavLink} from 'react-router-dom'

const ProductCard = ({item}) => {



    const addToWishList = (e) => {
        console.log ("added to whish list")
    }

    const addToCompare = (e) => {
        console.log ("added to compare")
    }

    const addToShoppingCart = (e) => {
        console.log ("added to your shopping cart")
    }

  return (
    <div className='col'>
        <div className='card'>
            <div className='card-img'>
                <img src={item.img} alt={item.name}/>
                    <div className="card-menu d-xl-none">
                        <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
                        <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button>
                        <button onClick={addToShoppingCart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                    </div>
                    <NavLink to={`/products/${item.name.toLowerCase().replace(/ /gi, "-")}`} className='btn-theme btn-card-theme d-xl-none'>
                        <span className="corner-left"></span>
                        <span className="corner-right"></span>
                        QUICK VIEW
                    </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">{item.category}</p>
                <h5 className="card-title">{item.name}</h5>
                
                <div className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <p className="card-price">{item.price}</p>
               
            </div>  
        </div>
    </div>
  )
}


export default ProductCard