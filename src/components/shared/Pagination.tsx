import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import React from 'react'

const Pagination = () => {
  return (
    <div className="smt60px mx-auto flex w-fit items-center xs:gap-8 gap-3 rounded-xl px-3 xs:px-5 py-3 shadow-custom3">
          <button className="flex items-center gap-2">
            <IconChevronLeft size={20} className="text-primary" />{" "}
            <span className="h6 theme-transition-3 font-medium hover:text-primary">
              Prev
            </span>
          </button>
          <div className="flex items-center gap-1">
            <button className="h6 rounded-xl bg-primary px-3 py-1 font-medium text-white-1">
              1
            </button>
            <button className="h6 theme-transition-3 rounded-xl  px-3 py-1 font-medium text-black-4 hover:bg-primary hover:text-white-1">
              2
            </button>
            <button className="h6 theme-transition-3 rounded-xl  px-3 py-1 font-medium text-black-4 hover:bg-primary hover:text-white-1">
              3
            </button>
            <button className="h6 theme-transition-3 rounded-xl  px-3 py-1 font-medium text-black-4 hover:bg-primary hover:text-white-1">
              ...
            </button>
          </div>
          <button className="flex items-center gap-2">
            <span className="h6 theme-transition-3 font-medium hover:text-primary">
              Next
            </span>
            <IconChevronRight size={20} className="text-primary" />
          </button>
        </div>
  )
}

export default Pagination