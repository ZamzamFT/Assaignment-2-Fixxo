import React, {useState} from 'react'
import ShowCase from '../sections/ShowCase';
import SpecialBanner from '../sections/SpecialBanner';
import CurrentDeals from '../sections/CurrentDeals';
import ProductGrid from '../sections/ProductGrid';
import InfoFooter from '../sections/InfoFooter';
import PreviusDeals from '../sections/PreviusDeals';



const Home = () => {

  const [products, setProduct] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1601612635224-ed8bce54ee4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$50.00", rating: 5, img: "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$60.00", rating: 5, img: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$70.00", rating: 5, img: "https://images.unsplash.com/photo-1611162600500-2822bd954d91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$80.00", rating: 5, img: "https://images.unsplash.com/photo-1647009822729-0076c73fe6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$90.00", rating: 5, img: "https://images.unsplash.com/photo-1564594228700-4b5ae46c70c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"},
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$100.00", rating: 5, img: "https://images.unsplash.com/photo-1596099832784-ffd0f966e8b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"},
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$150.00", rating: 5, img: "https://images.unsplash.com/photo-1605572407286-908c7f09148c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"}
  ])

  const [product, setProduc] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1601612635224-ed8bce54ee4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$50.00", rating: 5, img: "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$60.00", rating: 5, img: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$70.00", rating: 5, img: "https://images.unsplash.com/photo-1611162600500-2822bd954d91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"}
  
  ])

  const [items, setItems] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.unsplash.com/photo-1601612635224-ed8bce54ee4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$50.00", rating: 5, img: "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$60.00", rating: 5, img: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$70.00", rating: 5, img: "https://images.unsplash.com/photo-1611162600500-2822bd954d91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"}
  
  ])

 

  

  
  return (
    <>
      <ShowCase />
     <ProductGrid title="Featured Products" products={products} /> 
      <SpecialBanner />
      <CurrentDeals product={product} title="2 FOR USD $29"  />
      <PreviusDeals items={items}/>
      <InfoFooter />
   

    
    </>
  )
}

export default Home
