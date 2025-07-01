"use client";
import Image from "next/image";
import Folder from "@/assets/images/Folder.png";
import "../../../../styles/documents.css";
import NormativeAccordion from "./_components/NormativeAccordion";
import GovernmentDecisionsPage from "./_components/government-decisions";
import CenterRegulations from "./_components/CenterRegulations";
import { useLocale, useTranslations } from "next-intl";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { useEffect } from "react";
import { getLocalizedValue } from "@/lib/getLocalization";




export async function generateMetadata({ params }: { params: Promise<{locale: string }>}) {
  const {locale} = await params
    const content = {
    title_uz: "Tibbiyotdagi asosiy meʼyoriy hujjatlar",
    description_uz: "Tashkilotingiz uchun zarur litsenziyani tez va ishonchli tarzda oling. Clamo sizning qonuniylikdagi ishonchli hamkoringiz.",

    title_ru: "Основные нормативные документы в медицине",
    description_ru: "Получите необходимую лицензию для вашей организации быстро и надежно. Clamo — ваш надежный партнер в вопросах легализации.",

    title_en: "Key Regulatory Documents in Medicine",
    description_en: "Obtain the required license for your organization quickly and reliably. Clamo is your trusted partner in legal compliance.",
  };

  return {
    title: getLocalizedValue(content, "title", locale),
    description: getLocalizedValue(content, "description", locale),
  };
}

export default function NormativeDocuments() {
  const t = useTranslations("RegulatorydocumentsPage");
  const locale = useLocale();
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000 });
      });
    }
  }, []);
  return (
    <div className="bg-white w-full">
      <div className="min-h-[40vh] lg:min-h-[70vh] md:min-h-[70vh] container">
        <section className="internationalparent flex items-center justify-between relative max-h-[50vh] lg:max-h-[50vh]">
          {/* Text qismi */}
          <div className="z-9999999 max-w-full md:max-w-xl space-y-4 mt-10 md:mt-[150px]">
            <span className="text-sm font-medium bg-[#23B3FC] text-white py-1 px-3 rounded-[6px] leading-[100%] font-inter mb-[16px]">
              {t("normativeSectionTag")}
            </span>
            <h2 className="w-full md:w-[500px] font-inter h-auto md:h-[78px] font-[600] text-[24px] md:text-[32px] leading-[120%] md:leading-[100%] text-[#1B1B1B]">
              {t("normativeSectionTitle")}
            </h2>
            <p className="text-[#012548CC] font-vk text-[16px] md:text-[20px] leading-[100%]">
              {t("normativeSectionDesc")}
            </p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 w-full">
              <Link
                href={`/${locale}/about#services-center`}
                className="w-full"
              >
                <button className="group font-inter w-full lg:px-20 px-5 h-[37px] flex items-center justify-center gap-[11.5px] hover:bg-[hsl(200,97%,65%)] bg-[#23b3fc] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">
                  {t("servicesBtn")}{" "}
                  <FaAngleRight className="md:group-hover:translate-x-2 transition-all duration-200" />
                </button>
              </Link>
              <Link href={`/${locale}/contacts`} className="w-full">
                <button className="group hover:bg-[#23B3FC]/[30%] w-full text-[#23B3FC] bg-[#23B3FC]/[12%] font-inter transition-all duration-200 lg:px-20 px-5 h-[37px] flex items-center justify-center gap-[11.5px] rounded-lg text-sm font-medium leading-[130%]">
                  {t("contactBtn")}{" "}
                  <FaAngleRight className="md:group-hover:translate-x-2 transition-all duration-200" />
                </button>
              </Link>
            </div>
          </div>
          {/* Rasm qismi */}
          <div className="absolute right-0 -top-24 -z-10 hidden xl:block">
            <div className="relative">
              <Image
                src={Folder}
                alt="Normativ hujjatlar"
                width={2000}
                height={1381}
                className="object-cover"
                data-aos="fade-up"
                data-aos-duration="1300"
              />
            </div>
          </div>
        </section>
      </div>
      <NormativeAccordion />
      <GovernmentDecisionsPage />
      <CenterRegulations />
    </div>
  );
}
