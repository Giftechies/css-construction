import React from 'react'
import {cn} from "../../utils/cn"
import SectionSubTitle from '@/components/shared/SectionSubTitle'
import SectionText from '@/components/shared/SectionText'
import { title } from 'process'
import { AsteriskSquare, icons, PersonStandingIcon } from 'lucide-react'
import Counter from '@/components/shared/scroll-top/Counter'
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

        <div className='flex  max-lg:flex-col   gap-10'>
       {/* {cards.map((item,id)=>{
        return( */}
             <div className="card1 font-oswald  lg:w-[30%] py-4 flex flex-col items-center justify-center bg-primary text-white-1    " >

                  <div className=' d4 font-semibold flex  items-center   ' > <Counter value={200} />+ Years </div>
              <h2 className='h6 text-white-1  capitalize  '  > of waste mangment experience </h2>

          </div>
             <div className="card1 font-oswald  lg:w-[30%] py-4 flex flex-col items-center justify-center bg-primary text-white-1    " >

                  <div className=' d4 font-semibold flex  items-center   ' > <Counter value={300} />+ Areas  </div>
              <h2 className='h6 text-white-1  capitalize  '  >Serving Across London & Slough </h2>

          </div>
             <div className="card1 font-oswald  lg:w-[30%] py-4 flex flex-col items-center justify-center bg-primary text-white-1    " >

                  <div className=' d4 font-semibold flex  items-center   ' > <Counter value={1000} />+  </div>
              <h2 className='h6 text-white-1  capitalize  '  > happy clients </h2>

          </div>
       {/* 
        )
       })}
        */}

        </div>
    </div>
  ) 
}

export default Blocks