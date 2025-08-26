"use client"

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Folder from "@/assets/images/Folder.png";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function DocumentsHero() {
    const t = useTranslations("RegulatorydocumentsPage");
    const locale = useLocale();


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
        <>
            <div className="min-h-[40vh] lg:min-h-[70vh] md:min-h-[70vh] h-screen container">
                <section className="internationalparent block xl:flex items-center justify-between relative max-h-[50vh] lg:max-h-[50vh]">
                    {/* Text qismi */}
                    <div className="z-50 max-w-full md:max-w-xl space-y-4 mt-10 md:mt-[150px]">
                        <p className="text-sm w-fit font-medium bg-[#23B3FC] text-white py-1 px-3 rounded-[6px] leading-[100%] font-inter mb-[16px]"
                            data-aos="fade-right">
                            {t("normativeSectionTag")}
                        </p>
                        <h2 className="w-full md:w-[500px] bg-rte font-inter h-auto md:h-[78px] font-[600] text-[24px] md:text-[32px] leading-[120%] md:leading-[100%] text-[#1B1B1B]"
                            data-aos="fade"
                            data-aos-delay="200"
                            data-aos-offset="50"
                            data-aos-duration="700"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {t("normativeSectionTitle")}
                        </h2>
                        <p className="text-[#012548CC] font-vk text-[16px] md:text-[20px] leading-[100%]"
                            data-aos="fade"
                            data-aos-delay="500"
                            data-aos-offset="50"
                            data-aos-duration="700"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {t("normativeSectionDesc")}
                        </p>

                        <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:w-[630px]"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            <Link
                                href={`/${locale}/about#services-center`}
                                className="w-full"
                            >
                                <button className="group font-inter w-full lg:px-20 px-5 h-[37px] flex items-center justify-center gap-[11.5px] hover:bg-[hsl(200,97%,65%)] bg-[#23b3fc] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">
                                    {t("servicesBtn")}
                                    <FaAngleRight className="md:group-hover:translate-x-2 transition-all duration-200" />
                                </button>
                            </Link>
                            <Link href={`/${locale}/contacts`} className="w-full">
                                <button className="group hover:bg-[#23B3FC]/[30%] w-full text-[#23B3FC] bg-[#23B3FC]/[12%] font-inter transition-all duration-200 lg:px-20 px-5 h-[37px] flex items-center justify-center gap-[11.5px] rounded-lg text-sm font-medium leading-[130%]">
                                    {t("contactBtn")}
                                    <FaAngleRight className="md:group-hover:translate-x-2 transition-all duration-200" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Rasm qismi */}
                    <div className="absolute right-0 xl:-top-24 -z-10">
                        <div className="relative">
                            <img
                                src={Folder}
                                alt="Normativ hujjatlar"
                                width={2000}
                                height={1381}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
