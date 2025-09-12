"use client";
// import logo from "../../../public/img/logo/nav-logo.svg";
import { cn } from "@/utils/cn";
import {
  IconArrowUpRight,
  IconBrandTelegram,
  IconChevronDown,
  IconEdit,
  IconLock,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { navbarData } from "../../../public/data/navbarData";
import { navbar, navbar2 } from "../../../public/data/navbar";
import { PhoneCallIcon } from "lucide-react";
import HomeThreeBannerLink from "@/pages/home-three/HomeThreeBannerLink";

const DeskTopNavbarTwo = ({ className }: { className?: string }) => {
  const pathName = usePathname();

  return (
    <div
      className={cn(" w-full theme-transition-3  py-4  ", className
      )}
    >
      <div
        className="    theme-transition-3 mx-auto hidden
      w-full items-center justify-center container xl:grid grid-cols-12    "
      >
        <ul className="flex items-center  gap-8 xl:col-start-1 col-end-7  ">
          {navbar.map(({ id, menuTitle, path, menuItems }) => {
            let isActive = menuItems?.some(
              (path) => pathName == path.menuItemPath,
            );
            return menuItems ? (
              <li key={`${id}`} className="group relative">
                <Link
                  href={`${path}`}
                  className={cn(
                    " theme-transition-3 relative z-10 flex cursor-pointer items-center justify-between gap-1 before:theme-transition-3 before:absolute before:bottom-0  before:block before:h-px before:w-0 before:bg-primary hover:text-primary hover:before:w-full",
                    isActive && "text-primary before:w-full before:bg-primary",
                  )}
                >
                  {" "}
                  <span className="">{menuTitle}</span>
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
                        className={`   theme-transition-3 relative block w-full border-b border-accent-3/20 bg-black-4 px-6 py-2  before:theme-transition-3 hover:before:theme-transition-3 before:left-2  before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full hover:tracking-wide  hover:text-accent-3 hover:before:absolute hover:before:bg-accent-3 ${pathName === menuItemPath &&
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
                    " navbar-hover-text  theme-transition-3 relative z-10 flex cursor-pointer items-center justify-between gap-1 before:theme-transition-3 before:absolute before:bottom-0  before:block before:h-px before:w-0 before:bg-primary hover:text-primary hover:before:w-full",
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
        <div className=" absolut left-1/2 top-4 -translate-x-1/2  " >
          <Link href={`/`}>
            <Image src={'/img/logo/nav-logo.svg'} width={200} height={60} className=" w-30 " alt="Desktop Logo" />
          </Link>
        </div>

        <div className="  flex gap-10 col-start-9 col-end-13 " >
          <ul className="flex items-center justify-between gap-10  ">
            {navbar2.map(({ id, menuTitle, path, menuItems }) => {
              let isActive = menuItems?.some(
                (path) => pathName == path.menuItemPath,
              );
              return menuItems ? (
                <li key={`${id}`} className="group  relative">
                  <Link
                    href={`${path}`}
                    className={cn(
                      " theme-transition-3 relative z-10 flex cursor-pointer items-center justify-between gap-1 before:theme-transition-3 before:absolute before:bottom-0  before:block before:h-px before:w-0 before:bg-primary hover:text-primary hover:before:w-full",
                      isActive && "text-primary before:w-full before:bg-primary",
                    )}
                  >
                    {" "}
                    <span className="">{menuTitle}</span>
                    {/* hidden used for  */}
                    <IconChevronDown className="hidden" stroke="2" />
                  </Link>

                  <ul
                    data-lenis-prevent
                    className="rounded-tl-0 navbar-dropdown-scrollbar duration-400 theme-transition-3 fixed z-30 mt-1 flex max-h-0 flex-col overflow-hidden rounded-md bg-black-1 py-1 text-white-1 opacity-0 shadow-2xl group-hover:max-h-[400px] group-hover:overflow-auto group-hover:opacity-100"
                  >
                    {menuItems.map(({ id, title, menuItemPath }) => (
                      <li key={id}>
                        <Link
                          href={`${menuItemPath}`}

                          // hidden used
                          className={` hidden  theme-transition-3 relative  w-full border-b border-accent-3/20 bg-black-4 px-6 py-3    before:theme-transition-3 hover:before:theme-transition-3 before:left-2  before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full hover:tracking-wide  hover:text-accent-3 hover:before:absolute hover:before:bg-accent-3 ${pathName === menuItemPath &&
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
                      " navbar-hover-text  theme-transition-3 relative z-10 flex cursor-pointer items-center justify-between gap-1 before:theme-transition-3 before:absolute before:bottom-0  before:block before:h-px before:w-0 before:bg-primary hover:text-primary hover:before:w-full",
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
            href={`tel:123456789`}
            className={cn(
              "l-text theme-transition-3 flex items-center gap-1  hover:text-primary  text-white-1"
            
            )}
          >
            <PhoneCallIcon className=" text-primary mr-2 " />
            <span>123456789</span>
          </Link> */}
          

            <HomeThreeBannerLink href="/booking-skip-online" >Order Online</HomeThreeBannerLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskTopNavbarTwo;
