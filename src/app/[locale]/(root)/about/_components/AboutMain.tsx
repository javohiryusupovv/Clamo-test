"use client";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function AboutMain() {
  const t = useTranslations("AboutPage");

  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({
        duration: 700,
        once: true,   // ✅ Faqat bir marta
        mirror: false,
      });
    };
    loadAOS();
  }, []); // ✅ Faqat mount da

  const goalItems = [
    t('goals.item1'),
    t('goals.item2'),
    t('goals.item3'),
    t('goals.item4'),
    t('goals.item5'),
    t('goals.item6'),
    t('goals.item7'),
    t('goals.item8'),
  ];

  return (
    <div className=" relative w-full max-sm:flex max-sm:items-start max-sm:pt-10 pb-8 lg:pb-32 max-md:h-[90vh]">
      <div className="container relative z-10 items-center lg:pt-20">
        <div className="flex flex-col justify-center max-w-full lg:max-w-[50%]">
          <div className="mb-7">
            <p
              className="rounded-md font-inter font-medium bg-[#23B3FC] leading-[100%] text-white text-sm sm:text-base px-4 py-1 w-fit mb-2 md:mb-4"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-offset="50"
              data-aos-anchor-placement="top-bottom"
            >
              {t("markazfaoliyat")}
            </p>
            <p
              className="text-[14px] sm:text-[16px] md:text-[20px] text-[#012548CC] leading-[140%]"
              data-aos="fade"
              data-aos-delay="600"
              data-aos-offset="50"
              data-aos-anchor-placement="top-bottom"
            >
              {t("markazfaoliyatDescription")}
            </p>
          </div>
          <p
            className="rounded-md font-inter font-medium bg-[#23B3FC] leading-[100%] text-white text-sm sm:text-base px-4 py-1 w-fit mb-2 md:mb-4"
            data-aos="fade-right"
          >
            {t("plan")}
          </p>
          {/* <h2
            className="text-[20px] sm:text-[28px] lg:text-[32px] leading-[100%] font-semibold text-[#1B1B1B] md:pb-2 pb-3 mb-3"
            data-aos="fade"
            data-aos-delay="200"
            data-aos-offset="50"
            data-aos-anchor-placement="top-bottom"
          >
            {t("abouttitle")}
          </h2> */}
          <ul className="list-disc list-inside space-y-1 translate-x-10">
            {goalItems.map((key) => (
              <li className="-translate-x-5 text-[12px] sm:text-sm md:text-lg text-[#012548CC] leading-[170%]" key={key}>{key}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute overflow-hidden block z-0 transition-all duration-700 ease-in-out w-[30%] top-0 right-0 h-full">
        <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-white to-transparent sm:hidden z-10" />
        <img
          src="/assets/NavBuilding.png"
          alt="Building"
          className="object-cover w-full h-full"
          data-aos="fade-left"
        />
        <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
}