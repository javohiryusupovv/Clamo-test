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

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const body = document.body;
      if (body.hasAttribute("data-scroll-locked")) {
        body.removeAttribute("data-scroll-locked");
        body.style.overflow = "";
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-scroll-locked"],
    });

    return () => observer.disconnect();
  }, []);

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

  // Body scroll block for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);



  return (
    <div className="m-auto">
      <div
        className={`fixed top-0 z-[600] w-full backdrop-blur-3xl ${isScrolled ? "bg-white" : ""}`}>
        <nav className="flex items-center justify-between py-4 container md:pt-[35px]">
          <div className={`container relative z-20 transition-transform duration-500 ease-in-out ${isScrolled ? "translate-y-0" : " translate-y-3"}`}>
            {/* Desktop Menu */}
            <div className="flex items-center justify-between w-full gap-10">
              <ul>
                <li>
                  <Link href={`/${locale}`} aria-label="Home">
                    <Image
                      src="/LogoClamo.svg"
                      alt="Logo"
                      width={155.71}
                      height={40}
                      className="w-[155.71px] h-[40px]"
                    />
                  </Link>
                </li>

              </ul>
              <ul className="hidden lg:flex items-center gap-10">
                <article className="relative">
                  <DropMenyu />
                </article>
                <li className="text-sm font-medium text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  <Link href={`/${locale}/license`} aria-label="License">
                    {t("licens")}
                  </Link>
                </li>
                <li className="text-sm font-medium text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  <Link href={`/${locale}/accreditation`} aria-label="Accreditation">
                    {t("accredation")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/contacts`}
                    aria-label="Contacts"
                    className="text-sm font-medium text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200"
                  >
                    {t("contacts")}
                  </Link>
                </li>
              </ul>
              <ul className="hidden items-center lg:gap-10 gap-5 lg:mr-0 mr-10 sm:flex">
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
                        
                      </ul>
                    </div>
                  )}
                </div>
                <Link href="tel:1369" aria-label="Phone" className="flex items-center gap-[6px]">
                  <Image src="/icons/phone.svg" alt="Phone icon" width={17} height={17} />
                  <p className="text-base font-bold text-[#3D445E]">1369</p>
                </Link>
              </ul>
            </div>
          </div>
          {/* Burger Button */}
          <button
            className={`lg:hidden flex flex-col gap-[6px] z-20 transition-transform duration-500 ease-in-out ${isScrolled ? "translate-y-0" : " translate-y-3"}`}
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
        </nav>
        {isMobileMenuOpen && (
          <div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 z-[2] bg-white/50 backdrop-blur-md h-screen w-full"></div>
        )}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute w-full h-[440px] transition-all duration-300 z-[3] ease-in-out bg-white shadow-md ${isMobileMenuOpen ? "top-0 opacity-[1]" : "-top-[380px] opacity-0"
            }`}
        >
          <div className="container grid px-10 pt-[100px]">
            {/* Chap ustun */}
            <ul className="flex flex-col gap-4">
              <li>
                <Link href={`/${locale}/about`} aria-label="About Page" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium sm:text-[17px] sm:font-semibold text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  {t("aboutss")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/regulatorydocuments`} aria-label="Regulatory Documents" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium sm:text-[17px] sm:font-semibold text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  {t("regulatorydocuments")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/international`} aria-label="International Page" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium sm:text-[17px] sm:font-semibold text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  {t("international")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/consulting`} aria-label="Consulting Page" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium sm:text-[17px] sm:font-semibold text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  {t("consulting")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/license`} aria-label="License Page" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium sm:text-[17px] sm:font-semibold text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  {t("licens")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/accreditation`} aria-label="Accreditation Page" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium sm:text-[17px] sm:font-semibold text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  {t("accredation")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contacts`} aria-label="Contacts Page" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium sm:text-[17px] sm:font-semibold text-[#3D445E] hover:text-[#23B3FC] transition-all duration-200">
                  {t("contacts")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-6 left-0 w-full px-10 sm:hidden flex">
            <div className="flex items-center justify-between">
              {/* Language */}
              <div className="flex items-center gap-5">
                <section className="relative top-0 left-0">
                  <article
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="group flex items-center gap-3 cursor-pointer py-1 rounded"
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
                        
                      </ul>
                    </div>
                  )}
                </section>
                <Link href="tel:1369" aria-label="Phone" className="flex items-center gap-[6px]">
                  <Image src="/icons/phone.svg" alt="Phone icon" width={17} height={17} />
                  <p className="text-base font-bold text-[#3D445E]">1369</p>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
