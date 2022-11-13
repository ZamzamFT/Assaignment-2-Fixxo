import React from 'react'
import BreadCrumb from '../sections/BreadCrumb'
import ContactForm from '../sections/ContactForm'
import Map  from '../sections/Map'



const Contact = () => {
  window.top.document.title = 'Contact | Fixxo.'

  return (
    <>
     <BreadCrumb currentPage="Contacts"/>
     <Map />
     <ContactForm />
   
    </>

    
  )
}

export default Contact