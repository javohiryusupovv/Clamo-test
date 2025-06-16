"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { getPartners } from "../../../../../../constants/page";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Partnyor() {
  const partnyors = getPartners;
  const t = useTranslations("InternationalPage");

  return (
    <div className="md:py-16 pt-9 mb-9 bg-[#F6F9FC]">
      <article className="container text-center mb-10 px-4 sm:px-0">
        <h3 className="text-2xl sm:text-4xl font-bold mb-2 text-[#012548]">
          {t("hamkorlar")}
        </h3>
        <p className="text-base sm:text-lg text-[#012548] font-medium">
          {t("hamkorlar_des")}
        </p>
      </article>

      <div className="w-full space-y-6 overflow-hidden">
        <Marquee direction="right" speed={30} gradient pauseOnHover>
          {partnyors.map((img) => (
            <Link
              href="#"
              key={img.id}
              className="mx-2 sm:mx-[18px] bg-[#eaecef] border-white border-[3px] rounded-xl flex items-center justify-center h-[80px] sm:h-[110px] w-[160px] sm:w-[220px] p-6 sm:p-8"
            >
              <Image
                src={img.image}
                alt={img.title}
                className="object-contain h-full w-auto"
                width={57}
                height={57}
              />
            </Link>
          ))}
        </Marquee>

        <Marquee direction="left" speed={30} gradient pauseOnHover>
          {partnyors.reverse().map((img) => (
            <Link
              href="#"
              key={img.id}
              className="mx-2 sm:mx-[18px] bg-[#eaecef] border-white border-[3px] rounded-xl flex items-center justify-center h-[80px] sm:h-[110px] w-[160px] sm:w-[220px] p-6 sm:p-8"
            >
              <Image
                src={img.image}
                alt={img.title}
                className="h-full w-full object-contain"
                width={107}
                height={57}
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
