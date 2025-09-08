// src/utils/fonts.ts
import { Roboto, Saira_Condensed } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto", // ✅ important for Tailwind
});

export const sairaCondensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-saira-condensed", // ✅ important for Tailwind
});
