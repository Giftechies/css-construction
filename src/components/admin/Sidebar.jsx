"use client"

import { cn } from "@/lib/utils"
import { ChartArea, ChevronDown, ChevronRight } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import {menu} from "@/data/menu" 

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
                  "rounded-xl font-[300] w-full p-3 flex justify-between items-center cursor-pointer hover:text-black-1 hover:bg-white-2",
                  { "bg-white-1 text-black-4 font-[500]": isActive }
                )}
              >
                <span>{el.label}</span>
                {hasChildren &&
                  (isOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  ))}
              </div>

              {/* Submenu */}
              {hasChildren && isOpen && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {el.children.map((child, cId) => {
                    const isChildActive = pathname === child.path
                    return (
                      <a
                        key={cId}
                        href={child.path}
                        className={cn(
                          "rounded-lg font-[300] w-full p-2 pl-4 hover:text-black-1 hover:bg-white-2",
                          { "bg-white-1 text-black-4 font-[500]": isChildActive }
                        )}
                      >
                        {child.label}
                      </a>
                    )
                  })}
                </div>
              )}
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
