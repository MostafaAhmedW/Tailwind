import React, { useState } from 'react'
import imgeone from"../../assets/one.jpg"
import imgetwo from"../../assets/two.jpg"
import imgethree from"../../assets/three.jpg"
import imgefour from"../../assets/four.jpg"
import lapfive from"../../assets/lap5.jpg"
import lapfour from"../../assets/lap4.jpg"
import imgeseven from"../../assets/phonewebp.webp"
import imgelat from"../../assets/samsung.webp"
import imgelatest from"../../assets/phone-mockup.jpg"
import './about.css'

export default function About() {


  const imgs= [imgeone , imgetwo, imgethree , imgefour , lapfive , lapfour , imgeseven , imgelat ,imgelatest];

  const [current, setCurrent] = useState(false)

  
  return (
    <>

<div className="row gap-y-5 py-6 bg-black dark:bg-white">

  {imgs.map( (img , i)=>   <div key={i} className=' w-full md:w-1/2 lg:w-1/3  px-5 '>

    <div className="inner bg-white border border-black">

    <img src={img} alt="img" onClick={ ()=> setCurrent(img) } className='h-48 w-full object-cover cursor-pointer block' />

    <h3 className='text-xl font-semibold text-gray-800 pt-6 pb-1 ms-6'>Card 2</h3>
     <p className='text-gray-600 pb-6 ms-6'>This is the first card.</p>

  </div>
  </div> )}

</div>

{current? <div onClick={ ()=> setCurrent(null) } className='flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 backdrop-blur cursor-pointer'>
  <img src={current} alt="current" className='w-1/2' />
</div> : null}

      
    </>
  )
}
