import React from 'react'
import ListItem from './ListItem'
import Link from 'next/link'

const FooterMiddleColumn = () => {
  return (
    <div className="flex-1  ">
    <h5 className="h3 font-medium">Quick Link</h5>
   <ul className="spt32px flex flex-col gap-3 md:gap-4">
  <Link className="block hover:text-primary theme-transition-3" href="/area-we-serve">
    About us
  </Link>

  <Link className="block hover:text-primary theme-transition-3" href="/skip-hire">
    Skip Hire
  </Link>
  <Link className="block hover:text-primary theme-transition-3" href="/area-we-serve">
    Area We Serve
  </Link>

  <Link className="block hover:text-primary theme-transition-3" href="/contact">
    Contact Us
  </Link>
</ul>

  </div>
  )
}

export default FooterMiddleColumn