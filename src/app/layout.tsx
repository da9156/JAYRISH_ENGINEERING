import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { businessInfo } from "@/data/business";

export const viewport: Viewport = {
  themeColor: "#1B3A5C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jayrishengineering.com"),
  title: {
    default: "JAYRISH ENGINEERING | CNC & VMC Classes in Vikhroli East, Mumbai",
    template: "%s"
  },
  description:
    "Join JAYRISH ENGINEERING in Vikhroli East, Mumbai for CNC and VMC programming, machine operating, Mastercam, AutoCAD and CAD/CAM training.",
  keywords: [
    "CNC Training in Vikhroli",
    "CNC Classes in Mumbai",
    "VMC Training in Mumbai",
    "JAYRISH ENGINEERING",
    "Jayrish Engineering",
    "jayrish engineering",
    "Jayrish Engineering Mumbai",
    "jayrish engineering CNC classes",
    "CNC Training Institute in Mumbai",
    "CNC & VMC Classes in Mumbai",
    "CNC Classes in Vikhroli East",
    "VMC Classes in Mumbai",
    "CNC Programming Classes in Mumbai",
    "VMC Programming Classes in Mumbai",
    "Mastercam Training in Mumbai",
    "AutoCAD Training in Mumbai",
    "Siemens CNC Programming",
    "Delcam Programming Training",
    "CNC and VMC classes near Vikhroli East"
  ],
  authors: [{ name: "JAYRISH ENGINEERING" }],
  creator: "JAYRISH ENGINEERING",
  publisher: "JAYRISH ENGINEERING",
  alternates: {
    canonical: "https://www.jayrishengineering.com/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.jayrishengineering.com",
    title: "JAYRISH ENGINEERING | CNC & VMC Classes in Vikhroli East, Mumbai",
    description:
      "Join JAYRISH ENGINEERING in Vikhroli East, Mumbai for CNC and VMC programming, machine operating, Mastercam, AutoCAD and CAD/CAM training.",
    siteName: "JAYRISH ENGINEERING",
    images: [
      {
        url: "/assets/logo/image copy.png",
        width: 1200,
        height: 630,
        alt: "JAYRISH ENGINEERING - CNC & VMC Technical Training Institute in Vikhroli East, Mumbai"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "JAYRISH ENGINEERING | CNC & VMC Classes in Vikhroli East, Mumbai",
    description:
      "Join JAYRISH ENGINEERING in Vikhroli East, Mumbai for CNC and VMC programming, machine operating, Mastercam, AutoCAD and CAD/CAM training.",
    images: ["/assets/logo/image copy.png"]
  },
  icons: {
    icon: "/assets/logo/Standalone 3D gear and JE symbol logo.png",
    apple: "/assets/logo/Standalone 3D gear and JE symbol logo.png"
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "-lU6hf4OkdnoVwgtAPChd-iHM21Aht6UDFb7os5O8t0"
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
        <GoogleAnalytics />
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
