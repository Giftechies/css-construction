"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname(); // get current path
  const segments = pathname?.split("/").filter(Boolean); // split path into segments

  // Build array of breadcrumb items with href
  const crumbs = segments?.map((segment, index) => {
    const href = "/" + segments?.slice(0, index + 1).join("/");
    // Capitalize first letter
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    return { label, href };
  });

  return (
    <nav aria-label="breadcrumb" className="flex  smt60p items-center space-x-1 h6">
      <Link href="/" className="text-white-1  hover:text-[var(--primary)]">
        Home
      </Link>
      {crumbs?.map((crumb, index) => (
        <div key={index} className="flex items-center  space-x-1">
          <ChevronRight className="w-4 h-4  " />
          {index === crumbs?.length - 1 ? (
            <span className="text-white-3 font-medium">{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className=" hover:text-[var(--primary)] transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
