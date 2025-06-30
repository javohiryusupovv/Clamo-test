"use client";

import { getMedical } from "../../../../../constants/page";
import LearnMore from "./LearnMoreButton";
import { useEffect } from "react";
import Image from "next/image";
import ClamoFlag from "../../../../assets/images/clamoFlag.png";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function MedicalLegal() {
  const t = useTranslations("HomePage");
  const medical = getMedical(t);
  const locale = useLocale();

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000 });
      });
    }
  }, []);

  return (
    <div className="container">
      {medical.map((item, id) => (
        <div
          key={id}
          className="flex justify-between flex-col lg:flex-row items-center gap-8 pb-10"
        >
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-1 md:mb-3 mb-1">
              <p className="font-medium font-vk md:text-sm text-[12px] leading-[100%] uppercase text-[#3D445E]">
                {item.subtitle}
              </p>
              <span className="bg-[#23B3FC] font-medium font-vk rounded-md px-2 py-1 text-white md:text-sm text-[12px]">
                {item.badge}
              </span>
            </div>
            <h1 className="font-bold font-vk text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-[100%] text-[#3D445E] md:mb-[10px] mb-2">
              {item.title}
            </h1>
            <p className="font-medium font-vk md:text-base text-[13px] leading-[140%] sm:text-lg lg:text-xl text-[#012548CC] md:mb-7  mb-3">
              {item.description}
            </p>
            <div className="w-full max-lg:flex max-lg:justify-center">
              <Link href={`${locale}/license`} aria-label="Litsensiya">
                <LearnMore />
              </Link>
            </div>
          </div>

          <div className="relative bottom-0 z-[60] lg:h-[500px] overflow-hidden">
            <div className="bg-[url('../assets/images/twoCircle.png')] bg-no-repeat bg-center bg-contain w-full h-[950px] absolute -top-[480px] hidden lg:block -z-[1]"></div>
            <Image
              src={ClamoFlag}
              alt="Clamo Flag"
              className="object-fill object-center overflow-hidden"
              data-aos="fade-up"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
