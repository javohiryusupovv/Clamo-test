"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Down from "../../../../assets/icons/down.png";
import Flag from "../../../../assets/icons/uzbekistan.png";
import Phone from "../../../../assets/icons/phone.png";
import rusFlag from "../../../../../public/icons/russia.png";
import engFlag from "../../../../../public/icons/united-kingdom.png"
import { getImg } from "../../../../../constants/page";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Language } from "@/types/type";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const imgg = getImg;

  const t = useTranslations("NavbarPage");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  console.log(locale);



  const [selectedLang, setSelectedLang] = useState<Language>(() => {
    switch (locale) {
      case "ru":
        return { code: "ru", label: "Rus", flag: rusFlag };
      case "en":
        return { code: "en", label: "Eng", flag: engFlag };
      default:
        return { code: "uz", label: "Uzb", flag: Flag };
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div className="m-auto">
      <div
        className={
          header
            ? " bg-gray-100 fixed top-0 z-[999] w-full transition-transform duration-500 ease-in-out shadow-xl"
            : "bg-transparent relative z-[999]"
        }
      >
        <nav
          className={`flex items-center justify-between py-3 lg:py-7 z-[999] container`}
        >
          <ul>
            {imgg.map((item) => (

              <Link href="/" key={item.id}>
                <Image
                  src={item.img}
                  alt="Logo"
                  width={155.71}
                  height={40}
                  className="w-[105px] h-[40px] lg:hidden"
                />
              </Link>
            ))
            }

          </ul>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-between w-full gap-10">
            <ul>
              {imgg.map((item) => (

                <Link href={`/${locale}`} key={item.id}>
                  <Image
                    src={item.img}
                    alt="Logo"
                    width={155.71}
                    height={40}
                    className="w-[155.71px] h-[40px]"
                  />
                </Link>
              ))
              }
            </ul>
            <ul className="flex items-center gap-10">
              <article className="relative">
                <li
                  className="text-sm font-medium text-[#3D445E] cursor-pointer flex items-center gap-[9px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown();
                  }}
                >
                  {t("abouts")}
                  <div className="w-5 h-5 flex items-center">
                    <Image
                      src={Down}
                      alt="Down arrow"
                      width={11}
                      height={11}
                      className={`mt-[6px] transition-transform ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                </li>
                {isDropdownOpen && (
                  <ul className="absolute z-[999] bg-white top-full left-0 mt-2 shadow-md rounded py-2 w-40">
                    <Link href="/about">
                      <li
                        onClick={() => setIsDropdownOpen(false)}
                        className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:bg-gray-100"
                      >
                        Markaz haqida
                      </li>
                    </Link>
                    <Link href="/regulatorydocuments">
                      <li
                        onClick={() => setIsDropdownOpen(false)}
                        className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:bg-gray-100"
                      >
                        Normativ hujjatlar
                      </li>
                    </Link>
                    <Link href="/international">
                      <li
                        onClick={() => setIsDropdownOpen(false)}
                        className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:bg-gray-100"
                      >
                        Xalqaro hamkorlik
                      </li>
                    </Link>
                    <Link href="/consulting">
                      <li
                        onClick={() => setIsDropdownOpen(false)}
                        className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:bg-gray-100"
                      >
                        Konsultatsiya
                      </li>
                    </Link>
                  </ul>
                )}
              </article>
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
              <Link href={`/${locale}/contact`} className="text-sm font-medium text-[#3D445E]">
                {t("contact")}
              </Link>
            </ul>
            <ul className="flex items-center gap-8">
              <div className="relative top-0 left-0">
                <article
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="group flex items-center gap-3  cursor-pointer px-2 py-1 rounded"
                >
                  <Image
                    src={selectedLang.flag}
                    alt={`${selectedLang.label} flag`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <article className="flex items-center gap-[9px]">
                    <p className="text-sm uppercase text-[#3D445E] font-medium">{selectedLang.code}</p>
                    <div className="w-5 h-5 flex items-center">
                      <Image src={Down} alt="Down arrow" width={11} height={11} />
                    </div>
                  </article>
                </article>

                {dropdownOpen && (
                  <div className="absolute top-10 bg-[#E8F4FC] w-[100px] border rounded-md shadow">
                    <ul className="py-1 flex flex-col gap-2">
                      <li
                        onClick={() => handleLangChange({ code: "uz", label: "Uzb", flag: Flag })}
                        className="flex items-center gap-2 cursor-pointer hover:bg-[#D2EDFD] transition-all duration-200 px-2 py-1"
                      >
                        <Image src={Flag} alt="uzbek flag" width={24} height={24} />
                        <p className="text-sm uppercase text-[#3D445E] font-medium">Uzb</p>
                      </li>
                      <li
                        onClick={() => handleLangChange({ code: "ru", label: "Rus", flag: rusFlag })}
                        className="flex items-center gap-2 cursor-pointer hover:bg-[#D2EDFD] transition-all duration-200 px-2 py-1"
                      >
                        <Image src={rusFlag} alt="Rus flag" width={24} height={24} />
                        <p className="text-sm uppercase text-[#3D445E] font-medium">Rus</p>
                      </li>
                      <li
                        onClick={() => handleLangChange({ code: "en", label: "Eng", flag: engFlag })}
                        className="flex items-center gap-2 cursor-pointer hover:bg-[#D2EDFD] transition-all duration-200 px-2 py-1"
                      >
                        <Image src={engFlag} alt="Eng flag" width={24} height={24} />
                        <p className="text-sm uppercase text-[#3D445E] font-medium">Eng</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <article className="flex items-center gap-[6px]">
                <Image
                  src={Phone}
                  alt="Phone icon"
                  width={17}
                  height={17}
                />
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
              className="fixed inset-0 bg-black  bg-opacity-50 z-[999] lg:hidden"
              onClick={toggleMobileMenu}
            >
              <div
                className="flex  flex-col items-center absolute top-0 left-0 w-full bg-white p-6 transform transition-transform duration-300 ease-in-out"
                style={{
                  transform: isMobileMenuOpen
                    ? "translateY(0)"
                    : "translateY(-100%)",
                }}
              >
                <ul className="flex flex-col items-start gap-6">
                  <article className="relative">
                    <li
                      className="text-sm font-medium text-[#3D445E] cursor-pointer flex items-center gap-[9px]"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown();
                      }}
                    >
                      Biz haqimizda
                      <div className="w-5 h-5 flex items-center">
                        <Image
                          src={Down}
                          alt="Down arrow"
                          width={11}
                          height={11}
                          className={`mt-[6px] transition-transform ${isDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                      </div>
                    </li>
                    {isDropdownOpen && (
                      <ul className="mt-2 bg-white  shadow-md rounded py-2 w-40 absolute z-[999]">
                        <Link href="/about">
                          <li className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:bg-gray-100">
                            Markaz haqida
                          </li>
                        </Link>
                        <Link href="/regulatorydocuments">
                          <li className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:bg-gray-100">
                            Normativ hujjatlar
                          </li>
                        </Link>
                        <Link href="/international">
                          <li className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:bg-gray-100">
                            Xalqaro hamkorlik
                          </li>
                        </Link>
                        <Link href="/consulting">
                          <li className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:bg-gray-100">
                            Konsultatsiya
                          </li>
                        </Link>
                      </ul>
                    )}
                  </article>
                  <Link href="/license">
                    <li className="text-sm font-medium text-[#3D445E]">
                      Litsenziyalash
                    </li>
                  </Link>
                  <Link href="/accreditation">
                    <li className="text-sm font-medium text-[#3D445E]">
                      Akkreditsiyalash
                    </li>
                  </Link>
                  <li className="text-sm font-medium text-[#3D445E]">
                    Bog&apos;lanish
                  </li>
                </ul>
                <ul className="flex flex-col items-start gap-6 mt-6">
                  <article className="flex items-center gap-3">
                    <Image
                      src={Flag}
                      alt="Flag icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <article className="flex items-center gap-[9px]">
                      <p className="text-sm uppercase text-[#3D445E] font-medium">
                        uz
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
                  <article className="flex items-center gap-[6px]">
                    <Image
                      src={Phone}
                      alt="Phone icon"
                      width={17}
                      height={17}
                    />
                    <p className="text-base font-bold text-[#3D445E]">1369</p>
                  </article>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}