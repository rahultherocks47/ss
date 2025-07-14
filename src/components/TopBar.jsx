import React from 'react'
import {ReactComponent as Like} from '../assets/images/like.svg'
import {ReactComponent as Shield} from '../assets/images/shield.svg'
import {ReactComponent as Planet} from '../assets/images/planet.svg'

const TopBar = () => {
  return (
    <>
<div class="hidden mx-auto p-2 max-w-7xl sm:block sm:grid sm:grid-cols-3 gap-6 items-center justify-between">
<div class="flex flex-rows items-center justify-center max-w-sm">
  <Shield class="w-1/4 h-8" />
  <div class="text-left w-3/4">24/7 Global Chauffeur Service</div> 
  </div>
<div class="flex flex-rows items-center justify-center max-w-sm">
  <Planet class="w-1/4 h-6" />
  <div class="text-left w-3/4">Discreet, Reliable & Secure</div> 
  </div>
<div class="flex flex-rows items-center justify-center max-w-sm">
  <Like class="w-1/4 h-6" />
  <div class="text-left w-3/4">Luxury Fleet & Professional Chauffeurs</div> 
  </div>
</div>
<div className='w-full md:hidden'>
<div class="flex flex-rows items-center justify-center w-sm mx-auto p-1">
<img src="https://www.svgrepo.com/download/532329/shield-check.svg" class="w-1/4 h-12" />
<div class="text-left w-3/4">Hello</div> 
</div>
</div>
</>
  )
}

export default TopBar
