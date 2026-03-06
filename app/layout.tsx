import type { Metadata } from "next";
import { Roboto, Montserrat, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* =========================
   FUENTES PERSONALIZADAS
========================= */

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

/* =========================
   METADATA
========================= */

export const metadata: Metadata = {
  title: "Erick Hernandez | Desarrollador Web",
  description: "Portafolio profesional de desarrollo web y software",
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5XXKPKLZ');
          `,
          }}
        />

      </head>

      <body
        className={`
          ${roboto.variable}
          ${montserrat.variable}
          ${raleway.variable}
          antialiased
        `}
      >

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XXKPKLZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <main className="bg-secondary text-white min-h-screen px-6 md:px-10 py-10">
          {children}
        </main>

      </body>
    </html>
  );
}