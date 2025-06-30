"use client";

import Image from "next/image";
import ClamoLogo from "../../../../../public/logo/clamoLogo.png"
import DisplayClamo from "../../../../../public/logo/LogoDisplay.png"
import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";



export default function Hero() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const [
    firstTitle,
    secondTitle,
    thirtTitle,
    fourTitle,
    fiveTitle,
    sexTitle,
    sevenTitle,
  ] = t("health_message").split(" ");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000 });
      });
    }
  }, []);
  return (
    <>
      {/* Ko'k soya */}
      <div className="absolute bottom-2 -left-64 w-[481px] h-[481px] rounded-full bg-[#6eb8e8] blur-[220.64999389648438px] z-[11]"></div>
      <section className="container grid lg:grid-cols-2 grid-cols-1 lg:gap-20 lg:pb-10 relative left-0 h-[80vh] overflow-visible">
        <div className="lg:mt-[163px] md:mt-[90px] mt-[50px] relative z-[12]">
          <p className="uppercase text-[#3D445E] font-inter md:text-[14px] text-[12px] font-medium lg:w-[582px] pb-[11px] max-sm:w-[250px]">
            {firstTitle} {secondTitle} {thirtTitle} {fourTitle} {""}
            <span className="md:text-sm text-[10px] font-bold font-inter bg-[#23B3FC] text-white py-[3px] px-2 rounded-md">
              {fiveTitle} {sexTitle} {sevenTitle}
            </span>
          </p>
          <h1
            className="lg:w-[582px] lg:text-[40px] font-inter sm:text-[32px] text-[25px] font-bold  uppercase text-[#3D445E] md:pb-5 pb-3 leading-[110%]"
            data-aos="fade-up"
          >
            {t("litsenziya_title")}
          </h1>
          <div className=" backdrop-blur-[10px] bg-[#fff6] border border-white w-[411px] max-lg:w-full mb-4 sm:px-4 rounded-[17px]">
            <article className="flex items-center max-md:justify-between gap-3 pb-4 pt-4">
              <Link href={`${locale}/contacts`} className="lg:w-full w-1/2">
                <button className="group font-inter lg:w-[183px] w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[80%] bg-[#23B3FC] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">
                  {t("service_button")}{" "}
                  <FaAngleRight className="group-hover:translate-x-1 transition-all duration-200" />
                </button>
              </Link>
              <Link href={`${locale}/contacts`} className="lg:w-full w-1/2">
                <button className="group font-inter hover:bg-[#23B3FC]/[30%] bg-[#23B3FC]/[12%] transition-all duration-200 w-full lg:w-[183px] h-[40px] flex items-center justify-center gap-[11.5px] rounded-lg text-sm font-medium text-[#23B3FC] leading-[130%]">
                  {t("applying")}{" "}
                  <FaChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
                </button>
              </Link>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center w-auto relative -bottom-28 max-ms:-bottom-20 max-lg:bottom-[20px] right-0">
          <Image src={ClamoLogo} alt="LogoClamo" width={200} height={200} className="absolute bottom-[270px] left-[35%] max-xxs:w-[120px] max-ms:w-[150px] max-xxs:bottom-[200px] md:left-[43%] z-[1] logoAnim md:bottom-[280px] max-lg:bottom-[240px] lg:bottom-[230px] lg:left-[55%] xl:bottom-[280px]" />
          <Image src={DisplayClamo} alt="Display Clamo" width={520} height={494} className=" absolute bottom-0 right-0 max-sm:left-[3%] sm:left-[25%] max-md:left-[30%]" />
        </div>
        {/* oq soya */}
       <div className="absolute bottom-[-258px] left-[20%] w-[361px] h-[361px] blur-[220.64999389648438px] rounded-full  bg-[#6eb8e8] "></div>
      </section>
      <div className="absolute bottom-[-150px] right-0 w-full h-[548px] shadow-hero" />
    </>
  );
}
