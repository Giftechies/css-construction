"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const AppearDown = () => {
  useGSAP(() => {
    const appearDownSections = document.querySelectorAll(".appear-down");
    if (window.innerWidth >= 992) {
      gsap.registerPlugin(ScrollTrigger);
      appearDownSections.forEach((section) => {
        gsap.fromTo(
          section,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: section,
              scrub: 1,
              start: "top bottom",
              end: "bottom center",
            },
          },
        );
      });
    }
  }, []);
  return null;
};

export default AppearDown;
