import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shero Home Foods | 90-Day Content Plan",
  description:
    "Strategic 90-day multi-channel content roadmap for Shero Home Foods featuring weekly themes, hero stories, and channel cadence."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} min-h-screen bg-sherocream text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
