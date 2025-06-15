"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import location from "../../../../../assets/icons/location.png";
import phone from "../../../../../assets/icons/phone.png";
import email from "../../../../../assets/icons/mail.png";
import submiticons from "../../../../../assets/icons/submiticons.png";
import uzbflag from "../../../../../../public/flag/flagicons.png";
import formSchema from "@/schemas/formSchema";

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmitted = (data: FormData) => {
    console.log("Form ma'lumotlari:", data);
    alert("Form muvaffaqiyatli to‘ldirildi!");
    reset();
  };

  return (
    <div className="px-4 py-8">
      <div className="container relative z-[40] flex flex-col lg:flex-row items-center justify-between w-full bg-[#0653C9] rounded-[36px]">
        
        {/* Contact Info */}
        <div className="w-full lg:w-[450px] pl-4 pr-4 py-8 sm:pl-6 sm:pr-6 sm:py-10 lg:pl-14 lg:py-14">
          <h6 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-white mb-2">
            Bog‘lanish uchun
          </h6>
          <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-normal text-white text-opacity-[60%] mb-6 lg:mb-9">
            Siz tizimdan chiqishingiz mumkin bo&apos;lgan quyidagi usullardan
            foydalangan holda biz bilan bog&apos;laning
          </p>
          <div className="flex flex-col gap-3">
            {/* Location */}
            <div className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer">
              <article className="bg-white p-3 inline-flex justify-center items-center rounded-lg">
                <Image className="w-5 h-4" src={location} alt="Location" />
              </article>
              <article>
                <span className="text-[12px] sm:text-[14px] font-normal text-opacity-[60%] text-white">
                  Ofisimizga tashrif buyuring
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium text-white line-clamp-1">
                  улица Мирзакалон Исмоилий, дом 2А, Ташкент
                </p>
              </article>
            </div>

            {/* Phone */}
            <div className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer">
              <article className="bg-white p-3 inline-flex items-center justify-center rounded-lg">
                <Image className="w-5 h-5" src={phone} alt="Phone" />
              </article>
              <article>
                <span className="text-[12px] sm:text-[14px] font-normal text-opacity-[60%] text-white">
                  Telefon raqam
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium text-white line-clamp-1">
                  +998 (71) 200 70 07
                </p>
              </article>
            </div>

            {/* Email */}
            <div className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer">
              <article className="bg-white p-3 inline-flex rounded-lg">
                <Image className="w-5 h-4" src={email} alt="Email" />
              </article>
              <article>
                <span className="text-[12px] sm:text-[14px] font-normal text-opacity-[60%] text-white">
                  Elektron pochta manzili
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium text-white line-clamp-1">
                  infoclamo@gmail.com
                </p>
              </article>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="py-6 px-4 sm:px-6 md:px-8 w-full lg:w-[500px] lg:h-[576px] lg:absolute lg:right-16 bg-white rounded-[36px] border border-gray-200 mt-6 lg:mt-0">
          <article className="mb-6 lg:mb-[26px]">
            <h5 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-[120%] text-[#3D445E] mb-3">
              Biz bilan aloqa
            </h5>
            <p className="text-[#838CAF] text-[14px] sm:text-[16px] font-normal leading-[130%]">
              Agar sizda biron bir savol bo&apos;lsa yoki ma&apos;lumotga muhtoj
              bo&apos;lsangiz, biz bilan bog&apos;laning.
            </p>
          </article>

          <form onSubmit={handleSubmit(handleSubmitted)}>
            {/* Name */}
            <article className="w-full mb-4 md:mb-6">
              <label
                htmlFor="names"
                className="inline-flex mb-2 text-[14px] sm:text-[16px] font-medium text-[#3D445E]"
              >
                Ism-familiya
              </label>
              <input
                id="names"
                {...register("names")}
                type="text"
                className="w-full bg-[#F7F7F8] px-3 h-10 rounded-lg text-[14px] outline-none border border-transparent focus:border-[#1a60cd]"
                placeholder="Ismingizni kiriting"
              />
              {errors.names && (
                <p className="text-red-500 text-sm">{errors.names.message}</p>
              )}
            </article>

            {/* Organization */}
            <article className="w-full mb-4 md:mb-6">
              <label
                htmlFor="tashkilot"
                className="inline-flex mb-2 text-[14px] sm:text-[16px] font-medium text-[#3D445E]"
              >
                Tashkilot
              </label>
              <input
                id="tashkilot"
                {...register("tashkilot")}
                type="text"
                className="w-full bg-[#F7F7F8] px-3 h-10 rounded-lg text-[14px] sm:text-[16px] outline-none border border-transparent focus:border-[#1a60cd]"
                placeholder="Tashkilotingiz nomini yozing"
              />
              {errors.tashkilot && (
                <p className="text-red-500 text-sm">{errors.tashkilot.message}</p>
              )}
            </article>

            {/* Phone */}
            <article className="w-full mb-4 md:mb-6">
              <label
                htmlFor="phoneNumber"
                className="inline-flex mb-2 text-[14px] sm:text-[16px] font-medium text-[#3D445E]"
              >
                Telefon raqam
              </label>
              <div className="w-full bg-[#F7F7F8] flex flex-col sm:flex-row gap-2 px-3 py-2 sm:py-0 sm:h-10 rounded-lg border border-transparent focus-within:border-[#1a60cd]">
                <article className="flex items-center gap-1">
                  <Image src={uzbflag} className="w-9" alt="Flag Icons" />
                  <span className="text-[#3D445E] text-[14px]">+998</span>
                </article>
                <input
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  type="text"
                  maxLength={12}
                  onInput={(e) => {
                    const value = e.currentTarget.value
                      .replace(/\D/g, "")
                      .slice(0, 9);
                    let formatted = "";
                    if (value.length > 0) formatted += value.slice(0, 2);
                    if (value.length > 2) formatted += " " + value.slice(2, 5);
                    if (value.length > 5) formatted += " " + value.slice(5, 7);
                    if (value.length > 7) formatted += " " + value.slice(7, 9);
                    e.currentTarget.value = formatted;
                  }}
                  onBlur={(e) => {
                    const value = e.currentTarget.value.replace(/\D/g, "");
                    if (value.length !== 9) {
                      e.currentTarget.setCustomValidity(
                        "Telefon raqami aniq 9 ta raqam bo‘lishi kerak"
                      );
                    } else {
                      e.currentTarget.setCustomValidity("");
                    }
                  }}
                  className="w-full outline-none bg-[#F7F7F8]"
                  placeholder="99 123 45 67"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
              )}
            </article>

            <div className="flex justify-center lg:justify-end">
              <button
                type="submit"
                className="group w-full sm:w-auto flex justify-center items-center gap-1 text-[14px] font-medium text-white px-6 py-[10px] rounded-lg bg-[#0653C9] hover:bg-[#0761e9]"
              >
                Jo‘natish
                <Image
                  className="transition-all duration-300 group-hover:rotate-[43deg]"
                  src={submiticons}
                  alt="Send Icon"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
