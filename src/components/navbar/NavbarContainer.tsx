"use client";
import { useEffect, useState } from "react";
import DeskTopNavbar from "./DeskTopNavbar";
import MobileNavbar from "./MobileNavbar";

const NavbarContainer = () => {
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
      <DeskTopNavbar  />
      <MobileNavbar />
    </div>
  );
};

export default NavbarContainer;
