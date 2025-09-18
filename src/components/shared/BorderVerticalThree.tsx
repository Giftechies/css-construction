import { cn } from '@/utils/cn'
import React from 'react'

const BorderVerticalThree = ({className}:{className?:string}) => {
  return (
    <div className={cn("h-px w-full bg-white-3/60", className)}></div>
  )
}

export default BorderVerticalThree