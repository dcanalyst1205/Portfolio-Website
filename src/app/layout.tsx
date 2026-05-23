import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-website-two-khaki-79.vercel.app"),
  title: {
    default: "Hadi Khan — Computer Engineering @ UWaterloo",
    template: "%s — Hadi Khan",
  },
  description:
    "Portfolio of Hadi Khan, Computer Engineering student at the University of Waterloo. Building precise, performant software.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://portfolio-website-two-khaki-79.vercel.app",
    siteName: "Hadi Khan",
    title: "Hadi Khan — Computer Engineering @ UWaterloo",
    description:
      "Portfolio of Hadi Khan, Computer Engineering student at the University of Waterloo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadi Khan — Computer Engineering @ UWaterloo",
    description:
      "Portfolio of Hadi Khan, Computer Engineering student at the University of Waterloo.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        Fonts are loaded via @import in globals.css (Barlow Condensed, Barlow,
        JetBrains Mono). No next/font needed since we're using Google Fonts CDN
        directly for simplicity — swap to next/font if you want better LCP.
      */}
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
