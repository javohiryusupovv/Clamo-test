"use client";

import { FaGooglePlay } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import "../../../../styles/InstalPage.css";
import { useEffect } from "react";
import Image from "next/image";
import QR from "@/assets/icons/QR.png";
import { useTranslations } from "next-intl";
import Link from "next/link";
import bgCircle from "../../../../../public/herobg.png";
import { usePathname } from "next/navigation";

export default function InstallPage() {
  const t = useTranslations("HomePage");

  useEffect(() => {
      const loadAOS = async () => {
        const AOS = await import("aos");
        AOS.init({ duration: 1000 });
        AOS.refresh();
      };
  
      if (typeof window !== "undefined") {
        loadAOS();
      }
    }, [usePathname()]);

  return (
    <section className="w-full px-4">
      <div className="container mx-auto relative top-0 left-0 bg-[#0653C9] flex flex-wrap lg:flex-nowrap justify-end items-center max-sm:items-start w-full min-h-[304px] rounded-[36px] max-sm:rounded-2xl p-4 lg:p-8">
        <div className="absolute -left-10 z-[2] opacity-[0.8] h-[320px] rounded-[36px] overflow-hidden">
          <Image width={800} height={100} src={bgCircle} className="h-full" alt="Background circle" />
        </div>
        {/* Phone Image */}
        <div className="absolute bottom-0 left-[-40px] lg:left-[-20px] z-10 max-w-full sm:max-w-[200px] lg:max-w-none overflow-visible">
          <Image
            src="/Imgs/iphone.svg"
            alt="Sharh Phone Share"
            className="object-contain lg:block hidden max-sm:object-cover"
            data-aos="zoom-in-up"
            width={355}
            height={359}
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 z-20 mt-6 lg:mt-0 max-xl:translate-x-3 max-lg:translate-x-0">
          <h6 className="text-[20px] sm:text-[24px] font-vk font-bold text-white mb-2">
            {t("install_app")}
          </h6>
          <p className="text-sm text-white opacity-60 font-vk leading-relaxed mb-4">
            {t("appeal_title")}
          </p>
          <article className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* App Store Button */}
            <Link
              href={"https://apps.apple.com/uz/app/sharh/id6454791625"}
              target="_blank"
              className="flex hover:bg-white/30 transition-all duration-200 items-center px-4 py-2 bg-white/20 rounded-lg gap-2"
            >
              <SiApple className="w-[30px] h-[30px] text-white" />
              <div className="text-left">
                <p className="text-xs text-white">Download on the</p>
                <p className="text-base text-white font-medium">App Store</p>
              </div>
            </Link>

            {/* Google Play Button */}
            <Link
              href={
                "https://play.google.com/store/apps/details?id=io.commeta.sharhuz&hl=ru"
              }
              target="_blank"
              className="group hover:bg-white/30 transition-all duration-200 flex items-center px-4 py-2 bg-white/20 rounded-lg gap-2"
            >
              <FaGooglePlay className="w-[30px] h-[30px] text-white" />
              <div className="text-left">
                <p className="text-xs text-white uppercase">Get it on</p>
                <p className="text-base text-white font-medium">Google Play</p>
              </div>
            </Link>

            {/* Huawei AppGallery */}
            <Link
              href={"https://appgallery.huawei.com/app/C109615407"}
              target="_blank"
              className="flex hover:bg-white/30 transition-all duration-200 items-center px-4 py-2 bg-white/20 rounded-lg gap-2"
            >
              <Image
                src="/logo/huawei-icon.svg"
                alt="Huawei logo"
                className="w-8 h-8 object-contain"
                width={32}
                height={32}
              />
              <div className="text-left">
                <p className="text-xs text-white uppercase font-vk">
                  Explore it on
                </p>
                <p className="text-base text-white font-medium font-vk">
                  AppGallery
                </p>
              </div>
            </Link>
          </article>
        </div>

        {/* QR Code */}
        <div className="w-full lg:w-auto mt-6 lg:mt-0 z-20 flex justify-center lg:justify-end">
          <Image
            src={QR}
            alt="QR code"
            width={180}
            height={180}
            className="object-contain hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
