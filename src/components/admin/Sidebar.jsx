"use client"

import { cn } from "@/lib/utils"
import { ChartArea, ChevronDown, ChevronRight } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { menu } from "@/data/adminMenu"
import Link from "next/link"

export default function Sidebar({ className }) {
  const pathname = usePathname()
  const navigate = useRouter()
  const [openMenu, setOpenMenu] = useState(null)



  // keep parent open if any child is active
  useEffect(() => {
    menu.forEach((el, id) => {
      if (el.children?.some((child) => pathname === child.path)) {
        setOpenMenu(id) // auto-open parent
      }
    })
  }, [pathname])

  function Menuitem() {
    return (
      <aside className="flex flex-col gap-2 mt-6 w-full">
        {menu.map((el, id) => {
          const hasChildren = el.children && el.children.length > 0

          const isChildActive = hasChildren
            ? el.children.some((child) => pathname === child.path)
            : false

          const isActive = pathname === el.path || isChildActive
          const isOpen = openMenu === id
          const Icon = el.icon

          return (
            <div key={id} className="flex flex-col">
              {/* Main item */}
              <div
                onClick={() => {
                  if (hasChildren) {
                    setOpenMenu(isOpen ? null : id)
                  } else {
                    navigate.push(el.path)
                  }
                }}
                className={cn(
                  "rounded-xl font-[300] w-full p-3 flex justify-between items-center cursor-pointer hover:bg-primary hover:text-white-1 ",
                  { "bg-white-1 text-black-4 font-[500]": isActive }
                )}
              >
                <div className="  flex  gap-4"  >    <Icon />   <span>{el.label}</span> </div>
                {hasChildren &&
                  (isOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  ))}
              </div>

              {/* Submenu */}
            {<div className={cn(`ml-4 flex flex-col gap-1 mt-1 border-l pl-2 h-0 theme-transition-3 overflow-hidden  duration-700 transition-all `, { 'h-fit': isOpen && hasChildren })}>
                {el?.children?.map((child, cId) => {
                  const isChildActive = pathname === child.path
                  const Icon = child.icon
                  return (
                    <Link
                      key={cId}
                      href={child.path}
                      className={cn(
                        "rounded-lg font-[300] w-full p-2  hover:text-white-1 hover:bg-primary",
                        { "bg-white-1 text-black-4 font-[800]  ": isChildActive }
                      )}
                    >
                      <div className="flex  items-center gap-4" >
                        <Icon className="size-5" />
                        <span>
                          {child.label}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
              }
            </div>
          )
        })}
      </aside>
    )
  }

  return (
    <section
      className={cn(
        "shrink-0 min-h-screen bg-black-4 text-white-1 p-6",
        className
      )}
    >
      <h3
        onClick={() => navigate.push("/admin")}
        className="h4 cursor-pointer font-semibold flex gap-2"
      >
        <ChartArea /> Admin Panel
      </h3>

      <div className="flex">
        <Menuitem />
      </div>
    </section>
  )
}
