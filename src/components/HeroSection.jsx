import React from 'react';
import heroimage from '../assets/images/hero_image.webp';
import Tabs from './Tabs';
const HeroSection = () => {
  return (
    <section >

      <h2 className='text-[min(5vw,2rem)] font-semibold text-center mx-auto max-w-7xl p-1 '>Avail The Best Chauffeur Service Now!</h2>

      <div className="relative min-h-[60vh] sm:min-h-[40vh] sm:max-h-[70vh] w-full my-auto">
      <img
        src={heroimage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
    {/* First Block */}
    <div class="hidden w-full h-full md:block p-4">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-[min(10vw,48px)] font-bold">Welcome to Our Site</h1>
        <p className="mt-4 text-[min(10vw,18px)] max-w-xl">
          We help brands grow through design and innovation.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
          Learn More
        </button>
      </div>
      </div>
    {/* Second Block */}
       <div class="block p-2 w-full h-full md:p-4">
        <div className="relative z-10 flex flex-col items-center justify-center m-auto h-full text-white text-center mx-1 md:p-4 md:m-auto">
        <Tabs />
        </div>  
     </div>
    </div>
    </div>
    </section>
  );
};

export default HeroSection;
