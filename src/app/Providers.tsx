
"use client";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/store/store"; // adjust path if your store is elsewhere
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/footer/Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ReactLenis root options={{ smooth: true, smoothTouch: true, duration: 1 }}>
        <main>
          <div className="relative min-h-screen flex flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </main>
      </ReactLenis>
    </ReduxProvider>
  );
}
