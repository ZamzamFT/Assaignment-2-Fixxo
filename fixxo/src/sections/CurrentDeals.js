import React from 'react'
import Deals from '../components/Deals'
import ProductCard from '../components/ProductCard'


const CurrentDeals = ({item = []}) => {
  return (
    <>
      <section className='Current-Deals'>
      <div className="container-test "> 
       <div className="deal">
          <div className="offer-box"><Deals /></div>
            <div className='product-grid-wrap row row-cols-1 row-cols-md-2 g-4  row-cols-lg-2 '>
              {
                item.map(product => <ProductCard key={product.articleNumber} item={product} />)
              }
          </div>
       </div>
      </div>
    </section>
    
    </>
   
  )
}

export default CurrentDeals