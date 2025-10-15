"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Sidebar({ className }) {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(null);

  const serviceMenu = [
    {
      label: "Skip Hire",
      path: "/skip-hire",
      children: [
        { label: "Skip Hire", path: "/skip-hire/skip-hire" },
        { label: "RORO Skip Hire", path: "/skip-hire/roro-skip-hire" },
        { label: "Builders Waste Clearance", path: "/skip-hire/builders-waste-clearance" },
        { label: "Waste Management", path: "/skip-hire/waste-management" },
      ],
    },
    {
      label: "Concrete Supply",
      path: "/concrete-supply",
      children: [
        { label: "Concrete Supply", path: "/concrete-supply/concrete-supply" },
        { label: "Screed", path: "/concrete-supply/screed" },
      ],
    },
    {
      label: "Tipper & Grab Services",
      path: "/tipper-grab-services",
      children: [
        { label: "Grab Hire", path: "/tipper-&-grab-services/grab-hire" },
        { label: "Cage Lorries", path: "/tipper-&-grab-services/cage-lorries" },
        { label: "Man and Van", path: "/tipper-&-grab-services/man-and-van" },
        { label: "Aggregates", path: "/tipper-&-grab-services/aggregates" },
      ],
    },
  ];

  useEffect(() => {
    serviceMenu.forEach((el, id) => {
      if (el.children?.some((child) => pathname === child.path)) {
        setOpenMenu(id);
      }
    });
  }, [pathname]);

  return (
    <section
      className={cn(
        "shrink-0 min-h-[20rem] overflow-y-auto w-72 rounded-lg shadow-lg p-6",
        className
      )}
    >
      <span className="h4 text-primary font-semibold text-center" >Our Services</span>
      <aside className="flex flex-col gap-2 mt-6 w-full">
        {serviceMenu.map((el, id) => {
          const hasChildren = el.children?.length > 0;
          const isChildActive = el.children?.some((child) => pathname === child.path);
          const isActive = pathname === el.path || isChildActive;
          const isOpen = openMenu === id;

          return (
            <div key={id} className="flex flex-col">
              {/* Main item */}
              <div
                onClick={() => {
                  if (hasChildren) {
                    setOpenMenu(isOpen ? null : id);
                  } else {
                    router.push(el.path);
                  }
                }}
                className={cn(
                  "rounded-xl font-[300] w-full p-3 flex justify-between items-center cursor-pointer hover:text-black-1 hover:bg-white-2",
                  { "bg-white-1 text-primary font-[700]": isActive }
                )}
              >
                <span>{el.label}</span>
                {hasChildren &&
                  (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
              </div>

              {/* Submenu */}
              {hasChildren && isOpen && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {el.children.map((child, cId) => {
                    const isChildActive = pathname === child.path;
                    return (
                      <Link
                        key={cId}
                        href={child.path}
                        className={cn(
                          "rounded-lg font-[300] w-full p-2 pl-4 hover:text-black-1 hover:bg-white-2",
                          { "bg-white-1 text-primary font-[600]": isChildActive }
                        )}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </aside>
    </section>
  );
}
