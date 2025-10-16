import React from 'react'
import {cn} from "../../utils/cn"
import SectionSubTitle from '@/components/shared/SectionSubTitle'
import SectionText from '@/components/shared/SectionText'
import { title } from 'process'
import { AsteriskSquare, icons, PersonStandingIcon } from 'lucide-react'
import Counter from '@/components/shared/scroll-top/Counter'
// import map from "@/../public/img/svg/map.svg"
const Blocks = ({className}) => {
  const cards = [
    {
      title: 'Affordable Skip Hire',content:'Get skips at the best prices in London. Quick delivery, easy booking, and budget-friendly rates for every project.',
    icon: "",  },
    {
      title: 'Reliable & Fast Service',content:'From same-day delivery to hassle-free collection, we make skip hire simple and reliable whenever you need it.'   },
    {
      title: 'Sizes for Every Need',content:'Choose from a wide range of skip sizes – perfect for home clear-outs, renovations, or large construction jobs'   },

    ]
  return (
    <div className={cn(` container  `,className)} >

        <div className='flex  max-lg:flex-col   gap-6'>
     
           
          <div className='  Block-card1' >
             <div className="logo h-10 mb-3    " ><i className="ri-recycle-line text-[2.5rem]"></i></div>
            <div className=' Block-counter   ' ><Counter value={20}/>+Years</div>
            <span className='h6 capitalize' >of Waste mangment experience</span>


          </div>
          <div className='  Block-card1' >
                <div className="logo w-10 h-10   ">
                  <img src='/img/svg/map.svg' alt="" />
                  </div>  
            <div className='Block-counter  ' ><Counter value={300}/>+Area</div>
            <span className='h6 capitalize' >Serving Across London & Slough</span>


          </div>
          <div className='  Block-card1' >
            <div className="logo h-10 mb-3  " ><i className="ri-team-line text-[2.5rem]"></i></div>
            <div className='Block-counter ' ><Counter value={1000}/>+</div>
            <span className='h6 capitalize' >Trusted by Many Happy Clients</span>


          </div>
       
   
        
        </div>
    </div>
  ) 
}

export default Blocks