import React from 'react'
import Link from 'next/link'
import { IconMail, IconMapPin } from '@tabler/icons-react'

const Address = () => {
  return (
    <div>
         <div className=" flex flex-col max-md:px-4  items-start justify-start   gap-2 " >
        <Link href={"email:#"} className="flex gap-5 " >
          <IconMail />
          cssconstruction@gmail.com
        </Link>
        <Link href={"email:#"} className="flex gap-5  items-start  text-left " >
          <IconMapPin className=" max-md:w-10 w-8 " />
         Mr. John Smith 123 London Street ,Sampleton London, SW1A 1AA United Kingdom
        </Link>
      </div>
    </div>
  )
}

export default Address