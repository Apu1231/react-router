import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Home />
    <About />
    <Contact />
    <Footer />
    
    </>
  )
}

export default Layout