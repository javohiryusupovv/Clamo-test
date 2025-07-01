"use client";

import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";
import { Department } from "../../../../../../app.types";
import { useLocale, useTranslations } from "next-intl";
export default function DepartmentSection({
  agentsection,
}: {
  agentsection: Department[];
}) {
  const t = useTranslations("AboutPage");
  const locale = useLocale();
  return (
    <section className=" container md:py-12 py-5">
      <div className="flex flex-col gap-[4px]">
        <h2 className="text-2xl sm:text-3xl font-vk md:text-4xl lg:text-5xl font-bold text-[#3D445E] text-start">
          {t("abouttitle3")}
        </h2>
        <p className="text-[#012548CC] md:pb-[44px] pb-5 font-vk font-medium md:text-[20px] sm:text-base text-sm">
          {t("about_des3")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 md:gap-4">
        {agentsection.map((departments) => {
          const stringDepartments = pickStringProps(departments);
          const titleLocale = getLocalizedValue(
            stringDepartments,
            "title",
            locale
          );
          const descriptionLocale = getLocalizedValue(
            stringDepartments,
            "description",
            locale
          );
          return (
            <div
              key={departments.id}
              className="group rounded-2xl md:p-6 p-4 md:py-10 flex items-start gap-4 bg-[#F6F9FC] hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white hover:cursor-pointer mb-4 transition-all duration-200 ease-in-out"
            >
              <div className="rounded-full md:p-2 p-1 bg-[#0653C9] py-3 text-white group-hover:bg-white group-hover:text-blue-700 transition-all duration-200 ease-in-out">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-[#0A56CB] max-md:w-[32xp] max-md:h-[32px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2002 12.8002V35.2002C11.2002 37.8512 13.3492 40.0002 16.0002 40.0002H32.0002C34.6512 40.0002 36.8002 37.8512 36.8002 35.2002V19.2002C36.8002 16.5492 34.6512 14.4002 32.0002 14.4002H12.8002C11.9165 14.4002 11.2002 13.6839 11.2002 12.8002ZM16.4002 24.0002C16.4002 23.3375 16.9375 22.8002 17.6002 22.8002H30.4002C31.0629 22.8002 31.6002 23.3375 31.6002 24.0002C31.6002 24.6629 31.0629 25.2002 30.4002 25.2002H17.6002C16.9375 25.2002 16.4002 24.6629 16.4002 24.0002ZM16.4002 29.6002C16.4002 28.9375 16.9375 28.4002 17.6002 28.4002H26.4002C27.0629 28.4002 27.6002 28.9375 27.6002 29.6002C27.6002 30.2629 27.0629 30.8002 26.4002 30.8002H17.6002C16.9375 30.8002 16.4002 30.2629 16.4002 29.6002Z"
                    fill=""
                  />
                  <path
                    d="M11.8543 11.3396C12.4118 11.5896 12.8002 12.1495 12.8002 12.8002H32.0002C32.5527 12.8002 33.0888 12.8702 33.6002 13.0018V11.6899C33.6002 9.7425 31.8754 8.24662 29.9476 8.52202L12.6715 10.99C12.3636 11.034 12.0845 11.1582 11.8543 11.3396Z"
                    fill=""
                  />
                </svg>
              </div>
              <div className="transition-all duration-200 ease-in-out">
                <h3 className="font-bold text-[#3D445E] font-vk text-[20px] leading-[140%] group-hover:text-white transition-colors duration-200 ease-in-out">
                  {titleLocale}
                </h3>
                <p className="md:text-[16px] text-[14px] mt-2 font-vk group-hover:text-white leading-[140%] transition-colors duration-200 ease-in-out">
                  {descriptionLocale}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
