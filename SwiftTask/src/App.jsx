import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonial.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing/>
      <Footer/>
    </>
  )
}

export default App
