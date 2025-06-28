"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Partner } from "../../../../../../app.types";

export default function Partnyor({ partners }: { partners: Partner[] }) {
  const t = useTranslations("InternationalPage");

  return (
    <div className="md:py-16 pt-9 mb-9 bg-[#F6F9FC]">
      <article className="container text-center md:mb-10 mb-4 px-4 sm:px-0 flex flex-col gap-[4px]">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-vk leading-[100%] text-[#3D445E]">
          {t("hamkorlar")}
        </h3>
        <p className="text-base sm:text-[20px] font-vk text-[#012548CC] font-medium">
          {t("hamkorlar_des")}
        </p>
      </article>

      <div className="container w-full space-y-6 overflow-visible">
        <div>
          <Marquee
            direction="right"
            speed={30}
            gradient={false}
            pauseOnHover
            className="mb-[18px]"
          >
            {partners.map((img) => (
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
          <Marquee direction="left" speed={30} gradient={false} pauseOnHover>
            {partners.reverse().map((img) => (
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
    </div>
  );
}
