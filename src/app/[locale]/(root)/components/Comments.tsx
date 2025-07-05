"use client";

import "../../../../styles/linerMainserver.css";
import { commentOpinion } from "@/types/type";
import Marquee from "react-fast-marquee";
import { getOpinion } from "../../../../../constants/page";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CommentSharh } from "app.types";
import dayjs from "../../../../lib/day-setup"
interface CommentProps {
  comments: CommentSharh[]
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
      <div className="container mb-4">
        {opinion.map((item: commentOpinion, id: number) => (
          <div key={id} className="flex flex-col gap-[4px] md:mb-[32px]">
            <Image
              src={item.icons}
              alt="Sharh Icons"
              width={124}
              height={32}
              className="max-sm:w-[95px] max-sm:h-[30px]"
            />
            <h1 className="font-bold font-vk lg:text-5xl md:text-4xl text-3xl text-[#3D445E]">
              {item.subtitle}
            </h1>
            <p className="font-medium font-vk sm:text-[20px] text-[14px] text-[#012548CC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-visible  max-w-[1600px] m-auto w-full mb-[24px]">
        <div className="flex gap-4">
          <Marquee
            direction="right"
            speed={20}
            gradient={isGradient}
            pauseOnHover
          >
            {comments.map((item, id) => (
              <div
                key={id}
                className="lg:max-w-[343px] max-w-[300px] mx-4 max-sm:mx-2 border border-[#E3E8E9] rounded-[16px] sm:p-[16px] p-[8px] bg-white"
              >
                <div className="flex items-center gap-2">
                  {/* <div className="flex items-center w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px]">
                    <Image
                      src={item.user_image || ""}
                      alt="Person people"
                      width={44}
                      height={44}
                      className="rounded-full w-full h-full object-cover border border-[#C6CFD733]"
                    />
                  </div> */}
                  <div>
                    <h2 className="font-semibold font-roboto text-[#022F5E] leading-[130%] sm:text-[16px] text-[12px] pb-[3px]">
                      {item.author_name}
                    </h2>
                    {/* <p className="text-[12px] leading-[100%] font-normal font-roboto text-[#8E9BA8]">
                      {item.comment}
                    </p> */}
                  </div>
                </div>
                <hr className="my-[10px] text-[#F5F6F7]" />
                <div className="flex items-center gap-1 sm:pb-[8px] pb-1">
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Image
                        key={index}
                        src={
                          index < item.rating
                            ? "/icons/stars.svg"
                            : "/icons/starsgray.svg"
                        }
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
                <p className="font-normal sm:text-[14px] leading-[130%] text-[#121C25] font-roboto text-[12px] line-clamp-2">
                  {item.comment}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="overflow-visible max-w-[1600px] m-auto w-full mb-[24px]">
        <div className="flex gap-4">
          <Marquee
            direction="left"
            speed={20}
            gradient={isGradient}
            pauseOnHover
          >
            {comments
              .slice()
              .reverse()
              .map((item, id) => (
                <div
                key={id}
                className="lg:max-w-[343px] max-w-[300px] mx-4 max-sm:mx-2 border border-[#E3E8E9] rounded-[16px] sm:p-[16px] p-[8px] bg-white"
              >
                <div className="flex items-center gap-2">
                  {/* <div className="flex items-center w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px]">
                    <Image
                      src={item.user_image || ""}
                      alt="Person people"
                      width={44}
                      height={44}
                      className="rounded-full w-full h-full object-cover border border-[#C6CFD733]"
                    />
                  </div> */}
                  <div>
                    <h2 className="font-semibold font-roboto text-[#022F5E] leading-[130%] sm:text-[16px] text-[12px] pb-[3px]">
                      {item.author_name}
                    </h2>
                    {/* <p className="text-[12px] leading-[100%] font-normal font-roboto text-[#8E9BA8]">
                      {item.comment}
                    </p> */}
                  </div>
                </div>
                <hr className="my-[10px] text-[#F5F6F7]" />
                <div className="flex items-center gap-1 sm:pb-[8px] pb-1">
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Image
                        key={index}
                        src={
                          index < item.rating
                            ? "/icons/stars.svg"
                            : "/icons/starsgray.svg"
                        }
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
                <p className="font-normal sm:text-[14px] leading-[130%] text-[#121C25] font-roboto text-[12px] line-clamp-2">
                  {item.comment}
                </p>
              </div>
              ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
