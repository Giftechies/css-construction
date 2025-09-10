"use client";
import logo from "@/../public/img/logo/nav-logo.svg";
import { cn } from "@/utils/cn";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { mobilenav, } from "../../../public/data/navbar";


const MobileNavbar = ({className}:{className?:string}) => {
  const [dropDown, setDropDown] = useState("");
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown("");
    } else {
      setDropDown(id);
    }
  };

  const pathName = usePathname();

  const handleToggle = () => {
    setSidebarToggle(!sidebarToggle);
    disableScroll();
  };

  const disableScroll = () => {
    if (!sidebarToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div
      className={cn("top-0 w-full z-50 bg-transparent  ",className
      )}
    >
      <div className="container left-0 top-0  flex w-full items-center justify-between py-4 xl:hidden xl:py-5">
        <div className=" ">
          <Link href={`/`}>
            <Image
              src={'/img/logo/nav-logo.svg'}
              width={250}
              height={100}
              alt="Desktop Logo"
              className="max-xl:w-[80px]"
            />
          </Link>
        </div>
        <div
          onClick={handleToggle}
          className="bg-white group flex h-10 w-10 cursor-pointer items-center justify-center rounded-md p-2 "
        >
          <div className="space-y-2">
            <span
              className={cn(
                "block h-1 w-10 origin-center rounded-full bg-white-4 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45",
                { "translate-y-1.5 rotate-45": sidebarToggle },
              )}
            ></span>
            <span
              className={cn(
                "block h-1 w-8 origin-center rounded-full bg-white-4 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45",
                { "w-10 -translate-y-1.5 -rotate-45": sidebarToggle },
              )}
            ></span>
          </div>
        </div>
      </div>
      <div className="theme-transition-3 block xl:hidden">
        <div
          className={cn(
            "fixed left-0 top-0 z-20 h-full w-[100%] bg-secondary/40  transition-all duration-500",

            { "translate-x-0": sidebarToggle },
            { "-translate-x-full": !sidebarToggle },
          )}
          onClick={handleToggle}
        ></div>
        <div
          className={cn(
            `mobile-menu-scrollbar fixed left-0 top-0 z-40  h-screen w-[60%]  lg:px-10  overflow-y-auto rounded-r-2xl bg-black-4 pt-8 text-black-4 transition-all duration-700`,
            { "translate-x-0 opacity-100": sidebarToggle },
            { "-translate-x-full opacity-0": !sidebarToggle },
          )}
        >
          <div className="px-5 pb-4">
            <Link href={`/`}>
              <Image
                src='img/logo/nav-logo.svg'
                width={167}
                height={60}
                alt="Desktop Logo"
                className="mx-auto block w-[200px]"
              />
            </Link>
          </div>
          <div className="min-h-screen rounded-xl bg-white-1 p-2 ">
            <ul data-lenis-prevent className="flex flex-col">
              {mobilenav.map(({ id, menuTitle, path, menuItems }) => {
                let isActive = menuItems?.some(
                  (path) => pathName == path.menuItemPath,
                );
                return menuItems ? (
                  <li key={`${id}`}>
                    <p
                      onClick={() => handleDropDown(id)}
                      className={cn(
                        "theme-transition-3 my-1 flex cursor-pointer items-center justify-between rounded-md border-b bg-secondary/20 px-8 py-5",
                        { " font-medium text-primary": isActive },
                      )}
                    >
                      <span className="l-text">{menuTitle}</span>{" "}
                      <IconChevronDown stroke="2" />
                    </p>
                    <AnimateHeight
                      duration={500}
                      height={dropDown === id ? "auto" : 0}
                      aria-label={`example-panel-${menuTitle}`}
                    >
                      <ul className="mx-8 flex flex-col rounded-md bg-white-4">
                        {menuItems.map(({ id, title, menuItemPath }) => (
                          <li
                            key={id}
                            className={cn(
                              `theme-transition-3 relative my-0.5 w-full rounded-md bg-secondary/20 py-2 ps-10 before:left-5 before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full before:bg-primary hover:text-primary hover:before:absolute`,
                              {
                                "text-primary before:absolute":
                                  pathName === menuItemPath,
                              },
                            )}
                          >
                            <Link
                              onClick={() => {
                                setSidebarToggle(false), disableScroll();
                              }}
                              href={`${menuItemPath}`}
                              className={cn("l-text")}
                            >
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AnimateHeight>
                  </li>
                ) : (
                  <li key={id}>
                    <Link
                      onClick={() => {
                        setSidebarToggle(false), disableScroll();
                      }}
                      href={`${path}`}
                      className={cn(
                        "theme-transition-3 my-1 block w-full rounded-md border-b bg-secondary/20 px-8 py-5 ",
                        {
                          "text-primary": pathName === path,
                        },
                      )}
                    >
                      {" "}
                      <span className="textXL mobile-menu-link">
                        <span>{menuTitle}</span>{" "}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
