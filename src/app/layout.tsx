// app/layout.tsx
import "@/styles/globals.css"; // global CSS (server import)
import "@/../node_modules/react-modal-video/scss/modal-video.scss"; // third-party global styles

import { oswald, manrope } from "@/utils/fonts";
import Providers from "./Providers"; // client wrapper that contains Redux + Lenis
import Script from "next/script";

export const metadata = {
  title: "CSS Construction",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${manrope.variable} ${manrope.className}`}>
      <head>
        {/* External icon font - OK in head */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        {/* Google Tag (recommended to load external script with next/script for performance) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EXNY5VTVP8"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EXNY5VTVP8');
          `}
        </Script>
      </head>

      <body>
        {/* Providers is a client component that supplies Redux, Lenis, etc. */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
