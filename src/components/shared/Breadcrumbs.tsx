"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname?.split("/").filter(Boolean);

  const crumbs = segments?.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    return { label, href };
  });

  return (
    <nav
      aria-label="breadcrumb"
      className="relative z-50 flex items-center space-x-1 smt60p pointer-events-auto"
    >
      <Link href="/" className="text-white hover:text-[var(--primary)] cursor-pointer">
        Home
      </Link>
      {crumbs?.map((crumb, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="w-4 h-4" />
          {index === crumbs.length - 1 ? (
            <span className="text-gray-300 font-medium">{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-[var(--primary)] transition-colors cursor-pointer"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
