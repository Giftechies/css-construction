import React from 'react'
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitch,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from 'next/link';
import { cn } from '@/lib/utils';


const Media = ({className}) => {
  return (
    <div>
         <div className={cn("  border-white-1/30 flex items-start justify-start gap-3",className)}>
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