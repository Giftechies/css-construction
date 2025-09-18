"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import "swiper/swiper-bundle.css";

const ImageMoveRight = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {
      const deviceWidth = window.innerWidth;
      if (document.querySelector(".image-move-section") && deviceWidth >= 768) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".image-move-section",
            start: "top top",
            end: "+=40%",
            scrub: 1,
            pin: false,
          },
        });

        tl.to(".move-thumb-one img", {
          transform: "rotate(14deg)",
          x: "300px",
          opacity: 1,
          duration: 3,
        });

        tl.to(".image-move-section .image-move-anime", {
          "--transformY": "300px",
          opacity: 0,
          duration: 3,
        });
      }
    }
  }, []);
  return null;
};

export default ImageMoveRight;
