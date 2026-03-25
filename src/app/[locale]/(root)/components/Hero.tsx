"use client";
import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";

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
      const loadAOS = async () => {
        const AOS = await import("aos");
        AOS.init({ duration: 1000 });
        AOS.refresh();
      };
  
      if (typeof window !== "undefined") {
        loadAOS();
      }
    }, [usePathname()]);

  const scrollToContactSection = () => {
    const section = document.getElementById("contact-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Ko'k soya */}
      <div className="absolute bottom-2 -left-64 w-[481px] h-[481px] rounded-full bg-[#6eb8e8] blur-[220px] firefox-blur z-[11]"></div>
      <section className="container grid lg:grid-cols-2 grid-cols-1 lg:gap-20 lg:pb-10 relative sm:top-0 md:top-10 lg:top-0 left-0 h-[70vh] overflow-visible">
        <div className="relative z-[12] flex flex-col justify-center">
          <p className="uppercase text-[#3D445E] font-inter md:text-[14px] text-[12px] font-medium lg:w-[582px] pb-[11px] max-sm:w-[250px]" data-aos="fade-right">
            {firstTitle} {secondTitle} {thirtTitle} {fourTitle}{" "}
            <span className="md:text-sm text-[10px] font-bold font-inter bg-[#23B3FC] text-white py-[3px] px-2 rounded-md">
              {fiveTitle} {sexTitle} {sevenTitle}
            </span>
          </p>
          <h1
            className="lg:w-[750px] lg:text-[40px] font-inter sm:text-[32px] text-[25px] font-bold uppercase text-[#3D445E] md:pb-5 pb-3 leading-[110%]"
            data-aos="fade-up" data-aos-delay="300"
          >
            {t("litsenziya_title")}
          </h1>
          <div className="backdrop-blur-[10px] bg-[#ffffffa4] border border-white w-[411px] px-4 max-lg:w-full mb-4 sm:px-4 rounded-[17px]" data-aos="zoom-in-up" data-aos-delay="400">
            <article className="flex items-center max-md:justify-between gap-3 pb-4 pt-4">
              <button
                onClick={scrollToContactSection}
                className="group font-inter w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[80%] bg-[#23B3FC] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] "
              >
                {t("service_button")}{" "}
                <FaAngleRight className="group-hover:translate-x-1 transition-all duration-200" />
              </button>

              <Link
                href={`${locale}/contacts`}
                aria-label="Contact user"
                className="w-full"
              >
                <button className="group font-inter lg:w-[183px] w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[30%] bg-[#23B3FC]/[12%] transition-all duration-200 rounded-lg text-sm font-medium text-[#23B3FC]  leading-[130%] ">
                  {t("applying")}{" "}
                  <FaChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
                </button>
              </Link>
            </article>
            <p className="font-medium font-inter text-[12px] pb-4 lg:w-[379px] text-[#3D445E]">
              {t("specialists")}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end items-center w-auto relative max-ms:-bottom-20 max-lg:bottom-[20px] right-0 ms:translate-y-[20px]">
          <img
            src="/logo/clamoLogo.png"
            alt="LogoClamo"
            width={200}
            height={200}
            className=" max-lg:w-[150px] max-ms:w-[160px] max-ms:h-[160px] max-lg:h-[180px] absolute max-ms:-z-[1] md:left-[43%] z-[1] logoAnim md:bottom-[280px] max-sm:bottom-[260px] max-ms:bottom-[250px] max-ll:bottom-[230px] max-xxs:bottom-[190px] max-lg:bottom-[280px] lg:bottom-[230px] lg:left-[60%] xl:bottom-[280px]"
          />
          <img
            src="/logo/LogoDisplay.png"
            alt="Display Clamo"
            width={550}
            height={500}
            className="lg:absolute bottom-0 right-0 max-sm:left-[3%] sm:left-[25%] max-md:left-[30%] max-ms:-z-[2] lg:w-[700px]"
          />
          <div className="test-clamoLogo"></div>
        </div>
        {/* oq soya */}
        <div className="absolute bottom-[-258px] left-[20%] w-[361px] h-[361px] blur-[220.64999389648438px] rounded-full bg-[#6eb8e8] firefox-bg"></div>
      </section>
      <div className="absolute bottom-[-200px] right-0 w-full lg:h-[348px] h-[220px] shadow-hero" />
    </>
  );
}
