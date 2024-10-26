import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export const AlexBrush = localFont({
  src: "./fonts/AlexBrush-Regular.ttf",
  variable: "--font-alex-brush",
  weight: "400",
})

export const JosefinSans = localFont({
  src : "./fonts/JosefinSans-VariableFont_wght.ttf",
  variable: "--font-josefin-sans",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Björn & Felicia 2025",
  description: "Björn Larsson och Felicia Nylander Normans bröllop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JosefinSans.variable} ${JosefinSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
