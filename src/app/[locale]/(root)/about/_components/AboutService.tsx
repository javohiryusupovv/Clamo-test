"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ServiceData } from "../../../../../../app.types";
import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";

export default function ServicesSection({
  servicec,
}: {
  servicec: ServiceData[];
}) {
  const t = useTranslations("AboutPage");
  const locale = useLocale();
  const slugs = ["accreditation", "license", "consulting", ""];

  return (
    <section
      className="md:py-16 py-8 bg-[#F6F9FC] max-md:scroll-mt-14 scroll-mt-4"
      id="services-center"
    >
      <div className=" container">
        <div className="md:mb-12 mb-6 flex flex-col gap-[4px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[100%] font-vk font-bold text-[#3D445E] text-start">
            {t("service")}
          </h2>
          <p className="text-sm sm:text-base md:text-[20px] font-vk text-[#012548CC] leading-[140%] md:max-w-full max-w-2xl text-start">
            {t("service_des")}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicec.map((service, index) => {
            const serviceData = pickStringProps(service);
            const localizedTitle = getLocalizedValue(
              serviceData,
              "title",
              locale
            );
            const localizedDescription = getLocalizedValue(
              serviceData,
              "description",
              locale
            );
            const slug = slugs[index];

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-md p-6 flex flex-col justify-between transition duration-300 hover:-translate-y-1"
                data-aos="zoom-out"
              >
                <div>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <h3 className="md:text-[20px] text-base leading-[140%] font-bold font-vk text-[#3D445E] mb-3">
                    {localizedTitle}
                  </h3>
                  <p className="text-sm text-[#3D445E] font-normal font-vk leading-[140%]">
                    {localizedDescription}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="mt-[34px] flex justify-end items-center gap-4">
                  <Link
                    href={`/${locale}/${slug}`}
                    className="text-[16px] text-[#23B3FC] font-medium font-vk opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {t("batafsil")}
                  </Link>
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-[#23B3FC] transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-[#23B3FC] group-hover:text-white group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
