import type { Metadata } from "next";
import { Pacifico, Lato, Bebas_Neue } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  variable: "--pacifico-font",
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900'],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jon Scott - UX Design and Development",
  description: "The works and a hint of personality of Jon Scott, a UX designer and developer.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${lato.variable} ${bebasNeue.variable} antialiased`}>
          {children}
      </body>
    </html>
  );
}
