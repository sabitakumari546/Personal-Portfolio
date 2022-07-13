import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
// import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
// import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   {/* <Services/> */}
   <Portfolio/>
   {/* <Testimonials/> */}
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
