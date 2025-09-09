import React from 'react'
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitch,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from 'next/link';


const Media = () => {
  return (
    <div>
         <div className=" border-dashed border-t pt-4 border-white-1/30 flex items-center justify-center gap-3">
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl bg-primary p-2 hover:bg-white-1 hover:text-primary"
        >
          <IconBrandFacebook />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl   bg-primary p-2 hover:bg-white-1 hover:text-primary"
          >
          <IconBrandInstagram />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl   bg-primary p-2 hover:bg-white-1 hover:text-primary"
          >
          <IconBrandYoutube />
        </Link>

      
        
      </div >
    </div>
  )
}

export default Media