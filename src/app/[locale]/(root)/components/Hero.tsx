"use client";

import Image from "next/image";
import Down from "@/assets/icons/whiteDown.png";
import Doctors from "@/assets/images/doctors.png";
import Home from "@/assets/images/home.png";
import File from "@/assets/images/file.png";
import True from "@/assets/images/true.png";
import ImageClamo from "@/assets/images/ImageClamo.png";
import bgCircle from "../../../../../public/herobg.png";
import LearnMore from "./LearnMoreButton";
import { useEffect, useState, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";
import { NumbersType } from "@/types/type";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    if (target > 0) {
      raf.current = requestAnimationFrame(animate);
    } else {
      setCount(0);
    }
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, duration]);
  return count;
}

export default function Hero({ numbers }: { numbers: NumbersType }) {
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

  const animatedClinics = useCountUp(Number(numbers.clinics_number));
  const animatedConsulting = useCountUp(Number(numbers.consulting_number));
  const animatedLicenses = useCountUp(Number(numbers.licenses_number));

  return (
    <div className=" overflow-x-hidden">
      <div>
        {/* Ko'k soya */}
        <div className="absolute -top-[-230px] left-[-200px] w-4/5 h-[280px] bg-[rgb(35,179,252)] opacity-25 blur-[120px] rounded-full x`-z-[1]"></div>
        <section className="container grid lg:grid-cols-2 grid-cols-1 lg:gap-20 lg:pb-10 lg:relative">
          <div className="lg:mt-[163px] md:mt-[90px] mt-[50px]">
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
            <div className="bg-white border border-white w-[411px] max-lg:w-full mb-4 sm:px-4 rounded-[17px]">
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
              </article>
              <p className="font-medium font-inter text-[12px] pb-4 lg:w-[379px] text-[#3D445E]">
                {t("specialists")}
              </p>
            </div>
          </div>

          <Image
            src={ImageClamo}
            alt="HeroImage"
            className=" lg:ml-40 lg:absolute -right-44 -top-12 -z-[1] max-sm:-mb-16 max-md:-mb-[78px] max-lg:mb-[-90px]"
          />
          {/* oq soya */}
          <div className="absolute lg:-bottom-20 md:-bottom-96 sm:-bottom-[250px] -bottom-[250px] max-lg:left-0  lg:-right-40 xl:w-2/3 lg:w-3/4 w-[100%] h-[270px] bg-gradient-to-t from-white/60 to-transparent" />
        </section>
      </div>

      {/* Shifokorlar */}
      <div className="container">
        <div className="w-full sm:rounded-[36px] rounded-2xl bg-[#0653C9] overflow-hidden relative z-0 md:mb-[80px] mb-[50px]">
          <div className="lg:flex block gap-6 lg:gap-10 w-full justify-center pt-10">
            <div className="relative flex-1 mb-[30px] lg:mb-0 lg:pl-8 px-4">
              <p className="font-medium font-vk text-sm uppercase text-white/60 pb-2">
                {t("aboutUs")}
              </p>
              <h1 className="font-bold font-vk text-2xl sm:text-3xl lg:text-[32px] leading-[100%] text-white pb-7">
                {t("international_cooperation")}
              </h1>
              <Link href={`${locale}/about`}>
                <LearnMore />
              </Link>
              <div className=" flex justify-center">
                <Image
                  src={Doctors}
                  alt="Doctors"
                  width={359}
                  height={370}
                  className="object-contain pt-4 pl-4 sm:pl-[58px] lg:w-[75%] sm:w-[60%] w-[75%]"
                />
              </div>
              <div className="absolute lg:-bottom-10 bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-blue-700/100 to-transparent" />
              <p className="md:w-[96%] font-vk absolute lg:bottom-6 bottom-0 sm:left-6 sm:right-6 text-xs sm:text-sm font-medium leading-relaxed text-white">
                {t("world_standards")}
              </p>
            </div>
            <div className="flex-1 lg:pr-8 px-4 max-xl:pb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl text-white flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image src={Home} alt="HomeIcons" width={48} height={48} />
                  <div className="pt-10">
                    <h1 className="xl:text-[48px] lg:text-[39px] text-[36px] font-bold">
                      {animatedClinics.toLocaleString("ru-RU")}+
                    </h1>
                    <p className="text-sm font-medium font-vk">
                      {t("license_number")}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl text-white flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image src={True} alt="HomeIcons" width={48} height={48} />
                  <div className="pt-10">
                    <h1 className="xl:text-[48px] lg:text-[39px] text-[36px] font-bold">
                      {animatedConsulting.toLocaleString("ru-RU") || 0}+
                    </h1>
                    <p className="text-sm font-medium font-vk">
                      {t("consulting_service")}
                    </p>
                  </div>
                </div>
                <div className=" relative top-0 left-0 bg-gradient-to-br overflow-hidden from-blue-400 to-blue-600 p-6 rounded-2xl text-white flex flex-col md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image src={File} alt="HomeIcons" width={48} height={48} />
                  <Image
                    src={bgCircle}
                    className=" absolute top-0 left-36 opacity-[0.7] max-ll:top-4"
                    alt="BgCircle"
                  />
                  <div className="pt-10">
                    <h1 className="xl:text-[48px] lg:text-[39px] text-[36px] font-bold">
                      {animatedLicenses.toLocaleString("ru-RU")}+
                    </h1>
                    <p className="text-sm font-medium font-vk">
                      {t("number_license")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
