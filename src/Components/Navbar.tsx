"use client";
import Image from "next/image";
import Phone from "../assets/icons/phone.png";
import Flag from "../assets/icons/uzbekistan.png";
import LogoClamo from "../assets/icons/LogoClamo.svg";
import Down from "../assets/icons/down.png";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container px-5 md:px-0">
      <nav className="flex items-center justify-between py-[30px] flex-wrap relative">
        {/* Hamburger Button */}
        <button
          className="flex flex-col gap-1.5 z-50 lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#3D445E] transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-[#3D445E] transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-[#3D445E] transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Logo */}
        <Link href="/">
          <Image
            src={LogoClamo}
            alt="Logo"
            width={155.71}
            height={40}
            className="w-[155.71px] h-[40px]"
          />
        </Link>

        {/* Navigation Links */}
        <ul
          className={`w-full lg:w-auto absolute lg:static top-20 left-0 bg-white lg:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 lg:opacity-100 lg:max-h-screen"} z-40 flex flex-col lg:flex-row lg:items-center lg:gap-10 px-5 py-5 lg:p-0 shadow-md lg:shadow-none`}
        >
          {/* Biz haqimizda dropdown */}
          <li className="relative group text-sm font-medium text-[#3D445E] py-2 lg:p-0 w-full lg:w-auto cursor-pointer">
            Biz haqimizda
            <ul className="absolute left-0 top-full bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 min-w-[200px] z-50">
              <li className="py-2 px-4 hover:bg-gray-100">
                <Link href="/about">Markaz haqida</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-100">
                <Link href="/about/documents">Normativ hujjatlar</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-100">
                <Link href="/about/international">Xalqaro hamkorlik</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-100">
                <Link href="/about/consulting">Konsultatsiya</Link>
              </li>
            </ul>
          </li>

          <li className="text-sm font-medium text-[#3D445E] py-2 lg:p-0 w-full lg:w-auto">
            <Link href="/license">Litsenziyalash</Link>
          </li>
          <li className="text-sm font-medium text-[#3D445E] py-2 lg:p-0 w-full lg:w-auto">
            Akkreditsiyalash
          </li>
          <li className="text-sm font-medium text-[#3D445E] py-2 lg:p-0 w-full lg:w-auto">
            Bog&apos;lanish
          </li>

          {/* Language selector (burger menu view) */}
          {isMenuOpen && (
            <li className="lg:hidden py-2 w-full">
              <article className="flex items-center gap-3">
                <Image
                  src={Flag}
                  alt="Flag icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <article className="flex items-center gap-[9px]">
                  <p className="text-sm uppercase text-[#3D445E] font-medium">uz</p>
                  <div className="w-5 h-5 flex items-center">
                    <Image src={Down} alt="Down arrow" width={11} height={11} />
                  </div>
                </article>
              </article>
            </li>
          )}
        </ul>

        {/* Right Side: Language & Phone */}
        <ul className="flex items-center md:gap-8 lg:flex">
          <article className="flex items-center gap-3 max-lg:hidden">
            <Image
              src={Flag}
              alt="Flag icon"
              width={24}
              height={24}
              className="object-contain"
            />
            <article className="flex items-center gap-[9px]">
              <p className="text-sm uppercase text-[#3D445E] font-medium">uz</p>
              <div className="w-5 h-5 flex items-center">
                <Image src={Down} alt="Down arrow" width={11} height={11} />
              </div>
            </article>
          </article>
          <article className="flex items-center gap-[6px]">
            <Image src={Phone} alt="Phone icon" width={17} height={17} />
            <p className="text-base font-bold text-[#3D445E]">1369</p>
          </article>
        </ul>
      </nav>
    </div>
  );
}
