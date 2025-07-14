import { useState } from 'react'
import './App.css'
import NavigationMenu from './components/NavigationMenu'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import CarsSection from './components/CarsSection'
import FeaturesSection from './components/FeaturesSection'
import DemoSection from './DemoSection'

function App() {
  

  return (
    <>
    <NavigationMenu />
    {/* <HeroSection /> */}
    <DemoSection />
    <CarsSection />
    <FeaturesSection />
    <Footer />
    </>
  )
}

export default App
