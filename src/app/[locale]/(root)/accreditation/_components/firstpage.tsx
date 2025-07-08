"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function AccredationHead() {
  const t = useTranslations("AccreditationPage");
  const [
    firstTitle,
    secondTitle,
    thirtTitle,
    fourTitle,
    fiveTitle,
    sexTitle,
    sevenTitle,
  ] = t("modern_accerditation").split(" ");
  const btn = useTranslations("HomePage");
  const locale = useLocale();

  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({ duration: 1000 });
      AOS.refresh();
    };

    if (typeof window !== "undefined") {
      loadAOS();
    }
  }, [usePathname()]);

  return (
    <div className="relative bg-[#F6F9FC] h-screen max-ms:h-[70vh] max-md:pt-10">
      <div
        className={`container relatived max-md:pt-[40px] bg-transparent h-auto xl:h-[720px] lg:h-[650px] flex flex-col lg:flex-row lg:gap-24 px-4 md:px-10 ${inter.className} font-inter`}
      >
        {/* Left Content */}
        <div className="z-10 flex-1">
          <div className="max-w-full lg:max-w-[557px] relative z-10 flex flex-col gap-[16px] pt-[25px] sm:pt-[35px] lg:pt-[176px] px-1">
            <h2 className="bg-[#23B3FC] border-0 rounded-[6px] py-1 px-2 leading-[100%] w-fit text-[#FFFFFF] text-[14px]"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-duration="700"
            >
              {t("accerditation_title")}
            </h2>
            <div className="flex flex-col gap-[8px]">
              <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#1B1B1B] leading-[120%]" 
                data-aos="fade"
                data-aos-delay="200"
                data-aos-offset="50"
                data-aos-duration="700"
                data-aos-anchor-placement="top-bottom">
                <strong className="text-[#23B3FC]">{firstTitle}</strong>{" "}
                {secondTitle} {thirtTitle} {fourTitle} {fiveTitle} {sexTitle}{" "}
                {sevenTitle}
              </h1>
              <p className="font-vksans font-medium text-[#012548CC] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] tracking-wide"
                data-aos="fade"
                data-aos-delay="400"
                data-aos-offset="50"
                data-aos-duration="700"
              >
                {t("necessary_license")}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:w-[590px]" 
                data-aos="zoom-in"
                data-aos-delay="500">
              <Link
                href={`/${locale}/about#services-center`}
                className="w-full"
              >
                <button className="group font-inter w-full lg:px-20 px-5 h-[37px] flex items-center justify-center gap-[11.5px] hover:bg-[hsl(200,97%,65%)] bg-[#23b3fc] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">
                  {btn("service_button")}
                  <FaChevronRight className="md:group-hover:translate-x-2 transition-all duration-200" />
                </button>
              </Link>
              <Link href={`/${locale}/contacts`} className="w-full">
                <button className="group hover:bg-[#23B3FC]/[30%] w-full text-[#23B3FC] bg-[#23B3FC]/[12%] font-inter transition-all duration-200 lg:px-20 px-5 h-[37px] flex items-center justify-center gap-[11.5px] rounded-lg text-sm font-medium leading-[130%]">
                  {btn("applying")}
                  <FaChevronRight className="md:group-hover:translate-x-2 transition-all duration-200" />
                </button>
              </Link>
            </div>
          </div>
          {/* Blur Background Circle */}
          <div className="hidden lg:block absolute -top-[-260px] left-[-200px] w-[820px] h-[280px] bg-[#23B3FC] opacity-20 blur-[120px] rounded-full z-0"></div>
        </div>

        {/* Right Image — faqat lg (≥1024px) da ko‘rinadi */}
        <div className="hidden relative top-0 left-0 xl:flex w-full justify-end">
          <Image
            src="/Images/allflags.svg"
            alt="bayroq"
            width={980}
            height={950}
            className="object-cover w-full max-w-[1080px]"
            data-aos="fade"
            data-aos-delay="200"
            data-aos-offset="50"
            data-aos-duration="700"
            data-aos-anchor-placement="top-bottom"
          />
          <div className="absolute bottom-5 w-full h-[200px] bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        </div>

        <div className="hidden lg:flex lg:pt-20 xl:hidden w-full justify-end">
          <Image
            src="/Images/Flag2.png"
            alt="bayroq"
            width={480}
            height={800}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[220px] md:h-[180px] lg:h-[440px] bg-gradient-to-t from-white/100 opacity- to-transparent"></div>
      {/* <div className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[120px] md:after:h-[180px] lg:after:h-[440px] after:bg-gradient-to-t after:from-white after:to-transparent after:z-10 after:pointer-events-none"></div> */}
    </div>
  );
}
