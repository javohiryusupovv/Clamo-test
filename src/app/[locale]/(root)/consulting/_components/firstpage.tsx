"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from "next/link";

export default function ConsultingPages() {
  const t = useTranslations("ConsultingPage");

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
    <div className="bg-[#F6F9FC]">
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between min-h-[500px] lg:h-[721px] gap-10 lg:gap-0">
        <div className="max-lg:!mt-[200px] lg:mt-[0px] min-h-[50vh] flex flex-col justify-center items-center">
          <div className="absolute mt-[50px] top-20 left-1/2 -translate-x-1/2 lg:hidden w-full max-w-[500px] flex justify-center">
            <img
              src="/Images/man.png"
              alt="man"
              className="object-contain max-w-[250px] sm:max-w-[350px] h-auto"
            />
            <img
              src="/Images/woman.png"
              alt="woman"
              className="pb-[10px] object-contain max-w-[250px] sm:max-w-[350px] h-auto absolute right-0 top-0"
            />
            <div className="absolute bottom-0 left-0 w-full h-[100px] md:h-[180px] bg-gradient-to-t from-[#F6F9FC] to-transparent z-20"></div>
          </div>
          {/* LEFT SIDE */}
          <div className="relative w-full max-lg:bg-[#ffffffe8] lg:bg-none rounded-lg p-8 lg:max-w-[597px] z-99 mt-40 lg:mt-[122px] flex flex-col gap-6">
            {/* Email + Title */}
            <div className="flex flex-col gap-2">
              <div
                className="flex flex-wrap items-center gap-2"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <Link href="mailto:info@clamo.uz">
                  <span className="bg-[#23B3FC] text-white rounded-[6px] py-1 px-2 text-sm font-medium">
                    INFO@CLAMO.UZ
                  </span>
                </Link>
                <span
                  className="text-[#3D445E] text-sm md:text-base"
                  data-aos="fade"
                  data-aos-delay="600"
                >
                  {t("email_letter")}
                </span>
              </div>

              <h1
                className="text-[#3D445E] font-bold text- md:text-[32px] lg:text-[32px] leading-tight max-w-[509px]"
                data-aos="fade"
                data-aos-delay="200"
              >
                {t("easy_sever")}
              </h1>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-4">
              {/* Step 1 */}
              <div
                className="bg-white rounded-3xl p-5 flex flex-col gap-4 shadow-sm"
                data-aos="fade"
                data-aos-delay="400"
              >
                <span className="border border-[#23B3FC] text-[#23B3FC] font-bold text-xl md:text-[24px] rounded-[40px] px-6 h-[47px] flex items-center w-fit">
                  {t("step_one")}
                </span>
                <p className="text-lg md:text-[20px] text-[#3D445E] font-medium">
                  {t("info_person")}
                </p>
              </div>

              {/* Step 2 */}
              <div
                className="bg-[#23B3FC] sm:bg-white rounded-3xl p-5 flex flex-col gap-4 shadow-sm"
                data-aos="fade"
                data-aos-delay="500"
              >
                <span className="border border-white sm:border-[#23B3FC] text-white sm:text-[#23B3FC] font-bold text-xl md:text-[24px] rounded-[40px] px-6 h-[47px] flex items-center w-fit">
                  {t("step_two")}
                </span>
                <p className="text-lg md:text-[20px] text-white sm:text-[#3D445E] font-medium">
                  {t("active_place")}
                </p>
              </div>
            </div>

          </div>
        </div>
        {/* RIGHT SIDE for large screens */}
        <div className="relative hidden lg:flex w-full max-w-[500px] lg:max-w-[559px] justify-center">
          <img
              src="/Images/man.png"
            alt="man"
            className="object-contain max-w-[250px] sm:max-w-[350px] lg:max-w-[494px] h-auto"
          />
          <img
              src="/Images/woman.png"
            alt="woman"
            className="pb-[10px] object-contain max-w-[250px] sm:max-w-[350px] lg:max-w-[494px] h-auto absolute right-0 lg:right-[-30px] lg:top-[28px]"
          />
          <div className="absolute bottom-0 left-0 w-full h-[100px] md:h-[180px] lg:h-[430px] bg-gradient-to-t from-[#F6F9FC] to-transparent z-20"></div>
        </div>
      </div>
    </div>
  );
}
