import Link from 'next/link'
import React from 'react'

const BlogCategories = () => {
  return (
    <div className="sp24px smt24px bg-white-4">
    <h5 className="h4 font-medium">Categories</h5>
    <div className="smt32px flex flex-col gap-3">
      <Link
        href={`/blogs`}
        className="m-text-accent-2 border-b border-white-3 theme-transition-3 hover:text-primary hover:tracking-wide pb-3 text-black-3 last:border-none"
      >
        City New
      </Link>
      <Link
        href={`/blogs`}
        className="m-text-accent-2 border-b border-white-3 theme-transition-3 hover:text-primary hover:tracking-wide pb-3 text-black-3 last:border-none"
      >
        Government
      </Link>
      <Link
        href={`/blogs`}
        className="m-text-accent-2 border-b border-white-3 theme-transition-3 hover:text-primary hover:tracking-wide pb-3 text-black-3 last:border-none"
      >
        Development
      </Link>
      <Link
        href={`/blogs`}
        className="m-text-accent-2 border-b border-white-3 theme-transition-3 hover:text-primary hover:tracking-wide pb-3 text-black-3 last:border-none"
      >
        Tourism
      </Link>
      <Link
        href={`/blogs`}
        className="m-text-accent-2 border-b border-white-3 theme-transition-3 hover:text-primary hover:tracking-wide pb-3 text-black-3 last:border-none"
      >
        Culture
      </Link>
    </div>
  </div>
  )
}

export default BlogCategories