"use client";
import { IconChevronsUp } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const ScrollProgressButton = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const scrollRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    setIsActive(window.scrollY > 50);
  };

  const handleProgressClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      ref={scrollRef}
      className={`group/topButton theme-transition-3 invisible fixed bottom-8 right-8 z-50 block size-10 cursor-pointer rounded-full bg-black-4 opacity-0 md:!size-14 ${isActive ? "!visible translate-y-0 opacity-100" : " "}`}
      onClick={handleProgressClick}
      title="Go To Top"
    >
      <svg
        className="svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          className=" stroke-accent-3 stroke-[4px]"
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          stroke="#3887FE"
          strokeWidth="4"
          fill="none"
          style={{
            strokeDasharray: "308.66px",
            strokeDashoffset: `${308.66 - scrollProgress * 3.0866}px`,
          }}
        />
      </svg>
      <IconChevronsUp className="theme-transition-3 absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-white-1 group-hover/topButton:text-accent-3 md:size-8" />
    </button>
  );
};

export default ScrollProgressButton;
