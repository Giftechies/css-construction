"use client";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const VanillaTiltHoverCard = () => {
  useEffect(() => {
    if (window.innerWidth >= 992) {
      const tiltElements = document.querySelectorAll(".till-card");
      tiltElements.forEach((element) => {
        const tiltElement = element as HTMLElement;
        VanillaTilt.init(tiltElement, {
          max: 5,
          speed: 3000,
        });
      });
    }
  }, []);

  return null;
};

export default VanillaTiltHoverCard;
