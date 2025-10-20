"use client";

import "../../../../styles/linerMainserver.css";
import { commentOpinion } from "@/types/type";
import Marquee from "react-fast-marquee";
import { getOpinion } from "../../../../../constants/page";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CommentSharh } from "app.types";
import dayjs from "../../../../lib/day-setup";
import Link from "next/link";

interface CommentProps {
  comments: CommentSharh[];
}

export default function Izohlar({ comments }: CommentProps) {

  const t = useTranslations("HomePage");
  const opinion = getOpinion(t);
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

  return (
    <div className="md:py-[64px] py-[30px]">
      {/* Section Title */}
      <div className="container mb-4">
        {opinion.map((item: commentOpinion, id: number) => (
          <div key={id} className="flex flex-col gap-[4px] md:mb-[32px]">
            {item.icons && (
              <img
                src={item.icons}
                alt="Sharh Icons"
                width={124}
                height={32}
                className="max-sm:w-[95px] max-sm:h-[30px]"
              />
            )}
            <h1 className="font-bold font-vk lg:text-5xl md:text-4xl text-3xl text-[#3D445E]">
              {item.subtitle}
            </h1>
            <p className="font-medium font-vk sm:text-[20px] text-[14px] text-[#012548CC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* First Marquee (right direction) */}
      <div className="overflow-visible max-w-[1600px] m-auto w-full mb-[24px]">
        <div className="flex gap-4">
          <Marquee direction="right" speed={20} gradient={isGradient} pauseOnHover>
            {comments.map((item, id) => (
              <Link key={id} href={item.short_url} target="_blank">
                <div className="lg:max-w-[343px] max-w-[300px] mx-4 max-sm:mx-2 border border-[#E3E8E9] rounded-[16px] sm:p-[16px] p-[8px] bg-white">
                  <div className="flex items-center gap-2">
                    {/* Avatar */}
                    <div className="flex items-center w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px]">
                      <img
                          src={item?.company?.brand_logo?.original ?? '/icons/Avatar.svg'}
                        alt="avatar"
                        width={44}
                        height={44}
                        className="rounded-full w-full h-full object-cover border border-[#C6CFD733]"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold font-roboto text-[#022F5E] leading-[130%] sm:text-[16px] text-[12px] pb-[3px]">
                        {item.author_name}
                      </h2>
                    </div>
                  </div>

                  <hr className="my-[10px] text-[#F5F6F7]" />

                  {/* Rating + Date */}
                  <div className="flex items-center gap-1 sm:pb-[8px] pb-1">
                    <div className="flex gap-[2px]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <img
                          key={index}
                          src={index < item.rating ? "/icons/stars.svg" : "/icons/starsgray.svg"}
                          alt="star"
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      ))}
                    </div>
                    <p className="font-normal sm:text-[14px] font-roboto text-[12px] text-[#8E9BA8]">
                      {dayjs(item.created_at).fromNow()}
                    </p>
                  </div>

                  {/* Comment */}
                  <p className="font-normal sm:text-[14px] leading-[130%] text-[#121C25] font-roboto text-[12px] line-clamp-2">
                    {item.comment}
                  </p>
                </div>
              </Link>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Second Marquee (left direction) */}
      <div className="overflow-visible max-w-[1600px] m-auto w-full mb-[24px]">
        <div className="flex gap-4">
          <Marquee direction="left" speed={20} gradient={isGradient} pauseOnHover>
            {comments
              .slice()
              .reverse()
              .map((item, id) => (
                <Link key={id} href={item.short_url} target="_blank">
                  <div className="lg:max-w-[343px] max-w-[300px] mx-4 max-sm:mx-2 border border-[#E3E8E9] rounded-[16px] sm:p-[16px] p-[8px] bg-white">
                    <div className="flex items-center gap-2">
                      {/* Avatar */}
                      <div className="flex items-center w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px]">
                          <img
                              src={item?.company?.brand_logo?.original ?? '/icons/Avatar.svg'}
                              alt="Avatar"
                              width={44}
                              height={44}
                              className="rounded-full w-full h-full object-cover border border-[#C6CFD733]"
                          />

                      </div>
                      <div>
                        <h2 className="font-semibold font-roboto text-[#022F5E] leading-[130%] sm:text-[16px] text-[12px] pb-[3px]">
                          {item.author_name}
                        </h2>
                      </div>
                    </div>

                    <hr className="my-[10px] text-[#F5F6F7]" />

                    {/* Rating + Date */}
                    <div className="flex items-center gap-1 sm:pb-[8px] pb-1">
                      <div className="flex gap-[2px]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <img
                            key={index}
                            src={index < item.rating ? "/icons/stars.svg" : "/icons/starsgray.svg"}
                            alt="star"
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                        ))}
                      </div>
                      <p className="font-normal sm:text-[14px] font-roboto text-[12px] text-[#8E9BA8]">
                        {dayjs(item.created_at).fromNow()}
                      </p>
                    </div>

                    {/* Comment */}
                    <p className="font-normal sm:text-[14px] leading-[130%] text-[#121C25] font-roboto text-[12px] line-clamp-2">
                      {item.comment}
                    </p>
                  </div>
                </Link>
              ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
