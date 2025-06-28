"use client";

import Image from "next/image";
import cirlceBG from "../../../../../assets/images/twoCircle.png";
import TibbiyotVazirlik from "../../../../../assets/logo/TibbiyotVazirlik.svg";
import "./Footer.css";
import Link from "next/link";
import Contact from "../contact/Contact";
import { useTranslations, useLocale } from "next-intl";

export default function FooterLayout() {
  const t = useTranslations("FooterPage");
  const locale = useLocale();
  const menuItems = [
    { key: "about", href: `/${locale}/about` },
    { key: "regulatorydocuments", href: `/${locale}/regulatorydocuments` },
    { key: "center", href: `/${locale}/about` },
    { key: "license", href: `/${locale}/license` },
    { key: "accreditation", href: `/${locale}/accreditation` },
  ];

  return (
    <div className="md:pt-20 pt-6 bg-[#F6F9FC] p-4">
      <Contact />

      <div className="relative w-full sm:h-[500px] h-[750px] bg-[#F6F9FC] overflow-hidden">
        <div className="container relative z-[50]">
          <div className="block sm:flex gap-20 absolute top-0 left-0 py-28 sm:py-20 px-[10px] sm:px-0">
            <div>
              <div className="w-[400px] mb-[76px] max-xxl:w-[300px]">
                <article className="flex items-center gap-7 mb-5">
                  <Image
                    src="/LogoClamo.svg"
                    alt="Clamo Logo"
                    width={100}
                    height={50}
                    className="w-44"
                  />
                  <Image
                    src={TibbiyotVazirlik}
                    alt="Tibbiyot Vazirligi logo"
                    width={100}
                    height={50}
                    className="w-14"
                  />
                </article>
                <p className="text-[12px] sm:text-[16px] font-vk text-[#3D445E] sm:w-auto w-[350px]">
                  {t("footer_des")}
                </p>
              </div>

              {/* Ijtimoiy tarmoqlar */}
              <div>
                <p className="text-[#3D445E] font-vk text-[14px] mb-4 uppercase">
                  {t("ijtimoiy")}
                </p>
                <div className="flex items-center gap-4">
                  {/* 4 ta ijtimoiy ikonka */}

                  <Link
                    href={"https://www.instagram.com/clamo.uz/"}
                    target="_blank"
                    className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg"
                  >
                    <svg
                      className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>{" "}
                  </Link>
                  <Link
                    href={"https://www.instagram.com/clamo.uz/"}
                    target="_blank"
                    className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg"
                  >
                    <svg
                      className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
                      viewBox="0 0 496 512"
                    >
                      <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/clamo-social-3a1454364/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}
                    target="_blank"
                    className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg"
                  >
                    <svg
                      className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>{" "}
                  </Link>
                  <Link
                    href={"https://www.facebook.com/CLAMORasmiy"}
                    target="_blank"
                    className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg"
                  >
                    <svg
                      className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
                      viewBox="0 0 320 512"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>{" "}
                  </Link>
                </div>
              </div>
            </div>

            {/* O‘ng qism */}
            <div className="sm:pt-0 pt-[20px]">
              <p className="text-[#3D445E] font-vk text-[18px] font-bold leading-[140%] mb-[12px]">
                {t("bo'limlar")}
              </p>
              <ul className="flex flex-col gap-3">
                {menuItems.map(({ key, href }, idx) => (
                  <Link key={idx} href={href}>
                    <li className="group flex items-center gap-1 hover:text-[#23B3FC] text-[#3D445E] text-[14px] font-medium transition-all duration-200 cursor-pointer">
                      <span className="w-[9px] h-[9px] rounded-full bg-[#23B3FC] opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0"></span>
                      <span className="-translate-x-3 group-hover:translate-x-1 transition-all font-vk">
                        {t(`menu.${key}`)}
                      </span>
                    </li>
                  </Link>
                ))}
                <li>
                  <Link href={`/${locale}/contacts`} className="group flex items-center gap-1 hover:text-[#23B3FC] text-[#3D445E] text-[14px] font-medium transition-all duration-200 cursor-pointer">
                    <span className="w-[9px] h-[9px] rounded-full bg-[#23B3FC] opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0"></span>
                    <span className="-translate-x-3 group-hover:translate-x-1 transition-all">
                      {t("bog'lanish")}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer background */}
        <div className="footer-shadow hidden lg:block">
          <Image
            className="absolute bottom-2 w-[700px] right-0"
            src={cirlceBG}
            alt="bg-Circle"
          />
          <div className="container relative">
            <Image
              className="absolute top-8 right-6 w-[400px]"
              src="/flag/groupFlag.png"
              alt="Flag Clamo"
              width={400}
              height={300}
            />
          </div>
        </div>

        {/* Footer bottom */}
        <div className="absolute z-[12] bottom-0 w-full py-5">
          <div className="container flex justify-between items-center">
            <p className="text-[#3D445E]/[60%] text-[7px] sm:text-[14px] font-vk">
              &copy; {new Date().getFullYear()} – “CLAMO” LLC
            </p>
            <div className="group flex items-center gap-2">
              <span className="text-[#3D445E] text-[7px] sm:text-[15px]">
                {t("developed")}
              </span>
              <Link href={"https://iqtidoracademy.uz/"} target="_blank" className="group flex items-center transition-all duration-300">
                <Image src="/logo/devLogo.svg" alt="IQ Logo" className="" width={35} height={35} />
                <span className=" translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-[1] transition-all duration-300 text-[18px] font-bold">Iqtidor</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
