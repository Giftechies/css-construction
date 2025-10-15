import { PhoneCallIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Talk = () => {
  return (
    <div>
         <div className="flex flex-col w-fit  ">
        <div className=" bg-primary flex  px-8 py-4 gap-8 font-oswald rounded-md " >
          <div className="img size-12 flex items-center justify-center bg-white-1 rounded-full text-primary  "   >
            <PhoneCallIcon />
          </div>
          <div className=" flex  flex-col items-start  " >
            <Link href={"tel:0208 574 6333"} >0208 574 6333</Link>

            <p className=" capitalize  font-semibold  " >Talk To an expert</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Talk