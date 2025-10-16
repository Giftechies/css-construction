import React from 'react'
import Link from 'next/link'
import { IconMail, IconMapPin } from '@tabler/icons-react'

const Address = () => {
  return (
    <div>
         <div className=" flex flex-col max-md:px-4  items-start justify-start   gap-2 " >
        <Link href={"email:info@csserv.uk"} className="flex gap-5 " >
          <IconMail />
       info@csserv.uk
        </Link>
        <Link
      href="https://www.google.com/maps?q=GK+Depot,+Trout+Road,+West+Drayton,+UB7+7SN"
      target="_blank"              // 🆕 opens in new tab
      rel="noopener noreferrer"   // 🔐 security best practice
      className="flex gap-5 items-start "
    >
      <IconMapPin className="max-md:w-10 w-8" />
      GK Depot, Trout Road, West Drayton, UB7 7SN
    </Link>
      </div>
    </div>
  )
}

export default Address