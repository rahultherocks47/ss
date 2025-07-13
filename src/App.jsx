import { useState } from 'react'
import './App.css'
import NavigationMenu from './components/NavigationMenu'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import CarsSection from './components/CarsSection'
import FeaturesSection from './components/FeaturesSection'

function App() {
  

  return (
    <>
     <NavigationMenu />
    <HeroSection />
    <CarsSection />
    {/* <FeaturesSection /> */}
    <Footer />
    </>
  )
}

export default App
