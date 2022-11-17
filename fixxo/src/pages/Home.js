import React, { useContext } from 'react'
import ShowCase from '../sections/ShowCase';
import SpecialBanner from '../sections/SpecialBanner';
import CurrentDeals from '../sections/CurrentDeals';
import ProductGrid from '../sections/ProductGrid';
import InfoFooter from '../sections/InfoFooter';
import PreviusDeals from '../sections/PreviusDeals';
import { ProductContext } from '../Contexts/Contexts'






const Home = () => {
  const productContext = useContext(ProductContext)

  window.top.document.title = 'Fixxo.'


  
  return (
    <>
      <ShowCase />
     <ProductGrid title="Featured Products" item={productContext.featuredProducts} /> 
      <SpecialBanner />
      <CurrentDeals item={productContext.saleProducts} />
      <PreviusDeals item={productContext.saleProducts} />
      <InfoFooter />
   

    
    </>
  )
}

export default Home
