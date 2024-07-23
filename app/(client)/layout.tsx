import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import FooterComp from "../_components/footer";
import Header from "../_components/header";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="mt-40">{children}</div>
      <FooterComp />
    </>
  );
}
