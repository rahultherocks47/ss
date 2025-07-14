import React from 'react';
import Tabs from './components/Tabs';
const DemoSection = () => {
return (
<section className="w-full bg-gray-400">

  <div className=' mb-10 max-w-7xl mx-auto px-6 py-6 sm:py-16 md:flex items-center justify-between mx-auto'>
<div className='hidden md:block md:w-1/2 mb-10 md:mb-0'>
<h1 className='mb-6 font-bold text-4xl mb:text-5xl'>
  Welcome to Our Demo Section
</h1>
<p className='text-lg text-white mb-6'>
  Creating Blazing Fast and Beautiful Interfaces easily using utlitityfirst.
</p>
<div className='flex flex-col md:flex-row gap-4'>
  <button className='px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-900 text-center'>Get Started </button>
  <button className='px-6 py-3 border-2 border-gray-700 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white text-center'>Get Started </button>
</div>
</div>
<div className='md:w-1/2'><Tabs /></div>
</div>
</section>
);};
 



export default DemoSection