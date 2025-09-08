import Home from '@/app/page'
import SectionText from '@/components/shared/SectionText'
import React from 'react'
import HomeThreeBannerLink from '../home-three/HomeThreeBannerLink'
// import { link } from 'fs'

const Servicespage = () => {

    const cards = [
   
        {title:"df",content:"ds",link:"dfs" }, 
        {title:"df",content:"ds",link:"dfs" }, 
        {title:"df",content:"ds",link:"dfs" }, 
        {title:"df",content:"ds",link:"dfs" }, 
        {title:"df",content:"ds",link:"dfs" }, 
        {title:"df",content:"ds",link:"dfs" }, 
    ]

  return (
    <div className=' bg-primary/30 py-25 ' >
        <div className="container  gap-4 " >
           <div className="text px-10 mb-8 flex flex-col justify-center items-center gap-4">
             <p className= ' text-[17px] text-primary font-[700] leading-[20px] tracking-tight  ' >Our Services</p>
            <h2 className=' h2 text-center font-[700] ' >We Provide Best Services</h2>
           <SectionText className=' text-center font-[500] tracking-tight  ' text={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, adipiscing elit. Sed euismod, nunc ut.'} />
           </div>
           <div className="card flex flex-wrap justify-center items-center gap-10 " >

            {cards.map((item,id)=>{
                return(
                     <div key={id} className="card1 w-[380px] border   rounded-md overflow-hidden group ">
                <div className="img w-full h-60 bg-red-50 rounded-md overflow-hidden group ">
                    <img src="https://plus.unsplash.com/premium_photo-1681412504505-c3161f898893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVsZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" className=' w-full h-full group-hover:scale-[1.1] theme-transition-3 ' />
                </div>
                <div className="text flex flex-col gap-4 p-6 items-center justify-center bg-primary/20  group-hover:bg-primary/30 theme-transition-4  ">
                    <h3 className=' h4 font-[700] ' >Service Title</h3>
                    <SectionText className=' text-[15px] font-[500] ' text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.'} />
                    <HomeThreeBannerLink href={'/'} className={' text-s text-white-1'} >Service details</HomeThreeBannerLink> 
                </div>
            </div>
                )
            })}
         
           
           </div>
        </div>
        
    </div>
  )
}

export default Servicespage