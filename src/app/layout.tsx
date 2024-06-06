import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Alfa_Slab_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const eventHAndler = () => {};
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container pt-24 mx-auto">{children}</div>
      </body>
    </html>
  );
}
