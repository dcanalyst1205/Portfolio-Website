import type { Metadata } from "next";
import { Inter, Titillium_Web } from "next/font/google";
import "./globals.css";
import TelemetryBar from "@/components/layout/TelemetryBar";
import SystemStatus from "@/components/layout/SystemStatus";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HADI KHAN // Portfolio Dashboard",
  description:
    "High-performance portfolio dashboard for Hadi Khan, a Computer Engineering student at the University of Waterloo. Built with precision engineering and Mercedes-AMG Petronas F1 aesthetics.",
  keywords: [
    "Hadi Khan",
    "University of Waterloo",
    "Computer Engineering",
    "Software Engineer",
    "Azure",
    "Next.js",
    "F1 Portfolio",
  ],
  authors: [{ name: "Hadi Khan" }],
  openGraph: {
    title: "HADI KHAN // Portfolio Dashboard",
    description: "Computer Engineering student @ UWaterloo — F1 inspired.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${titillium.variable} antialiased min-h-screen bg-[#0A0A0A] text-[#E5E5E5]`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {/* Grid Background */}
        <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

        {/* Navigation */}
        <TelemetryBar />

        {/* Main Content */}
        <main className="relative z-10 pt-16 pb-12 min-h-screen">
          {children}
        </main>

        {/* System Status Bar */}
        <SystemStatus />
      </body>
    </html>
  );
}
