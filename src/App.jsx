import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Services from './components/services'
import Portfolio from './components/portfolio'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/contact'
import Footer from './components/footer'

const App = () => {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio/>
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
