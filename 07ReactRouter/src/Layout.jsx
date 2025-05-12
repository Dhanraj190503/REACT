import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <Header />
    <Outlet />      {/* This is where the child routes will be rendered */}
                    {/* The Outlet component is a placeholder for the child routes */}
                    {/* It will render the child route components based on the current URL */}
                    {/* For example, if the URL is /about, it will render the About component */}
                    {/* If the URL is /contact, it will render the Contact component */}
                    {/* If the URL is /products, it will render the Products component */}
                    {/* If the URL is /products/:id, it will render the ProductDetails component */}
    <Footer />
    </>
    
  )
}

export default Layout