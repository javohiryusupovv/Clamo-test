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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
          <span
            className={`w-6 h-0.5 bg-[#3D445E] transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#3D445E] transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#3D445E] transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <Link href="/">
          <ul>
            <li>
              <Image
                src={LogoClamo}
                alt="Logo"
                width={55}
                height={55}
                className="w-[155.71px] h-[40px]"
              />
            </li>
          </ul>
        </Link>

        {/* Navigation Links */}
        <ul
          className={`w-full lg:w-auto absolute lg:static top-20 left-0 bg-white lg:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 lg:opacity-100 lg:max-h-screen"
          } overflow-hidden z-40 flex flex-col lg:flex-row lg:items-center lg:gap-10 px-5 py-5 lg:p-0 shadow-md lg:shadow-none`}
        >
          <article className="relative flex items-center gap-[9px] py-2 lg:p-0 w-full lg:w-auto">
            <div className="flex items-center w-full">
              <Link href="/about">
                <button
                  onClick={toggleDropdown}
                  className="text-sm font-medium text-[#3D445E] flex-1 text-left lg:text-center"
                  aria-expanded={isDropdownOpen}
                  aria-controls="dropdown-menu"
                >
                  Biz haqimizda
                </button>
              </Link>
              <div className="w-5 h-5 flex items-center">
                <Image
                  src={Down}
                  alt="Down arrow"
                  width={11}
                  height={11}
                  className={`mt-[6px] transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            {isDropdownOpen && (
              <ul
                id="dropdown-menu"
                className="absolute top-full left-0 w-full lg:w-48 bg-white shadow-md lg:shadow-lg mt-2 z-50 flex flex-col lg:rounded-md"
              >
                <Link
                  href="/about/news"
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                  }}
                >
                  <li className="text-sm font-medium text-[#3D445E] py-2 px-4 hover:bg-gray-100">
                    Yangiliklar
                  </li>
                </Link>
                <Link
                  href="/about/gift"
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                  }}
                >
                  <li className="text-sm font-medium text-[#3D445E] py-2 px-4 hover:bg-gray-100">
                    Sovg'a
                  </li>
                </Link>
              </ul>
            )}
          </article>
          <Link href="/license" onClick={toggleMenu}>
            <li className="text-sm font-medium text-[#3D445E] py-2 lg:p-0 w-full lg:w-auto">
              Litsenziyalash
            </li>
          </Link>
          <li className="text-sm font-medium text-[#3D445E] py-2 lg:p-0 w-full lg:w-auto">
            Akkreditsiyalash
          </li>
          <li className="text-sm font-medium text-[#3D445E] py-2 lg:p-0 w-full lg:w-auto">
            Bog'lanish
          </li>
        </ul>

        {/* Language and Phone Section */}
        <ul className="flex items-center md:gap-8">
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
          <article className="flex items-center gap-[6px]">
            <Image src={Phone} alt="Phone icon" width={17} height={17} />
            <p className="text-base font-bold text-[#3D445E]">1369</p>
          </article>
        </ul>
      </nav>
    </div>
  );
}
