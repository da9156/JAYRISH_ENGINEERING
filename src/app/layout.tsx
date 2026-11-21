import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { businessInfo } from "@/data/business";

export const viewport: Viewport = {
  themeColor: "#1B3A5C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jayrishengineering.com"),
  title: {
    default: "CNC & VMC Classes in Vikhroli East, Mumbai | JAYRISH ENGINEERING",
    template: "%s | JAYRISH ENGINEERING"
  },
  description:
    "Join JAYRISH ENGINEERING in Vikhroli East, Mumbai for CNC and VMC operating and programming classes, Mastercam 2D & 3D, AutoCAD drafting, Siemens CNC, and CAD/CAM software training.",
  keywords: [
    "CNC Training in Vikhroli",
    "CNC Classes in Mumbai",
    "VMC Training in Mumbai",
    "CNC Programming Classes in Mumbai",
    "VMC Programming Classes in Mumbai",
    "Mastercam Training in Mumbai",
    "AutoCAD Training in Mumbai",
    "Siemens CNC Programming",
    "Delcam Programming Training",
    "JAYRISH ENGINEERING"
  ],
  authors: [{ name: "JAYRISH ENGINEERING" }],
  creator: "JAYRISH ENGINEERING",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jayrishengineering.com",
    title: "CNC & VMC Classes in Vikhroli East, Mumbai | JAYRISH ENGINEERING",
    description:
      "Join JAYRISH ENGINEERING in Vikhroli East, Mumbai for CNC and VMC operating and programming classes, Mastercam, AutoCAD, Siemens CNC, and CAD/CAM training.",
    siteName: "JAYRISH ENGINEERING",
    images: [
      {
        url: "/assets/logo/image copy.png",
        width: 1200,
        height: 630,
        alt: "JAYRISH ENGINEERING - CNC & VMC Training Institute Mumbai"
      }
    ]
  },
  icons: {
    icon: "/assets/logo/Standalone 3D gear and JE symbol logo.png",
    apple: "/assets/logo/Standalone 3D gear and JE symbol logo.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen flex flex-col bg-white text-slate-900 selection:bg-brand-orange selection:text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-orange focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
