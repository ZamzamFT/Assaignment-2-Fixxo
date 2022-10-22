import React, { useState} from 'react'
import MainMenu from '../sections/MainMenu';
import FooterSection from '../sections/FooterSection'
import ProductGrid from '../sections/ProductGrid';



const Home = () => {

  const [products, setProduct] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1601612635224-ed8bce54ee4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1611162600500-2822bd954d91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1647009822729-0076c73fe6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1564594228700-4b5ae46c70c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"},
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1596099832784-ffd0f966e8b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"},
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1605572407286-908c7f09148c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"}
  ])
  return (
    <>
    <MainMenu />
    <ProductGrid title="Featured Products" products={products} />
    <FooterSection />
    
    </>
  )
}

export default Home