
"use client";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/store/store"; // adjust path if your store is elsewhere
import { ReactLenis } from "@studio-freight/react-lenis";
import { Toaster } from "react-hot-toast";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ReactLenis root options={{ smooth: true, smoothTouch: true, duration: 1 }}>
        <main>
          <div className="relative min-h-screen flex flex-col">
            <div className="flex-1">
              {children}
              <Toaster position="top-right"  reverseOrder={false} />
              </div>
          </div>
        </main>
      </ReactLenis>
    </ReduxProvider>
  );
}
