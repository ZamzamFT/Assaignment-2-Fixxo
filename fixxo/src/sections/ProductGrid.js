import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGrid = ({title ,products }) => {


  return (
    <>
         <section class="product-grid">
            <div className='container'>
              <h1 className='fs-sub-heading fw-bold m'>{title}</h1>
                <div className='row row-cols-1 row-cols-md-2 g-4  row-cols-lg-3   row-cols-xl-4'>
                    {
                      products.map(products => <ProductCard  item={products} />)
                    }
                 
                </div>
            </div>
        </section>



    </>
  )
}

export default ProductGrid















