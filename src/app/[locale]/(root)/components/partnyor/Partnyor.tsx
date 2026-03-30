"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Partner } from "../../../../../../app.types";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function Partnyor({ partners }: { partners: Partner[] }) {
  const t = useTranslations("InternationalPage");
  const [isGradient, setIsGradient] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      if (typeof window !== "undefined") {
        setIsGradient(window.innerWidth > 550); // sm breakpoint (640px)
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Marquee lazy load — TBT kamayadi
  const Marquee = dynamic(() => import("react-fast-marquee"), {
    ssr: false,
    loading: () => <div className="h-[200px]" />,
  });

  // 👉 Marquee to‘lishi uchun partnerlar sonini ko‘paytirish
  const minCount = 10; // minimal ko‘rsatiladigan elementlar soni
  const repeatCount = Math.ceil(minCount / partners.length);
  const extendedPartners = Array(repeatCount).fill(partners).flat();

  

  return (
    <div className="md:py-16 pt-6 mb-6 bg-[#F6F9FC] overflow-visible">
      <article className="container text-center mb-10 px-4 sm:px-0">
        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-vk mb-2 text-[#3D445E]">
          {t("hamkorlar")}
        </h3>
        <p className="text-base sm:text-[20px] font-vk text-[#012548CC] font-medium">
          {t("hamkorlar_des")}
        </p>
      </article>

      <div className="max-w-[1600px] m-auto w-full space-y-6 overflow-visible max-md:pb-10">
        <div>
          <Marquee
            direction="right"
            speed={20}
            gradient={isGradient}
            gradientColor="#F6F9FC"
            pauseOnHover
            className="mb-[18px]"
          >
            {extendedPartners.map((img, index) => (
              <Link
                href={img.link}
                key={`right-${img.id}-${index}`}
                className="mx-2 sm:mx-[18px] bg-white border-[#eaecef]/40 border-[3px] rounded-xl flex items-center justify-center h-[180px] sm:h-[110px] w-[160px] max-sm:h-[90px] sm:w-[220px] p-4"
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="object-contain h-full w-full"
                  width={77}
                  height={77}
                />
              </Link>
            ))}
          </Marquee>

          <Marquee
            direction="left"
            speed={20}
            gradient={isGradient}
            gradientColor="#F6F9FC"
            pauseOnHover
          >
            {extendedPartners
              .slice()
              .reverse()
              .map((img, index) => (
                <Link
                  href={img.link}
                  key={`left-${img.id}-${index}`}
                  className="mx-2 sm:mx-[18px] bg-white border-[#eaecef]/40 border-[3px] rounded-xl flex items-center justify-center h-[180px] sm:h-[110px] w-[160px] max-sm:h-[90px] sm:w-[220px] p-4"
                >
                  <img
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
