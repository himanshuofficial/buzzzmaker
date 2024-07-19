import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header id="site-header" className="top-0">
        <nav className="menu-primary-navigation-container px-3 py-4 flex fixed w-full top-0 justify-center content-center bg-white z-40 border-b-[1px]">
          <ul
            className="primary-nav flex items-center justify-center"
            id="primary-nav"
          >
            <li className="toggle toggle-menu alignleft">
              <span className="px-5 py-3 font-bold text-linktext hover:text-linkhovertext cursor-pointer">
                <Menu />
              </span>
            </li>
            <li className="menu-item split-menu w-[500px]">
              <div className="menu-split-menu-right-container">
                <ul id="split-menu-left" className="texts-left flex">
                  <li
                    id="menu-item-4443"
                    className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                  >
                    <Link href="/contact" role="button">
                      Contact
                    </Link>
                  </li>
                  <li
                    id="menu-item-4443"
                    className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                  >
                    <Link href="/finanace" role="button">
                      Finance
                    </Link>
                  </li>
                  <li
                    id="menu-item-4443"
                    className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                  >
                    <Link href="/ai-ar-vr" role="button">
                      AI/AR/VR
                    </Link>
                  </li>
                  <li
                    id="menu-item-4443"
                    className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                  >
                    <Link href="/viral" role="button">
                      Viral
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item logo-in-menu">
              <div className="logo-wrapper w-[130px] h-[70px] faux-heading">
                <a href="/" className="custom-logo-link" rel="home">
                  <Image
                    src={"/logo.png"}
                    alt="buzzzmaker.com"
                    className="custom-logo"
                    width="120"
                    height="200"
                  />
                </a>
              </div>
            </li>
            <li className="menu-item split-menu w-[500px]">
              <div className="menu-split-menu-left-container">
                <ul id="split-menu-right" className="flex flex-row-reverse">
                  <li
                    id="menu-item-4443"
                    className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                  >
                    <a href="https://buzzzmaker.com/contact/">Home</a>
                  </li>
                  <li
                    id="menu-item-4445"
                    className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                  >
                    <a href="https://buzzzmaker.com/category/finance/">
                      Travel
                    </a>
                  </li>
                  <li
                    id="menu-item-4444"
                    className="menu-item px-5 py-3 font-bold text-linktext hover:text-linkhovertext"
                  >
                    <a href="https://buzzzmaker.com/category/ai-ar-vr/">
                      Life Style
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="toggle toggle-search alignright">
              <span>
                <i className="icon-search"></i>
              </span>
            </li>
          </ul>
        </nav>
      </header>
      <div className="mt-40">{children}</div>
      <footer>this is the footer</footer>
    </>
  );
}
