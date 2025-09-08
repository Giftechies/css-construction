import React from 'react'
import {cn} from "../../utils/cn"
import SectionSubTitle from '@/components/shared/SectionSubTitle'
import SectionText from '@/components/shared/SectionText'
import { title } from 'process'
import { AsteriskSquare, icons, PersonStandingIcon } from 'lucide-react'
const Blocks = ({className}) => {
  const cards = [
    {
      title: 'Personal care',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    icon: "",  },
    {
      title: 'Personal care',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.'   },
    {
      title: 'Personal care',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.'   },

    ]
  return (
    <div className={cn(` container  `,className)} >

        <div className='flex   gap-10'>
       {cards.map((item,id)=>{
        return(
             <div key={id} className="card1  w-[35%] p-8 flex bg-primary text-white-1   gap-4 " >

            <div className="img w-16 h-16 aspect-square bg-red-50 rounded-full  flex items-center justify-center">
              < AsteriskSquare className= ' text-primary  siz5 ' />
            </div>
            <div className="content">
              <SectionSubTitle className='h4 text-white-1 ' text={item.title} />
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