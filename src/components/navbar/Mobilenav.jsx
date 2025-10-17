"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { IconChevronDown, IconX } from "@tabler/icons-react";
import { mobilenav } from "@/../public/data/navbar";
import Link from "next/link";
import Image from "next/image";
import Media from "../footer/Media";
import { useRouter } from "next/navigation";

const Mobilenav = ({ className }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [sideopen, setSideopen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
    setSideopen(!sideopen);
  };

  const toggleOption = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle only that item
  };

  useEffect(() => {
    if (sideopen) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [sideopen]);

  return (
    <section>
      {/* Top nav bar with logo + hamburger */}
      <div
        className={cn(
          "z-50 absolute inset-0 p-4 max-xl:flex justify-between hidden",
          className,
          { invisible: sideopen }
        )}
      >
       <Link  href={'/'} >
       
       
        <div className="logo w-[80px]">
          <Image
            src={"/img/logo/nav-logo.svg"}
            className="w-full object-center object-cover"
            width={250}
            height={250}
            alt="logo"
          />
        </div></Link>
        <div onClick={toggleSidebar} className="space-y-2 cursor-pointer">
          <span
            className={cn(
              "block h-1 w-10 origin-center rounded-full bg-white-4 transition-transform ease-in-out",
              { "translate-y-1.5 rotate-45": sidebarToggle }
            )}
          ></span>
          <span
            className={cn(
              "block h-1 w-8 origin-center rounded-full bg-white-4 transition-transform ease-in-out",
              { "w-10 -translate-y-1.5 -rotate-45": sidebarToggle }
            )}
          ></span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-screen bg-black z-50 transform transition-transform duration-500 ease-in-out",
          { "-translate-x-full w-0": !sideopen, "translate-x-0 w-full": sideopen }
        )}
      >
        <div
          className={cn(
            "w-0 invisible h-screen p-6 bg-black-4 transition-all",
            { "w-[70%] visible": sideopen }
          )}
        >
          {/* Header */}
          <div className="icon w-full flex justify-between items-center">
            <div className="logo w-18">
              <img src="/img/logo/nav-logo.svg" alt="logo" />
            </div>
            <div
              onClick={toggleSidebar}
              className="cross text-white-1 group cursor-pointer"
            >
              <IconX className="text-4xl group-hover:rotate-90 transition-transform" />
            </div>
          </div>

          {/* Menu List */}
          <ul className="list text-white-1 mt-4 space-y-4 overflow-auto">
            {mobilenav.map((item, idx) => (
              <li key={idx} className="border-b border-white-2 pb-2">
                <div
                  className="flex justify-between items-center py-2 cursor-pointer"
                  onClick={() =>
                    item.menuItems ? toggleOption(idx) : setSideopen(false)
                  }
                >
                  {item.menuItems ? (
                    <span>{item.menuTitle}</span>
                  ) : (
                    <Link href={item.path}>{item.menuTitle}</Link>
                  )}

                  {item.menuItems && (
                    <IconChevronDown
                      className={cn("transition-transform", {
                        "rotate-180": openIndex === idx,
                      })}
                    />
                  )}
                </div>

                {/* Submenu */}
                {openIndex === idx && item.menuItems && (
                  <ul className="pl-4 space-y-4">
                    {item.menuItems.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link href={subItem.menuItemPath}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Social / Media */}
          <Media className={"mt-4"} />
        </div>
      </div>
    </section>
  );
};

export default Mobilenav;
