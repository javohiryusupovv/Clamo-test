"use client";

import Image from "next/image";
import { getBgImg, getLicense } from "../../../../../../constants/page";
import { useTranslations } from "next-intl";
import { FaChevronRight } from "react-icons/fa";
import Down from "@/assets/icons/whiteDown.png";


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
      const imageBg = getBgImg;
  return (
    <>
        {/* Hero section */}
      <div className="relative">
        <div className="absolute -left-[300px] top-28 blur-[200px] bg-[#6EB8E8] w-[580px] h-[360px] rounded-full"></div>

        <div className="container mx-auto px-4">
          <div className="w-full my-20 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 pt-12 md:h-[400px] md:pt-0">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="rounded-md bg-[#23B3FC] text-white px-3 py-2 text-sm font-medium w-max mx-auto md:mx-0">
                {t("license_title")}
              </h1>

              <div className="space-y-6 md:w-[45%] mx-auto md:mx-0">
                <h1 className="text-[28px] sm:text-[30px] md:text-[32px] font-semibold text-[#1B1B1B]">
                  <span className="text-[#23B3FC]">{firstTitle}</span>{" "}
                  {secondTitle} {thirtTitle}
                  {fourTitle} {fiveTitle} {sexTitle} {sevenTitle}
                </h1>
                <p className="text-[#012548CC] leading-[140%] text-[18px] sm:text-[20px] font-medium">
                  {t("trusted_partner")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-8 justify-center md:justify-start">
                <button className="group flex items-center justify-center gap-[4px] w-full sm:w-[273px] px-[24px] py-[10px] text-white rounded-lg bg-[#23B3FC] hover:bg-[#23B3FC]/80 hover:text-white transition">
                  <span className="text-[14px] font-medium">
                    {btn("service_button")}
                  </span>
                  <Image
                    src={Down}
                    alt="down strelka"
                    className="group-hover:translate-x-1 transition-all duration-200"
                  />
                </button>

                <button className="group flex items-center justify-center gap-[4px] w-full sm:w-[273px] px-[24px] py-[10px] bg-[#23B3FC1F] text-[#23B3FC] rounded-lg hover:bg-[#23B3FC] hover:text-white transition">
                  <span className="text-[14px] font-medium">
                    {btn("applying")}
                  </span>
                  <FaChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
                </button>
              </div>
            </div>

            <div className="hidden md:flex md:flex-1 justify-center items-center w-full md:w-[55%] h-auto mt-8 md:mt-0 md:absolute z-[-10] md:right-[-50px]">
              {imageBg.map((item) => (
                <div key={item.id}>
                  <Image
                    src={item.bgImg}
                    alt="Illyustratsiya"
                    width={694}
                    height={684}
                    priority
                    className="w-full h-[684px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Steps section */}
      <div className="container mx-auto px-4 my-[30px]">
        <section className="bg-gradient-to-b from-[#39a9f2] to-[#0653C9] text-white p-6 rounded-3xl max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 sm:w-[80%]">
                {t("get_license")}
              </h2>

              <p className="text-base md:text-[20px] leading-[150%] mb-6 sm:w-[72%]">
                {t("online_start")}
              </p>

              <button className="group flex justify-center items-center gap-[4px] border-2 w-full sm:w-[273px] px-[24px] py-[10px] bg-[#23B3FC1F] text-[#FFFFFFFF] rounded-lg hover:bg-[#FFFFFFFF] hover:text-[#23B3FC] transition">
                <span className="text-[14px] font-medium">
                  {t("get_license_button")}
                </span>
              </button>
            </div>


            {/* Ariza topshirirsh */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps(t).map((step) => (
                <div
                  key={step.id}
                  className="bg-white bg-opacity-10 rounded-2xl p-4 flex flex-col items-start"
                >
                  <div className="bg-white bg-opacity-20 p-[16px] rounded-[18px] mb-3">
                    <Image
                      src={step.icon}
                      alt="step.title"
                      width={33}
                      height={33}
                    />
                  </div>
                  <h3 className="font-bold text-[20px] mb-2">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
