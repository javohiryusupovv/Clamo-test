"use client";

import Image from "next/image";
import { getSteps } from "../../../../../../constants/page";
import { useLocale, useTranslations } from "next-intl";
import { StepType } from "../../../../../../app.types";

export default function AccredationMain() {
  const t = useTranslations("AccreditationPage");
  const Steps = getSteps;
  const locale = useLocale()

  const getLocalized = (item: StepType, key: "title" | "description") => {
    return (
      item[`${key}_${locale}` as keyof StepType] || // ex: title_uz
      item[key] || // fallback to `title`
      ""
    );
  };

  return (
    <div className="container mx-auto lg:pb-16 pb-8 lg:pt-6 sm:pt-9 pt-8 md:pt-12 xl:pt-0">
      <h1 className="font-vksans font-bold sm:text-center akkreditsiya sm:ml-0 ml-1 text-[#3D445E] font-vksans text-[30px] sm:w-full text-3xl md:text-4xl lg:text-5xl leading-tight md:mb-10 sm:mb-8 mb-5 lg:mb-12">
        {t("get_accerditation")}
      </h1>

      <div className="grid grid-cols-1 max-w-[500px] sm:max-w-full mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-[28px] md:p-6 p-4 lg:p-8 border border-gray-400/25 flex flex-col items-start sm:text-left"
          >
            <div className="flex items-center justify-center md:w-[70px] w-[50px] h-[50px] md:h-[70px] rounded-full mb-4 bg-[#049AE7]">
              <Image
                src={step.icon}
                alt={getLocalized(step, "title")}
                width={30}
                height={30}
                className="object-contain max-md:w-[25px] max-md:h-[25px]"
              />
            </div>
            <h3 className="text-[20px] font-bold font-vk text-[#3D445E] leading-[130%] mb-2">
              {getLocalized(step, "title")}
            </h3>
            <p className="text-[#3D445E] text-[14px] font-vk font-normal leading-[130%]">
              {getLocalized(step, "description")}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
