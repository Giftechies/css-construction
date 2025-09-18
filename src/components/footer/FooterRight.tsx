import React from 'react'
import ListItem from './ListItem'
import Link from 'next/link'

const FooterRight = () => {
  return (
    <div className="flex-1  ">
    <h5 className="h3 w-48   font-medium">Our Project</h5>
   <ul className="spt32px flex flex-col gap-3 md:gap-4">
  <Link className="block hover:text-primary theme-transition-3" href="/#">
    
Residential Construction
  </Link>

  <Link className="block hover:text-primary theme-transition-3" href="/#">
   Commercial Construction
  </Link>
  <Link className="block hover:text-primary theme-transition-3" href="/#">
    Land Development
  </Link>

  <Link className="block hover:text-primary theme-transition-3" href="/#">
 Renovation and Remodeling
  </Link>
  <Link className="block hover:text-primary theme-transition-3" href="/#">
    Interior Design and Finishing
  </Link>
</ul>

  </div>
  )
}

export default FooterRight
