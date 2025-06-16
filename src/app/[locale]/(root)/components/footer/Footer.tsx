'use client';

import Image from "next/image";
import cirlceBG from "../../../../../assets/images/twoCircle.png";
import DevLogos from "../../../../../assets/logo/uicLogo.png";
import TibbiyotVazirlik from "../../../../../assets/logo/TibbiyotVazirlik.png";
import "./Footer.css";
import Link from "next/link";
import Contact from "../contact/Contact";
import { useTranslations, useLocale } from "next-intl";
import { getsocialLinks } from "../../../../../../constants/page";

export default function FooterLayout() {
  const t = useTranslations("FooterPage");
  const locale = useLocale();
  const socialLinks = getsocialLinks
  const menuItems = [
    { key: "about", href: `/${locale}/about` },
    { key: "regulatorydocuments", href: `/${locale}/regulatorydocuments` },
    { key: "center", href: `/${locale}/about` },
    { key: "license", href: `/${locale}/license` },
    { key: "accreditation", href: `/${locale}/accreditation` },
  ];

  return (
    <div className="pt-20 bg-[#F6F9FC] p-0">
      <Contact />

      <div className="relative w-full sm:h-[500px] h-[750px] bg-[#F6F9FC] overflow-hidden">
        <div className="container relative z-[50]">
          <div className="block sm:flex gap-20 absolute top-0 left-0 py-28 sm:py-20 px-[10px] sm:px-0">

            {/* Chap qism */}
            <div>
              <div className="w-[400px] mb-[76px] max-xxl:w-[300px]">
                <article className="flex items-center gap-7 mb-5">
                  <Image src="/LogoClamo.svg" alt="Clamo Logo" width={100} height={50} />
                  <Image src={TibbiyotVazirlik} alt="Tibbiyot Vazirligi logo" width={100} height={50} />
                </article>
                <p className="text-[12px] sm:text-[16px] text-[#3D445E] sm:w-auto w-[350px]">
                  {t("footer_des")}
                </p>
              </div>

              {/* Ijtimoiy tarmoqlar */}
              <div>
                <p className="text-[#3D445E] text-[14px] mb-4 uppercase">{t("ijtimoiy")}</p>
                <div className="flex items-center gap-4">
                  {/* 4 ta ijtimoiy ikonka */}
                  {socialLinks.map(({ href, icon }, idx) => (
                    <Link key={idx} href={href} target="_blank" className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] bg-[#0650C3]/[18%] rounded-lg">
                      {icon}
                    </Link>
                  ))}

                </div>
              </div>
            </div>

            {/* O‘ng qism */}
            <div className="sm:pt-0 pt-[20px]">
              <p className="text-[#3D445E] text-[18px] font-bold leading-[140%] mb-[12px]">
                {t("bo'limlar")}
              </p>
              <ul className="flex flex-col gap-3">
                {menuItems.map(({ key, href }, idx) => (
                  <Link key={idx} href={href}>
                    <li className="group flex items-center gap-1 hover:text-[#23B3FC] text-[#3D445E] text-[14px] font-medium transition-all duration-200 cursor-pointer">
                      <span className="w-[9px] h-[9px] rounded-full bg-[#23B3FC] opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0"></span>
                      <span className="-translate-x-3 group-hover:translate-x-1 transition-all">
                        {t(`menu.${key}`)}
                      </span>
                    </li>
                  </Link>
                ))}
                <li className="group flex items-center gap-1 hover:text-[#23B3FC] text-[#3D445E] text-[14px] font-medium transition-all duration-200 cursor-pointer">
                  <span className="w-[9px] h-[9px] rounded-full bg-[#23B3FC] opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0"></span>
                  <span className="-translate-x-3 group-hover:translate-x-1 transition-all">
                    {t("bog'lanish")}
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer background */}
        <div className="footer-shadow hidden lg:block">
          <Image className="absolute bottom-1 w-[700px] right-0" src={cirlceBG} alt="bg-Circle" />
          <div className="container relative">
            <Image className="absolute top-14 right-6 w-[400px]" src="/flag/groupFlag.png" alt="Flag Clamo" width={400} height={300} />
          </div>
        </div>

        {/* Footer bottom */}
        <div className="absolute bottom-0 w-full py-5">
          <div className="container flex justify-between items-center">
            <p className="text-[#3D445E]/[60%] text-[7px] sm:text-[14px]">
              &copy; {new Date().getFullYear()} – “CLAMO” LLC
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[#3D445E] text-[7px]">
                {t("developed")}
              </span>
              <Image src={DevLogos} alt="Developer Logo" width={50} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}