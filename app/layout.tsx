import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Cormorant_Garamond,
  Alex_Brush,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
});

export const metadata: Metadata = {
  title: "C & S | Nuestra Boda",
  description: "Invitación de boda de Clara Iveth y Salvador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${inter.variable}
        ${cormorant.variable}
        ${alexBrush.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}