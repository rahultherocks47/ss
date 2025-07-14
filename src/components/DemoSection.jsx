import React from 'react';
import Tabs from './Tabs';
import heroimage from '../assets/images/hero_image.webp';
import herolottie from '../assets/images/herolottie.json';
import NavigationMenu from './NavigationMenu';
const DemoSection = () => {
return (
  <section className="relative w-full bg-gray-400">
    {/* TopBar goes here if you have one, otherwise place NavigationMenu at the top */}
    <NavigationMenu />
    <div className="relative">
      <img src={heroimage} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className='mb-10 max-w-7xl mx-auto px-6 py-6 sm:py-10 md:flex items-center justify-between mx-auto relative z-10'>
        {/* 1st Block */}
        <div className='hidden md:block md:w-1/2 mb-10 md:mb-0'>
        <iframe src="https://lottie.host/embed/205af238-35b0-4938-aae4-502be3425ad5/roxXmxR0Ve.lottie" width="100%" height="100%"></iframe>
        {/* <lottie-player src=""  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player> */}
        </div>
        {/* <div className='hidden md:block md:w-1/2 mb-10 md:mb-0'>
          <h1 className='mb-6 font-bold text-4xl mb:text-5xl'>Welcome to Our Demo Section</h1>
          <p className='text-lg text-white mb-6'>Creating Blazing Fast and Beautiful Interfaces easily using utlitityfirst.</p>
          <div className='flex flex-col md:flex-row gap-4'>
            <button className='px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-900 text-center'>Get Started </button>
            <button className='px-6 py-3 border-2 border-gray-700 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white text-center'>Get Started </button>
          </div>
        </div> */}
        {/* 2nd Block */}
        <div className='md:w-1/2'><Tabs /></div>
      </div>
    </div>
  </section>
);
};
 



export default DemoSection