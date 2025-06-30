"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Down from "../../../../../assets/icons/down.png";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Language } from "@/types/type";
import DropMenyu from "./_components/DropMenyu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const t = useTranslations("NavbarPage");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLang, setSelectedLang] = useState<Language>(() => {
    switch (locale) {
      case "ru":
        return {
          code: "ru",
          label: "Rus",
          flag: "/icons/flags/russia-flag.svg",
        };

      case "en":
        return {
          code: "en",
          label: "Eng",
          flag: "/icons/flags/united-kingdom-flag.svg",
        };
      default:
        return {
          code: "uz",
          label: "Uzb",
          flag: "/icons/flags/uzbekistan-flag.svg",
        };
    }
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLangChange = (lang: Language) => {
    setSelectedLang(lang);
    setDropdownOpen(false);
    const segments = pathname.split("/").filter(Boolean);
    const hasLocale = locale.includes(segments[0] as string);

    if (hasLocale) {
      segments[0] = lang.code;
    } else {
      segments.unshift(lang.code);
    }

    router.push("/" + segments.join("/"));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

 useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="m-auto">
      <div
        className={`fixed top-0 z-[999] w-full backdrop-blur-3xl`}>
        <nav
          className={`flex items-center justify-between py-3 z-[999] container transition-transform duration-500 ease-in-out ${isScrolled ? "translate-y-0" : "translate-y-4"}`}
        >
          <ul>

            <Link href="/">
              <Image
                src="/LogoClamo.svg"
                alt="Logo"
                width={155.71}
                height={40}
                className="w-[105px] h-[40px] lg:hidden"
              />
            </Link>

          </ul>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-between w-full gap-10">
            <ul>

              <Link href={`/${locale}`}>
                <Image
                  src="/LogoClamo.svg"
                  alt="Logo"
                  width={155.71}
                  height={40}
                  className="w-[155.71px] h-[40px]"
                />
              </Link>

            </ul>
            <ul className="flex items-center gap-10">
              <article className="relative">
                <DropMenyu />
              </article>
              <Link href={`/${locale}/license`}>
                <li className="text-sm font-medium text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  {t("licens")}
                </li>
              </Link>
              <Link href={`/${locale}/accreditation`}>
                <li className="text-sm font-medium text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  {t("accredation")}
                </li>
              </Link>
              <Link
                href={`/${locale}/contacts`}
                className="text-sm font-medium text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200"
              >
                {t("contacts")}
              </Link>
            </ul>
            <ul className="flex items-center gap-8">
              <div className="relative top-0 left-0">
                <article
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="group flex items-center gap-3 cursor-pointer px-2 py-1 rounded"
                >
                  <Image
                    src={selectedLang.flag}
                    alt={`${selectedLang.label} flag`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <article className="flex items-center gap-[9px]">
                    <p className="text-sm uppercase text-[#3D445E] font-medium">
                      {selectedLang.code}
                    </p>
                    <div className="w-5 h-5 flex items-center">
                      <Image
                        src={Down}
                        alt="Down arrow"
                        width={11}
                        height={11}
                      />
                    </div>
                  </article>
                </article>

                {dropdownOpen && (
                  <div className="absolute top-10 bg-[#E8F4FC] w-[100px] border rounded-md shadow">
                    <ul className="py-1 flex flex-col gap-2">
                      <li
                        onClick={() =>
                          handleLangChange({
                            code: "uz",
                            label: "Uzb",
                            flag: "/icons/flags/uzbekistan-flag.svg",
                          })
                        }
                        className="flex items-center gap-2 cursor-pointer hover:bg-[#D2EDFD] transition-all duration-200 px-2 py-1"
                      >
                        <Image
                          src="/icons/flags/uzbekistan-flag.svg"
                          alt="uzbek flag"
                          width={24}
                          height={24}
                        />
                        <p className="text-sm uppercase text-[#3D445E] font-medium">
                          Uzb
                        </p>
                      </li>
                      <li
                        onClick={() =>
                          handleLangChange({
                            code: "ru",
                            label: "Rus",
                            flag: "/icons/flags/russia-flag.svg",
                          })
                        }
                        className="flex items-center gap-2 cursor-pointer hover:bg-[#D2EDFD] transition-all duration-200 px-2 py-1"
                      >
                        <Image
                          src="/icons/flags/russia-flag.svg"
                          alt="Rus flag"
                          width={24}
                          height={24}
                        />
                        <p className="text-sm uppercase text-[#3D445E] font-medium">
                          Rus
                        </p>
                      </li>
                      <li
                        onClick={() =>
                          handleLangChange({
                            code: "en",
                            label: "Eng",
                            flag: "/icons/flags/united-kingdom-flag.svg",
                          })
                        }
                        className="flex items-center gap-2 cursor-pointer hover:bg-[#D2EDFD] transition-all duration-200 px-2 py-1"
                      >
                        <Image
                          src="/icons/flags/united-kingdom-flag.svg"
                          alt="Eng flag"
                          width={24}
                          height={24}
                        />
                        <p className="text-sm uppercase text-[#3D445E] font-medium">
                          Eng
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <article className="flex items-center gap-[6px]">
                <Image src="/icons/phone.svg" alt="Phone icon" width={17} height={17} />
                <p className="text-base font-bold text-[#3D445E]">1369</p>
              </article>
            </ul>
          </div>

          {/* Burger Button */}
          <button
            className="lg:hidden flex flex-col gap-[6px] z-20"
            onClick={toggleMobileMenu}
          >
            <span
              className={`w-5 h-[2px] bg-[#3D445E] block transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`w-5 h-[2px] bg-[#3D445E] block transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`w-5 h-[2px] bg-[#3D445E] block transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50  lg:hidden"
              onClick={toggleMobileMenu}
            >
              <div
                className="flex flex-col items-center absolute top-0 left-0 w-full bg-white p-6 transform transition-transform duration-300 ease-in-out"
                style={{
                  transform: isMobileMenuOpen
                    ? "translateY(0)"
                    : "translateY(-100%)",
                }}
              >
                {/* Header with Logo and Close Icon */}
                <div className="w-full flex sm:max-w-[60%] max-w-[90%] justify-between items-center -translate-y-3 -translate-x-2 pb-2">

                  <Link href="/">
                    <Image
                      src="/LogoClamo.svg"
                      alt="Logo"
                      width={105}
                      height={40}
                      className="w-[90px] h-[40px]"
                    />
                  </Link>


                  <ul className="flex items-center">
                    <div
                      className="relative top-0 left-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        //   DropdownOpen();
                      }}
                    >
                      <article
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="group flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded"
                      >
                        <Image
                          src={selectedLang.flag}
                          alt={`${selectedLang.label} flag`}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <article className="flex items-center gap-[5px]">
                          <p className="text-xs uppercase text-[#3D445E] font-medium">
                            {selectedLang.code}
                          </p>
                          <div className="w-5 h-5 flex items-center">
                            <Image
                              src={Down}
                              alt="Down arrow"
                              width={11}
                              height={11}
                            />
                          </div>
                        </article>
                      </article>

                      {dropdownOpen && (
                        <div className="absolute top-10 bg-[#E8F4FC] w-[85px] border rounded-md shadow">
                          <ul className="py-1 flex flex-col gap-2">
                            <li
                              onClick={() =>
                                handleLangChange({
                                  code: "uz",
                                  label: "Uzb",
                                  flag: "/icons/flags/uzbekistan-flag.svg",
                                })
                              }
                              className="flex items-center gap-2 cursor-pointer hover:bg-[#D2EDFD] transition-all duration-200 px-2 py-1"
                            >
                              <Image
                                src="/icons/flags/uzbekistan-flag.svg"
                                alt="uzbek flag"
                                width={20}
                                height={20}
                              />
                              <p className="text-xs uppercase text-[#3D445E] font-medium">
                                Uzb
                              </p>
                            </li>
                            <li
                              onClick={() =>
                                handleLangChange({
                                  code: "ru",
                                  label: "Rus",
                                  flag: "/icons/flags/russia-flag.svg",
                                })
                              }
                              className="flex items-center gap-2 cursor-pointer hover:bg-[#D2EDFD] transition-all duration-200 px-2 py-1"
                            >
                              <Image
                                src="/icons/flags/russia-flag.svg"
                                alt="Rus flag"
                                width={20}
                                height={20}
                              />
                              <p className="text-xs uppercase text-[#3D445E] font-medium">
                                Rus
                              </p>
                            </li>
                            <li
                              onClick={() =>
                                handleLangChange({
                                  code: "en",
                                  label: "Eng",
                                  flag: "/icons/flags/united-kingdom-flag.svg",
                                })
                              }
                              className="flex items-center gap-2 cursor-pointer hover:bg-[#D2EDFD] transition-all duration-200 px-2 py-1"
                            >
                              <Image
                                src="/icons/flags/united-kingdom-flag.svg"
                                alt="Eng flag"
                                width={20}
                                height={20}
                              />
                              <p className="text-xs uppercase text-[#3D445E] font-medium">
                                Eng
                              </p>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <article className="flex items-center gap-[4px] translate-x-2">
                      <Image
                        src="/icons/phone.svg"
                        alt="Phone icon"
                        width={14}
                        height={14}
                      />
                      <p className="text-sm font-bold text-[#3D445E]">1369</p>
                    </article>
                  </ul>
                </div>

                {/* Navigation Links */}
                <article className="flex w-full justify-evenly gap-10">
                  <ul className="flex flex-col items-start gap-6">
                    <Link href={`/${locale}/about`}>
                      <li
                        className="text-sm font-medium text-[#3D445E]"
                      >
                        {t("aboutss")}
                      </li>
                    </Link>
                    <Link href={`/${locale}/regulatorydocuments`}>
                      <li
                        className="text-sm font-medium text-[#3D445E]"
                      >
                        {t("regulatorydocuments")}
                      </li>
                    </Link>
                    <Link href={`/${locale}/international`}>
                      <li
                        className="text-sm font-medium text-[#3D445E]"
                      >
                        {t("international")}
                      </li>
                    </Link>
                    <Link href={`/${locale}/consulting`}>
                      <li
                        className="text-sm font-medium text-[#3D445E]"
                      >
                        {t("consulting")}
                      </li>
                    </Link>
                  </ul>
                  <ul className="flex flex-col items-start gap-6">
                    <Link href={`/${locale}/license`}>
                      <li className="text-sm font-medium text-[#3D445E]">
                        {t("licens")}
                      </li>
                    </Link>
                    <Link href={`/${locale}/accreditation`}>
                      <li className="text-sm font-medium text-[#3D445E]">
                        {t("accredation")}
                      </li>
                    </Link>
                    <Link href={`/${locale}/contacts`}>
                      <li className="text-sm font-medium text-[#3D445E]">
                        {t("contacts")}
                      </li>
                    </Link>
                  </ul>
                </article>

                {/* flag and phone number */}
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}