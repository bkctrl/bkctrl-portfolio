import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import "./globals.css";

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BKctrl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

