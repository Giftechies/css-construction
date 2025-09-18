"use client";
import { useGSAP } from "@gsap/react";

const ButtonHoverAnimation = () => {
  useGSAP(() => {
    const btnAnim = document.querySelectorAll(".btn-anim");
    if (btnAnim.length > 0) {
      btnAnim.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        btnAnim.forEach((element) => {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }
  }, []);

  const handleMouseEnter = (e: any) => {
    const element = e.currentTarget as any;
    const span = element.querySelector("span");
    if (span) {
      const rect = element.getBoundingClientRect();
      span.style.left = `${e.clientX - rect.left}px`;
      span.style.top = `${e.clientY - rect.top}px`;
    }
  };

  const handleMouseLeave = (e: any) => {
    const element = e.currentTarget as HTMLElement;
    const span = element.querySelector("span");
    if (span) {
      const rect = element.getBoundingClientRect();
      span.style.left = `${e.clientX - rect.left}px`;
      span.style.top = `${e.clientY - rect.top}px`;
    }
  };

  return null;
};

export default ButtonHoverAnimation;
