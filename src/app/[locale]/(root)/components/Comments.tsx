"use client";

import "../../../../styles/linerMainserver.css";
import { commentOpinion } from "@/types/type";
import { getOpinion } from "../../../../../constants/page";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CommentSharh } from "app.types";
import dayjs from "../../../../lib/day-setup";
import Link from "next/link";
import Image from "next/image"; // ✅
import dynamic from "next/dynamic";

// ✅ Marquee lazy load — TBT kamayadi
const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
  loading: () => <div className="h-[200px]" />,
});


interface CommentProps {
  comments: CommentSharh[];
}

// ✅ Karta alohida komponent — takrorlanishni yo'q qilamiz
function CommentCard({ item, t }: { item: CommentSharh; t: ReturnType<typeof useTranslations> }) {
  return (
    <div className="lg:max-w-[343px] max-w-[300px] mx-4 max-sm:mx-2 border border-[#E3E8E9] rounded-[16px] sm:p-[16px] p-[8px] bg-white">
      <div className="flex items-center gap-2">
        <div className="flex items-center w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px]">
          {/* ✅ next/image — avtomatik WebP, to'g'ri o'lcham */}
          <Image
            src={item?.user?.avatar?.s100x100 ?? item?.user?.avatar?.original ?? '/icons/Avatar.svg'}
            alt={`${item.author_name} avatar`} // ✅ aniqroq alt
            width={44}
            height={44}
            sizes="44px"   // ✅ brauzerga aniq o'lcham
            quality={75}   // ✅ hajm kamayadi
            className="rounded-full w-full h-full object-cover border border-[#C6CFD733]"
          />
        </div>
        <div>
          <h2 className="font-semibold font-roboto text-[#022F5E] leading-[130%] sm:text-[16px] text-[12px] pb-[3px]">
            {item.author_name}
          </h2>
          <article className="flex items-end gap-1">
            <p className="max-w-[60%] line-clamp-1 font-medium text-[12px] text-[#1D4ED8]">
              {item.company.name}
            </p>
            <span className="text-[12px] text-[#6B7280]">{t("companycomments")}</span>
          </article>
        </div>
      </div>

      <hr className="my-[10px] text-[#F5F6F7]" />

      <div className="flex items-center gap-1 sm:pb-[8px] pb-1">
        <div className="flex gap-[2px]">
          {Array.from({ length: 5 }).map((_, index) => (
            // ✅ Yulduzlar SVG — next/image shart emas, kichik ikonka
            <img
              key={index}
              src={index < item.rating ? "/icons/stars.svg" : "/icons/starsgray.svg"}
              alt=""           // ✅ dekorativ — bo'sh alt
              width={16}
              height={16}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="font-normal sm:text-[14px] font-roboto text-[12px] text-[#6B7280]">
          {dayjs(item.created_at).fromNow()}
        </p>
      </div>

      <p className="font-normal sm:text-[14px] leading-[130%] text-[#121C25] font-roboto text-[12px] line-clamp-2">
        {item.comment}
      </p>
    </div>
  );
}

export default function Izohlar({ comments }: CommentProps) {
  const t = useTranslations("HomePage");
  const opinion = getOpinion(t);
  const [isGradient, setIsGradient] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsGradient(window.innerWidth > 550);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ console.log olib tashlandi

  return (
    <div className="md:py-[64px] py-[30px]">
      <div className="container mb-4">
        {opinion.map((item: commentOpinion, id: number) => (
          <div key={id} className="flex flex-col gap-[4px] md:mb-[32px]">
            {item.icons && (
              <Image
                src={item.icons}
                alt="Sharh Icons"           // ✅ dekorativ ikon
                width={124}
                height={32}
                className="max-sm:w-[95px] max-sm:h-[30px]"
              />
            )}
            {/* ✅ h1 → h2 — heading ierarxiyasi */}
            <h1 className="font-bold font-vk lg:text-5xl md:text-4xl text-3xl text-[#3D445E]">
              {item.subtitle}
            </h1>
            <p className="font-medium font-vk sm:text-[20px] text-[14px] text-[#012548CC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Marquee — CommentCard alohida komponent */}
      <div className="overflow-visible max-w-[1600px] m-auto w-full mb-[24px]">
        <Marquee direction="right" speed={20} gradient={isGradient} pauseOnHover>
          {comments.map((item, id) => (
            <Link key={id} href={item.short_url} target="_blank" rel="noopener noreferrer"
              aria-label={`${item.author_name} sharhi`} // ✅ link accessibility
            >
              <CommentCard item={item} t={t} />
            </Link>
          ))}
        </Marquee>
      </div>

      <div className="overflow-visible max-w-[1600px] m-auto w-full mb-[24px]">
        <Marquee direction="left" speed={20} gradient={isGradient} pauseOnHover>
          {comments.slice().reverse().map((item, id) => (
            <Link key={id} href={item.short_url} target="_blank" rel="noopener noreferrer"
              aria-label={`${item.author_name} sharhi`}
            >
              <CommentCard item={item} t={t} />
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
}