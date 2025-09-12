

"use client"
import { IconMinus, IconPlus } from '@tabler/icons-react'
import React, { useState } from 'react'

export const Skipcard = () => {
  const [tones, settones] = useState(3)
  const baseprice = 640

  const substractTones = (  )=>{
   if(tones>3){
     settones((e)=>e-1)
   }
  }
  const AddTones = (  )=>{
    settones((e)=>e+1)
  }


const totalprice = baseprice * tones

  return (
     <div className= ' w-[18rem]  min-h-[25rem] border-2 bg-white-1  rounded-xl   p-6  ' >
        <div className="img  size-32 mx-auto ">
            <img src="/img/innerimg/lorry.png" alt=""  className=' size-full  object-cover object-center ' />
        </div>
<div className='flex flex-col items-center justify-center mt-4 gap-4   ' >
  {/* titile */}
       <div>
        <span className=' h5 font-oswald font-semibold  text-primary group-hover:text-white-1 ' >20/40yd mixed</span>
       </div>
{/* tones */}
       <div className='flex gap-2 items-center  group-hover:text-white-1 '>
        {/* - */}
        <button onClick={substractTones} className='border size-fit rounded bg-gray-100  hover:bg-gray-200' > <IconMinus className=' h-4 ' /> </button>
        {/* tone */}
        <span className='h5' >{tones}</span>
        {/* + */}
        <button onClick={AddTones}  className='border size-fit rounded bg-gray-100  hover:bg-gray-200  group-hover:text-primary  '  > <IconPlus  className=' h-4 ' /> </button>
       </div>

       <div className=' bg-primary/20 px-4 py-2 rounded-full h6 group-hover:text-white-1 '>
        <span>£</span>
        <span>{totalprice}</span>
        <span>(+ VAT)</span>
       </div>
        <button className=' bg-primary/80 px-4 py-2 rounded-full  text-white-1 group-hover:bg-white-1 group-hover:text-primary ' >Buy Now</button>
</div>


    </div>
  )
}
