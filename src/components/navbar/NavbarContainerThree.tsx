"use client";
import { useEffect, useState } from "react";

import MobileNavbar from "./MobileNavbar";
import DeskTopNavbarTwo from "./DeskTopNavbarTwo";
import DeskTopNavbarThree from "./DeskTopNavbarThree";

const NavbarContainerThree = () => {
  const [scrollHight, setScrollHight] = useState<number>(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollHight(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative ">
      <DeskTopNavbarThree scrollHight={scrollHight} />
      <MobileNavbar  />
    </div>
  );
};

export default NavbarContainerThree;
