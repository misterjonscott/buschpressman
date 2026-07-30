import type { Metadata } from "next";
import { Lato, Geist } from "next/font/google"; 
import "./globals.css";

// 1. Configure your Body Font
const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['300', '400', '700'],
});

// 2. Configure your crisp Title Font
const geistTitle = Geist({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Busch Press-Man Unit 20247",
  description: "History of the Busch Press-Man Unit 20247, a unique camera chassis designed to compete with the Graflex Speed Graphic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="FvhefMFqPYmUximEOaaNK6BWFjRM9Rolc_3OhPrLTLc" />
      {/* Inject both distinct variables into the body global wrapper */}
      <body className={`${lato.variable} ${geistTitle.variable} antialiased font-body bg-museum-dark text-stone-300`}>
          {children}
      </body>
    </html>
  );
}