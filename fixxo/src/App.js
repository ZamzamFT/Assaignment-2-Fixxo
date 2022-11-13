import './style.css';
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
function App() {
  return (
    <>
   
    <BrowserRouter>
    <MainMenu />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/" element={<MainMenu />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:name" element={<ProductDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/search" element={<Search />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/WishList" element={<WishList />} />
      <Route path="/shoppingcart" element={<ShoppingCart/>} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <FooterSection />
    </BrowserRouter>
    </>
  );
}

export default App;
