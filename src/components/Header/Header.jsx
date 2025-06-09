import React from 'react';
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider';


export default function Header() {
  return (
    <div className=''>
       <Navbar />
      {/* slider */}
      <div className="w-full h-full items-center justify-center">
        {/* min-h-screen flex */}
        <Slider />
      </div>
    </div>
  )
}
