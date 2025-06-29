"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Partner } from "../../../../../../app.types";

export default function Partnyor({partners}: {partners: Partner[]}) {
  const t = useTranslations("InternationalPage");

  return (
    <div className="md:py-16 pt-9 mb-9 bg-[#F6F9FC] overflow-visible">
      <article className="container text-center mb-10 px-4 sm:px-0">
        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-vk mb-2 text-[#3D445E]">
          {t("hamkorlar")}
        </h3>
        <p className="text-base sm:text-[20px] font-vk text-[#012548CC] font-medium">
          {t("hamkorlar_des")}
        </p>
      </article>

      <div className=" max-w-[1600px] m-auto w-full space-y-6">
        <div className="">
          <Marquee direction="right" speed={30} gradient={true} gradientColor="#F6F9FC" pauseOnHover className="mb-[18px]">
            {partners.map((img) => (
              <Link
                href="#"
                key={img.id}
                className="mx-2 sm:mx-[18px] bg-white border-[#eaecef]/40 border-[3px] rounded-xl flex items-center justify-center h-[180px] sm:h-[110px] w-[160px] max-sm:h-[90px] sm:w-[220px] p-4"
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  className="object-contain h-full w-full"
                  width={77}
                  height={77}
                />
              </Link>
            ))}
          </Marquee>
          <Marquee direction="left" speed={30} gradient={true} gradientColor="#F6F9FC" pauseOnHover>
            {partners.reverse().map((img) => (
              <Link
                href="#"
                key={img.id}
                className="mx-2 sm:mx-[18px] bg-white border-[#eaecef]/40 border-[3px] rounded-xl flex items-center justify-center h-[180px] sm:h-[110px] w-[160px] max-sm:h-[90px] sm:w-[220px] p-4"
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  className="object-contain h-full w-full"
                  width={77}
                  height={77}
                />
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
