"use client";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SmoothScroll = () => {
  useGSAP(() => {
    if (window.innerWidth >= 992) {
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis();
      gsap.ticker.add((time) => {
        lenis.raf(time * 350);
      });
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.update();
    }
  }, []);
  return null;
};

export default SmoothScroll;
