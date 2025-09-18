// src/utils/fonts.ts
import { Oswald,Manrope } from "next/font/google";



export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald", // ✅ important for Tailwind
});
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300","400","500", "600", "700"],
  variable: "--font-manrope", // ✅ important for Tailwind
});
