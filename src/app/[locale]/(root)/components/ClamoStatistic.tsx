"use client"

import Doctors from "@/assets/images/doctors.png";
import bgCircle from "../../../../../public/herobg.png";
import LearnMore from "./LearnMoreButton";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NumbersType } from "@/types/type";


function useCountUp(target: number, duration = 1500) {
    const [count, setCount] = useState(0);
    const raf = useRef<number | null>(null);

    useEffect(() => {
        let start: number | null = null;
        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                raf.current = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };
        if (target > 0) {
            raf.current = requestAnimationFrame(animate);
        } else {
            setCount(0);
        }
        return () => {
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [target, duration]);
    return count;
}


export default function ClamoStatistic({ numbers }: { numbers: NumbersType }) {
    const t = useTranslations("HomePage");
    const locale = useLocale();

    const animatedClinics = useCountUp(Number(numbers.clinics_number));
    const animatedConsulting = useCountUp(Number(numbers.consulting_number));
    const animatedLicenses = useCountUp(Number(numbers.licenses_number));

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
            {/* Shifokorlar */}
            <div className="container">
                <div className="w-full sm:rounded-[36px] rounded-2xl bg-[#0653C9] overflow-hidden relative z-[12] md:mb-[80px] mb-[50px] lg:mt-[100px] max-lg:mt-[300px] max-sm:mt-[270px] max-ll:mt-[240px]">
                    <div className="lg:flex block gap-6 lg:gap-10 w-full justify-center pt-10">
                        <div className="relative flex-1 mb-[30px] lg:mb-0 lg:pl-8 px-4">
                            <p className="font-medium font-vk text-sm uppercase text-white/60 pb-2">
                                {t("aboutUs")}
                            </p>
                            <h1 className="font-bold font-vk text-2xl sm:text-3xl lg:text-[32px] leading-[100%] text-white pb-7">
                                {t("international_cooperation")}
                            </h1>
                            <Link href={`${locale}/about`} aria-label="Learn more about us">
                                <LearnMore />
                            </Link>
                            <div className=" flex justify-center">
                                <Image
                                    src={Doctors}
                                    alt="Doctors"
                                    width={359}
                                    height={370}
                                    className="object-contain pt-4 pl-4 sm:pl-[58px] lg:w-[75%] sm:w-[60%] w-[75%]"
                                    data-aos="fade-up"
                                />
                            </div>
                            <div className="absolute lg:-bottom-10 bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-blue-700/100 to-transparent" />
                            <p className="md:w-[96%] font-vk absolute lg:bottom-6 bottom-0 sm:left-6 sm:right-6 text-xs sm:text-sm font-medium leading-relaxed text-white">
                                {t("world_standards")}
                            </p>
                        </div>
                        <div className="flex-1 lg:pr-8 px-4 max-xl:pb-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl text-white flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <Image src="/icons/statistic/bino.svg" alt="HomeIcons" width={48} height={48} />
                                    <div className="pt-10">
                                        <h1 className="xl:text-[48px] lg:text-[39px] text-[36px] font-bold">
                                            {animatedClinics.toLocaleString("ru-RU")}+
                                        </h1>
                                        <p className="text-sm font-medium font-vk">
                                            {t("license_number")}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl text-white flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <Image src="/icons/statistic/zur.svg" alt="HomeIcons" width={48} height={48} />
                                    <div className="pt-10">
                                        <h1 className="xl:text-[48px] lg:text-[39px] text-[36px] font-bold">
                                            {animatedConsulting.toLocaleString("ru-RU") || 0}+
                                        </h1>
                                        <p className="text-sm font-medium font-vk">
                                            {t("consulting_service")}
                                        </p>
                                    </div>
                                </div>
                                <div className=" relative top-0 left-0 bg-gradient-to-br overflow-hidden from-blue-400 to-blue-600 p-6 rounded-2xl text-white flex flex-col md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <Image src="/icons/statistic/document.svg" alt="HomeIcons" width={48} height={48} />
                                    <Image
                                        src={bgCircle}
                                        className=" absolute top-0 left-36 opacity-[0.7] max-ll:top-4"
                                        alt="BgCircle"
                                        data-aos="flip-left"
                                    />
                                    <div className="pt-10">
                                        <h1 className="xl:text-[48px] lg:text-[39px] text-[36px] font-bold">
                                            {animatedLicenses.toLocaleString("ru-RU")}+
                                        </h1>
                                        <p className="text-sm font-medium font-vk">
                                            {t("number_license")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
