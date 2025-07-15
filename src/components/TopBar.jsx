import React from 'react'
import {ReactComponent as Like} from '../assets/images/like.svg'
import {ReactComponent as Shield} from '../assets/images/shield.svg'
import {ReactComponent as Planet} from '../assets/images/planet.svg'
import  { useEffect, useState } from "react";

const slides = [
  { content: '24/7 Global Chauffeur Service', icon: Shield},
  { content: 'Discreet, Reliable & Secure', icon: Planet},
  { content: 'Luxury Fleet & Professional Chauffeurs', icon: Like},
];

const TopBar = () => {
      const [current, setCurrent] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000); // Change every 4 seconds
      return () => clearInterval(interval);
    }, []);
  return (
    <>
<div class="hidden mx-auto p-2 max-w-7xl sm:block sm:grid sm:grid-cols-3 gap-6 items-center justify-between">
<div class="flex flex-rows items-center justify-center max-w-sm">
  <Shield class="w-1/5 h-8" />
  <div class="text-left w-4/5 text-[min(10vw,14px)]">24/7 Global Chauffeur Service</div> 
  </div>
<div class="flex flex-rows items-center justify-center max-w-sm">
  <Planet class="w-1/5 h-6" />
  <div class="text-left w-4/5 text-[min(10vw,14px)]">Discreet, Reliable & Secure</div> 
  </div>
<div class="flex flex-rows items-center justify-center max-w-sm">
  <Like class="w-1/5 h-6" />
  <div class="text-left w-4/5 text-[min(10vw,14px)]" >Luxury Fleet & Professional Chauffeurs</div> 
  </div>
</div>


<div className='block w-full md:hidden'>
<div className="w-sm mx-auto p-1">
  {slides.map((slide, index) => (
    <div key={index} className={`flex items-center justify-center w-full transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" :"opacity-0 hidden" }`}>
      <slide.icon className="w-1/4 h-6" />
      <div class="text-left w-3/4">{slide.content}</div>
    </div>
  ))}
</div>
</div>
</>
  )
}

export default TopBar