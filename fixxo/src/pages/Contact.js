import React from 'react'
import BreadCrumb from '../sections/BreadCrumb'
import Map  from '../sections/Map'
import NewContactForm from '../sections/ContactForm.js'



const Contact = () => {
  window.top.document.title = 'Contact | Fixxo.'

  return (
    <>
     <BreadCrumb currentPage="Contacts"/>
     <Map />
     <NewContactForm />
   
    </>

    
  )
}

export default Contact