"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const ParallaxImage = () => {
  useEffect(() => {
    if (window.innerWidth >= 992) {
      gsap.registerPlugin(ScrollTrigger);

      if (
        document.querySelectorAll(".parallax-img").length > 0 &&
        window.innerWidth >= 992
      ) {
        document.querySelectorAll(".parallax-img").forEach((el) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "center center",
              end: "+=40%",
              scrub: 1,
              pin: false,
              invalidateOnRefresh: true,
            },
          });

          tl.to(el, {
            y: "150px",
            zIndex: "-1",
            opacity: 1,
            duration: 2,
          });
        });
      }
    }
  }, []);
  return null;
};

export default ParallaxImage;
