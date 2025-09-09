"use client";
import { useTranslations } from "next-intl";
import "aos/dist/aos.css";



export default function AboutMain() {
  const t = useTranslations("AboutPage");
// console.log);



  return (
    <div className="relative w-full overflow-visible max-sm:flex max-sm:items-start max-sm:pt-10 max-sm:h-[80vh] h-screen pb-8 lg:pb-32">
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center lg:pt-32">
        {/* Matn bo‘limi */}
        <div className="flex flex-col justify-center">
          <p className="rounded-md font-inter font-medium bg-[#23B3FC] leading-[100%] text-white text-sm sm:text-base px-4 py-1 w-fit mb-2 md:mb-4" data-aos="fade-right">
            {t("plan")}
          </p>
          <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] leading-[100%] font-semibold text-[#1B1B1B] md:pb-2 pb-3" data-aos="fade" data-aos-delay="200"
            data-aos-offset="50"
            data-aos-duration="700"
            data-aos-anchor-placement="top-bottom">
            {t("abouttitle")}
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[20px] text-[#012548CC] leading-[140%]" data-aos="fade" data-aos-delay="600"
            data-aos-offset="50"
            data-aos-duration="700"
            data-aos-anchor-placement="top-bottom">
            {t("about_des1")}
          </p>
        </div>
      </div>

      {/* Bino rasmi (o‘ng tomonga chiqib turadi) */}
      <div
        className="
        absolute block z-0
        transition-all duration-700 ease-in-out
        bottom-0 max-sm:right-[-90px]
        lg:top-0 lg:right-0 lg:w-[55%] lg:h-full
        md:bottom-[150px] md:right-[-30px] max-sm:scale-90
        sm:bottom-[-66px] sm:top-auto sm:w-[729px] sm:h-[486px] max-sm:w-[350px] max-sm:h-[370px]
      "
      >
        <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-white to-transparent sm:hidden z-10" />

        <img
          src="/assets/NavBuilding.png"
          alt="Building"
          className="object-cover"
          data-aos="fade-left"
        />
        <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-white to-transparent" />
      </div>

    </div>
  );
}
