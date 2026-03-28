"use client";
import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Image from "next/image";
import KlinikBino from "../../../../../public/icons/whiteTooltip1.svg"
import TibbiyotXodim from "../../../../../public/icons/whiteTootlip2.svg"
import ActiveClinics from "../../../../../public/icons/whiteTootlip3.svg"
import Licenses from "../../../../../public/icons/whiteTooltip4.svg"

export default function Hero() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const statsData = [
    { id: 1, icon: KlinikBino, number: "12 500+", label: t("kliniknomi") },
    { id: 2, icon: TibbiyotXodim, number: "45 000+", label: t("health_num") },
    { id: 3, icon: ActiveClinics, number: "3 200+", label: t("activelitsenz") },
    { id: 4, icon: Licenses, number: "10 000+", label: t("accredationshare") },
  ];

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
      <div className="absolute bottom-2 -left-64 w-[481px] h-[481px] rounded-full bg-[#6eb8e8] blur-[220px] firefox-blur"></div>
      <section className="container grid lg:grid-cols-2 grid-cols-1 lg:gap-20 relative sm:top-0 md:top-10 lg:top-0 left-0 sm:h-[75vh] h-[100vh] overflow-visible sm:pb-10 pb-0">
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
                className="group font-inter w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[80%] bg-[#23B3FC] transition-all duration-200 rounded-lg text-sm max-sm:text-[12px] font-medium text-white leading-[130%] "
              >
                {t("service_button")}{" "}
                <FaAngleRight className="group-hover:translate-x-1 transition-all duration-200" />
              </button>

              <Link
                href={`${locale}/contacts`}
                aria-label="Contact user"
                className="w-full"
              >
                <button className="group font-inter lg:w-[183px] w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[30%] bg-[#23B3FC]/[12%] transition-all duration-200 rounded-lg text-sm max-sm:text-[12px] font-medium text-[#23B3FC]  leading-[130%] ">
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

        <div className="relative top-0 left-0 flex flex-col justify-center items-center w-auto -right-10">
          <img
            src="/logo/clamoLogo.png"
            alt="LogoClamo"
            width={200}
            height={200}
            className="max-md:w-[170px] max-smm:w-[110px] absolute bottom-[47%] xl:bottom-[50%] max-lg:bottom-[48%] max-sm:bottom-[40%] md:left-[38%] z-[1] logoAnim lg:left-[33%]"
          />
          <img
            src="/logo/LogoDisplay.png"
            alt="Display Clamo"
            width={750}
            height={650}
            className="w-[900px] max-xl:translate-y-[80px] xl:translate-y-[40px]"
          />
          <div className="test-clamoLogo"></div>
        </div>
        {/* oq soya */}
        <div className="absolute bottom-[-258px] left-[20%] w-[361px] h-[361px] blur-[220.64999389648438px] rounded-full bg-[#6eb8e8] firefox-bg max-md:hidden"></div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-10 col-span-full xl:pb-0 pb-10">
          {statsData.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={index * 100}
              className="relative overflow-hidden w-full h-[180px] py-4 bg-[#0653C9] rounded-2xl px-6 text-white group"
            >
              
              <div className="absolute -top-5 left-0 w-full h-20 bg-[#6EB8E8] blur-[50px] opacity-65 rounded-full"></div>

              <div className="relative z-10">
                <Image src={item.icon} width={42} height={47} alt={item.label} className="mb-4" />
              </div>

              <div className="relative z-10">
                <h6 className="text-[32px] md:text-[33px] lg:text-[35px] xl:text-[48px] font-bold leading-none">{item.number}</h6>
                <p className="text-[14px] sm:text-[12px] md:text-[14px] font-light mt-2 opacity-90">{item.label}</p>
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </>
  );
}
