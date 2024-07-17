import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buzzzmaker",
  description: "Buzzzmaker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right"/>
        
      </body>
    </html>
  );
}
