import type { Metadata } from "next";
import { Roboto, Montserrat, Raleway } from "next/font/google";
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
      <body
        className={`
          ${roboto.variable}
          ${montserrat.variable}
          ${raleway.variable}
          antialiased
        `}
      >
        <main className="bg-secondary text-white min-h-screen px-6 md:px-10 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}