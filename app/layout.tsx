import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootLayoutClient } from "./root-layout-client";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RaceX - Premium Formula 1 Platform",
  description:
    "Experience Formula 1 like never before with RaceX, the premium F1 platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
