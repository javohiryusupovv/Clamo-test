"use client";

import Image from "next/image";
import { getLicense } from "../../../../../../constants/page";
import { useTranslations } from "next-intl";
import { FaChevronRight } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function LicenseHero() {
  const t = useTranslations("LicensePage");
  const btn = useTranslations("HomePage");
  const [
    firstTitle,
    secondTitle,
    thirtTitle,
    fourTitle,
    fiveTitle,
    sexTitle,
    sevenTitle,
  ] = t("get_permit").split(" ");
  const steps = getLicense;

  useEffect(() => {
      const loadAOS = async () => {
        const AOS = await import("aos");
        AOS.init({ duration: 1000 });
      };

      if (typeof window !== "undefined") {
        loadAOS();
      }
    }, []);
  
  return (
    <>
      {/* Hero section */}
      <div className="relative h-screen overflow-visible flex items-center">
        <div className="absolute -left-[300px] top-28 blur-[200px] bg-[#6EB8E8] w-[580px] h-[360px] rounded-full"></div>

        <div className="container mx-auto px-4 ">
          <div className="w-full my-20 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 pt-12 md:h-[400px] md:pt-0">
            <div className="flex-1 space-y-5 text-center md:text-left">
              <h1 className="rounded-md font-inter font-medium leading-[100%] uppercase bg-[#23B3FC] text-white px-3 py-2 text-sm  w-max mx-auto md:mx-0">
                {t("license_title")}
              </h1>

              <div className="space-y-5 md:w-[45%] mx-auto md:mx-0">
                <h1 className="text-[28px] font-inter leading-[110%] sm:text-[30px] md:text-[32px] font-medium text-[#1B1B1B]">
                  <span className="text-[#23B3FC] uppercase">{firstTitle}</span>{" "}
                  {secondTitle} {thirtTitle} {fourTitle} {fiveTitle} {sexTitle}{" "}
                  {sevenTitle}
                </h1>
                <p className="text-[#012548CC] font-vk leading-[140%] text-[18px] sm:text-[20px] font-medium">
                  {t("trusted_partner")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-8 justify-center md:justify-start">
                <button className="group flex items-center justify-center gap-[4px] lg:px-20 px-16  py-[10px] text-white rounded-lg bg-[#23B3FC] hover:bg-[#23B3FC]/80 hover:text-white transition">
                  <span className="text-[14px] font-inter font-medium">
                    {btn("service_button")}
                  </span>
                  <FaChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
                </button>

                <button className="group font-inter lg:px-20 px-16 h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[30%] bg-[#23B3FC]/[12%] transition-all duration-200 rounded-lg text-sm font-medium text-[#23B3FC]  leading-[130%] ">
                  <span className="text-[14px] font-inter font-medium">
                    {btn("applying")}
                  </span>
                  <FaChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
                </button>
              </div>
            </div>

            <div className="hidden md:flex md:flex-1 justify-center items-center w-full md:w-[55%] h-auto mt-8 md:mt-0 md:absolute z-[-10] md:right-[-50px]">
              <div className="relative top-0 left-0 w-full h-[500px]">
                <Image
                  src="/Images/stamp.svg"
                  alt="Pechat Clamo"
                  width={482}
                  height={416}
                  className=" absolute -top-10 -left-10 z-[2] logoAnim"
                  data-aos="fade-up-left"
                  data-aos-duration="3000"
                />
                <Image
                  src="/Images/Holder.svg"
                  alt="Pechat Clamo "
                  width={248}
                  height={199}
                  className="absolute bottom-0 -right-10 opacity-[0.6] z-[1]"
                  data-aos="zoom-in-left"
                  data-aos-duration="2000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps section */}
      <div className="container mx-auto px-4 my-[30px]">
        <section className="bg-gradient-to-b py-[48px] from-[#39a9f2] to-[#0653C9] text-white p-6 rounded-3xl max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[45%_55%] items-start gap-5 md:pl-5 md:pr-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl leading-[100%] font-bold lg:mb-4 sm:w-[80%] font-vk">
                {t("get_license")}
              </h2>

              <p className="text-base md:text-[20px] leading-[150%] lg:mb-6 sm:w-[72%] font-vk text-[#FFFFFF] opacity-60">
                {t("online_start")}
              </p>

              <Link href={"https://license.gov.uz/"} aria-label="Litsenziya" target="_blank">
                <button className="group flex font-inter justify-center items-center gap-[4px] w-full sm:w-[273px] px-[24px] py-[10px] bg-[#23B3FC] text-[#FFFFFFFF] rounded-lg hover:bg-[#46c1ff] transition">
                  <span className="group flex items-center gap-1 text-[14px] font-medium leading-[130%]">
                    {t("get_license_button")}
                    <ChevronRight className=" transition-all duration-100 group-hover:translate-x-1" />
                  </span>
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps(t).map((step) => (
                <div
                  key={step.id}
                  className="bg-white bg-opacity-10 rounded-[32px] p-4 flex flex-col items-start"
                >
                  <div className="flex items-center justify-center bg-white bg-opacity-15 p-[16px] rounded-[18px] mb-3">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={33}
                      height={33}
                    />
                  </div>
                  <h3 className="font-bold leading-[130%] text-[20px] mb-2 font-vk">
                    {step.title}
                  </h3>
                  <p className="text-sm font-normal leading-[130%] font-vk">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
