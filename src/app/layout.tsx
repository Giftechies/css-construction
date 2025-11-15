"use client";
import "@/../node_modules/react-modal-video/scss/modal-video.scss";
import "@/styles/globals.css";


import { Provider } from "react-redux";
import { store } from "./store/store";

import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "@/components/footer/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { oswald,manrope } from "@/utils/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`  ${oswald.variable} ${manrope.variable} ${manrope.className}    `}> 
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <body>
      <ReactLenis 
  root 
  options={{ smooth: true, smoothTouch: true, duration: 1 }}
>
    <main>
      <div className="relative">{children}</div>
    
    </main>

</ReactLenis>
      </body>
    </html>
  );
}
