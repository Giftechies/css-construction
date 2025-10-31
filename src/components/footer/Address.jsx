"use client"
import React from 'react'
import Link from 'next/link'
import { IconMail, IconMapPin } from '@tabler/icons-react'


const Address = () => {
  return (
    <div>
      <div className="flex flex-col max-md:px-4 items-start justify-start gap-2">
        {/*
          ✅ FIX: The mail link is already correctly structured 
          using the mailto: protocol and fully wrapping the icon and text 
          in the <a> tag. This is the correct way to do it.
        */}
        <a href="mailto:info@csserv.uk"  className="flex gap-2 items-center">
          <IconMail />
          <span>info@csserv.uk</span>
        </a>

        <Link
          href="https://www.google.com/maps?q=GK+Depot,+Trout+Road,+West+Drayton,+UB7+7SN" // Note: This URL looks suspicious and likely incorrect for a map link.
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-5 items-start"
        >
          <IconMapPin className="max-md:w-10 w-8" />
          GK Depot, Trout Road, West Drayton, UB7 7SN
        </Link>
      </div>
    </div>
  )
}

export default Address