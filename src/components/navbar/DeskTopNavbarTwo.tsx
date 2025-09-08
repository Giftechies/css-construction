"use client";
// import logo from "../../../public/img/logo/nav-logo.svg";
import { cn } from "@/utils/cn";
import {
  IconArrowUpRight,
  IconChevronDown,
  IconLock,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { navbarData } from "../../../public/data/navbarData";
import { navbar } from "../../../public/data/navbar";

const DeskTopNavbarTwo = ({className}:{className?:string}) => {
  const pathName = usePathname();

  return (
    <div
      className={cn(" w-full theme-transition-3 leading-[19.2px]   font-[700] ",className
      )}
    >
      <div
        className="transition-primary py-4 theme-transition-3 mx-auto hidden
      w-full items-center justify-between max-4xl:container xl:flex 4xl:max-w-[1674px] min-[1920px]:max-w-[1774px]"
      >
        <div>
          <Link href={`/`}>
            <Image src={'/img/logo/nav-logo.svg'} width={200} height={60} className=" size-30 " alt="Desktop Logo" />
          </Link>
        </div>

        <ul className="flex items-center justify-between gap-10  font-[700] ">
          {navbar.map(({ id, menuTitle, path, menuItems }) => {
            let isActive = menuItems?.some(
              (path) => pathName == path.menuItemPath,
            );
            return menuItems ? (
              <li key={`${id}`} className="group relative">
                <Link
                href={`${path}`}
                  className={cn(
                    " l-text theme-transition-3 relative z-10 flex cursor-pointer items-center justify-between gap-1 before:theme-transition-3 before:absolute before:bottom-0  before:block before:h-px before:w-0 before:bg-primary hover:text-primary hover:before:w-full",
                    isActive && "text-primary before:w-full before:bg-primary",
                  )}
                >
                  {" "}
                  <span className="l-text">{menuTitle}</span>
                  <IconChevronDown stroke="2" />
                </Link>

                <ul
                  data-lenis-prevent
                  className="rounded-tl-0 navbar-dropdown-scrollbar duration-400 theme-transition-3 fixed z-30 mt-1 flex max-h-0 flex-col overflow-hidden rounded-md bg-black-1 py-1 text-white-1 opacity-0 shadow-2xl group-hover:max-h-[400px] group-hover:overflow-auto group-hover:opacity-100"
                >
                  {menuItems.map(({ id, title, menuItemPath }) => (
                    <li key={id}>
                      <Link
                        href={`${menuItemPath}`}
                        className={`l-text font-extralight  theme-transition-3 relative block w-full border-b border-accent-3/20 bg-black-4 px-6 py-1  before:theme-transition-3 hover:before:theme-transition-3 before:left-2  before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full hover:tracking-wide  hover:text-accent-3 hover:before:absolute hover:before:bg-accent-3 ${
                          pathName === menuItemPath &&
                          "tracking-wide text-accent-3 before:absolute before:bg-accent-3"
                        }`}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={id} className={``}>
                <Link
                  href={`${path}`}
                  className={cn(
                    "l-text navbar-hover-text font-l-text theme-transition-3 relative z-10 flex cursor-pointer items-center justify-between gap-1 before:theme-transition-3 before:absolute before:bottom-0  before:block before:h-px before:w-0 before:bg-primary hover:text-primary hover:before:w-full",
                    { "text-primary before:w-full": pathName === path },
                  )}
                >
                  {" "}
                  {menuTitle}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex gap-8">
          {/* <Link
            href={`/login`}
            className={cn(
              "l-text theme-transition-3 flex items-center gap-1  hover:text-accent-3  text-black-4"
            
            )}
          >
            <IconLock />
            <span>Login</span>
          </Link> */}
          <Link
            href={`/pick-details`}
            className={cn(
              "l-text spx24px group theme-transition-3 rounded-full flex gap-3  text-white-1 bg-prim py-3",
            )}
          >
            <span className=" uppercase" >Enquire Now</span>
            <IconArrowUpRight className="theme-transition-3 group-hover:rotate-45" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeskTopNavbarTwo;
