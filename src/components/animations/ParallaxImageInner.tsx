"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ParallaxImageInner = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imageParallax = document.querySelectorAll(".parallax-image-content");

    if (imageParallax.length > 0) {
      imageParallax.forEach((element) => {
        const animImageParallax = element as HTMLElement;
        const aipWrap = animImageParallax.closest(
          ".parallax-image-wrap",
        ) as HTMLElement;
        const aipInner = aipWrap?.querySelector(".parallax-image-inner");

        if (aipWrap && aipInner) {
          let tl_ImageParallax = gsap.timeline({
            scrollTrigger: {
              trigger: aipWrap,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });

          tl_ImageParallax.to(animImageParallax, {
            yPercent: 30,
            ease: "none",
          });
          gsap.fromTo(
            aipInner,
            {
              scale: 1.2,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 1.5,
              scrollTrigger: {
                trigger: aipWrap,
                start: "top 99%",
                markers: false,
              },
            },
          );
          ScrollTrigger.refresh();
        }
      });
    }
  }, []);

  return null;
};

export default ParallaxImageInner;
