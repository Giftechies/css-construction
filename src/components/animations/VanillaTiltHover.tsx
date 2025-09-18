"use client";
import VanillaTilt from "vanilla-tilt";

const VanillaTiltHover = () => {
  const tiltSelectors = [".btn-anim", ".topy-tilt"];
  const tiltElements = document.querySelectorAll(tiltSelectors.join(", "));

  tiltElements.forEach((element) => {
    const tiltElement = element as HTMLElement;
    let tiltConfig: any = {
      speed: 3000,
    };

    if (tiltElement.classList.contains("btn-anim")) {
      tiltConfig = {
        ...tiltConfig,
        max: 15,
        perspective: 400,
      };
    } else if (tiltElement.classList.contains("topy-tilt")) {
      tiltConfig = {
        ...tiltConfig,
        max: 5,
      };
    }

    VanillaTilt.init(tiltElement, tiltConfig);
  }, []);

  return null;
};

export default VanillaTiltHover;
