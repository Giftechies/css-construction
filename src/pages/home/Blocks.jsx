import React from 'react'
import {cn} from "../../utils/cn"
import SectionSubTitle from '@/components/shared/SectionSubTitle'
import SectionText from '@/components/shared/SectionText'
import { title } from 'process'
import { AsteriskSquare, icons, PersonStandingIcon } from 'lucide-react'
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
       {cards.map((item,id)=>{
        return(
             <div key={id} className="card1  lg:w-[35%] p-8 flex max-xl:flex-col bg-primary text-white-1   gap-4 " >

            <div className="img w-16 h-16 aspect-square bg-red-50 rounded-full  flex items-center justify-center">
              < AsteriskSquare className= ' text-primary  size-6 ' />
            </div>
            <div className="content">
              <SectionSubTitle className='h4 text-white-1 capitalize font-oswald ' text={item.title} />
              <SectionText className='text-white-1 ' text={item.content} />
            </div>

          </div>
        )
       })}

        </div>
    </div>
  ) 
}

export default Blocks