// app/providers.tsx
"use client";

import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/store/store"; // adjust path if your store is elsewhere
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/footer/Footer";

/**
 * AppProviders: client wrapper for client-only libraries
 * - Keeps root layout as server component (preserving RSC benefits)
 * - Keeps client libraries isolated to a single component
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      {/* ReactLenis is client-only and now scoped here */}
      <ReactLenis root options={{ smooth: true, smoothTouch: true, duration: 1 }}>
        <main>
          <div className="relative min-h-screen flex flex-col">
            {/* page content */}
            <div className="flex-1">{children}</div>

            {/* Footer is client-safe and will render on the client wrapper */}
            <Footer />
          </div>
        </main>
      </ReactLenis>
    </ReduxProvider>
  );
}
