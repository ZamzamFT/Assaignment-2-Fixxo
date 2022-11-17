import './style.css';
import React, { useState,  useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'
import MainMenu from './sections/MainMenu';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Compare from './pages/Compare';
import Search from './pages/Search';
import WishList from './pages/WishList';
import ShoppingCart from './pages/ShoppingCart';
import FooterSection from './sections/FooterSection';
import ProductDetails from './pages/ProductDetails';
import { ProductContext} from './Contexts/Contexts'


function App() {



  const [products, setProducts] = useState ({
    allProducts: [],
    featuredProducts: [],
    saleProducts: []


  })


  useEffect(() => {
  

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...Products,featuredProducts: await result.json() })

    }
    fetchFeaturedProducts()

    const fetchSaleProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...Products,saleProducts: await result.json() })

    }
    fetchSaleProducts()


  },  [setProducts])

  return (
    <>
   
    <BrowserRouter>
    <MainMenu />

    <ProductContext.Provider value={products}>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:name" element={<ProductDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/search" element={<Search />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/WishList" element={<WishList />} />
      <Route path="/shoppingcart" element={<ShoppingCart/>} />
      <Route path="*" element={<NotFound />}/>
    </Routes> 
    </ProductContext.Provider>
    
    <FooterSection />
    </BrowserRouter>
    </>
  );
}

export default App;
