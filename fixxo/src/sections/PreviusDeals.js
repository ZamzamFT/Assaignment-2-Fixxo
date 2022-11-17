import React from 'react'
import Deals from '../components/Deals'
import ProductCard from '../components/ProductCard'

const PreviusDeals = ({item = []}) => {
  return (
    <>
      <section className='Previus-Deals'>
        <div className="___Container"> 
        <div className="deal-2">
         
          <div className='product-grid-wrap-2 row row-cols-1 row-cols-md-2 g-4  row-cols-lg-2'>
          {
              item.map(product => <ProductCard key={product.articleNumber} item={product} />)
          }
                    
          </div>
          
      
              


            <div className="offer-box2"><Deals /></div>
        </div>
        </div>
      </section>
            



    </>
  )
}

export default PreviusDeals