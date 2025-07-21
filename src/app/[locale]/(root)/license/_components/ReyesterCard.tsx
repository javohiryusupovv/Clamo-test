
"use client"

import { MapPin } from "lucide-react";
import { ReyesterType } from "../../../../../../app.types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { getLocalizedValue } from "@/lib/getLocalization";
import { useLocale, useTranslations } from "next-intl";

interface ReyesterCardProps {
  title: string;
  location: string;
  accreditationNumber: string;
  registrationDate: string;
  reyesterType?: ReyesterType[];
  website: string;
  email: string;
  phone: string;
  reviews: string
}

export default function ReyesterCard({
  title,
  location,
  accreditationNumber,
  registrationDate,
  reyesterType,
  website,
  email,
  phone,
  reviews
}: ReyesterCardProps) {
  const locale = useLocale();
  const t = useTranslations("ReyesterCard")




  return (
    <div className="bg-white rounded-2xl p-6 shadow border space-y-3 mb-[24px]">
      <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-start flex-wrap sm:flex-nowrap gap-2">
        <div className="lg:w-4/5 w-full ">
          <h3 className="text-sm sm:text-[16px] md:text-[24px] font-semibold mb-1 text-[#3D445E] font-inter leading-[130%] pb-2">
            {title}
          </h3>
          <div className="lg:flex gap-2 items-center text-sm">
            <div className="flex items-center gap-2  lg:w-[60%] bg-white">
              <MapPin width={20} height={20} className="text-[#23B3FC]" />
              <span className="w-full text-[14px] font-inter font-normal leading-[130%] text-[#3D445E]">
                {location}
              </span>
            </div>
            <div className="text-sm px-3 py-1 rounded-lg flex gap-2">
              {reyesterType?.map((type, idx) => {
                const localizedName = getLocalizedValue(
                  {
                    name: type.name,
                    name_uz: type.name_uz || "",
                    name_en: type.name_en || "",
                    name_ru: type.name_ru || "",
                  },
                  "name",
                  locale
                );
                return (
                  <button
                    key={idx}
                    className="bg-[#E3E8ED] text-[14px] max-sm:text-[12px] leading-[130%] font-inter py-1 px-3 rounded-lg"
                  >
                    {localizedName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <Link href={`/${locale}/cabinet-clamo`} className=" group font-inter flex items-center justify-center gap-1 mt-2 sm:mt-0 text-[10px] sm:text-xs md:text-sm text-[#23B3FC] font-medium bg-blue-50 px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 rounded-md hover:bg-blue-100 transition-colors">
          {t("view_license")}
          <FaArrowRightLong className="group-hover:rotate-[1deg] group-hover:scale-105 transition-all duration-100 -rotate-45" />
        </Link>
      </div>



      <div className="grid lg:grid-cols-3 ms:grid-cols-2 items-center max-ms:justify-start justify-center text-sm text-gray-700 border-t pt-[20px] gap-4">
        <div>
          <p className="font-normal font-inter text-[14px] leading-[130%] text-[#808597] mb-2">
            {t("accreditation_number")}
          </p>
          <p className="text-[18px] font-semibold font-inter leading-[130%] text-[#3D445E]">
            {accreditationNumber}
          </p>

          <p className="font-normal font-inter text-[14px] leading-[130%] text-[#808597] mb-2 mt-4">
            {t("shares")}
          </p>
          <p className="text-[18px] font-semibold font-inter leading-[130%] text-[#3D445E]">
            {reviews && parseInt(reviews) > 0 ? reviews : <p className="text-[15px]">{t("not_available")}</p>}
          </p>
        </div>

        <div className="ms:border-l ms:pl-[40px]">
          <p className="font-normal font-inter text-[14px] leading-[130%] text-[#808597] mb-2">
            {t("registration_date")}
          </p>
          <p className="text-[18px] font-semibold font-inter leading-[130%] text-[#3D445E]">
            {registrationDate}
          </p>


          <p className="font-normal font-inter text-[14px] leading-[130%] text-[#808597] mb-2 mt-4">
            {t("website")}
          </p>
          <p className="text-[18px] font-semibold font-inter leading-[130%] text-[#3D445E]">
            {website ? (
              <Link
                href={website}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {website}
              </Link>
            ) : (
              t("not_available")
            )}
          </p>
        </div>

        <div className="lg:border-l lg:pl-[40px]">
          <p className="font-normal font-inter text-[14px] leading-[130%] text-[#808597] mb-2">
            {t("email")}
          </p>
          <p className="text-[18px] font-semibold font-inter leading-[130%] text-[#3D445E]">
            {email && email.trim() !== "" ? email : t("not_available")}
          </p>

          <p className="font-medium text-[14px] font-inter text-[#808597] pb-[8px] mt-4">
            {t("phone")}
          </p>
          <p className="text-[18px] font-semibold font-inter leading-[130%] text-[#3D445E]">
            {phone && phone.trim() !== "" ? phone : t("not_available")}
          </p>
        </div>
      </div>
    </div>
  );
}
