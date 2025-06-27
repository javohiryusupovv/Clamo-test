"use client";
import location from "../../../../../assets/icons/location.png";
import phone from "../../../../../assets/icons/phone.png";
import email from "../../../../../assets/icons/mail.png";
import submiticons from "../../../../../assets/icons/submiticons.png";
import uzbflag from "../../../../../../public/flag/flagicons.png";
import { useTranslations } from "next-intl";
import { LoaderCircle } from 'lucide-react';


import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getFormSchema } from "@/schemas/formSchema";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const t = useTranslations("ContactPage")
  const zod = useTranslations("ZodForm");
  const formSchema = getFormSchema(zod);
  const [isLoading, setIsLoading] = useState(false);

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleSubmitted = async (data: FormData) => {
    setIsLoading(true);
    const payload = {
      full_name: data.names,
      industry: data.tashkilot,
      phone_number: `+998${data.phoneNumber}`,
    };

    console.log("Sending payload:", payload);

    const submitPromise = fetch(`${API_URL}/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      const responseText = await res.text();

      if (!res.ok) {
        try {
          const errorData = JSON.parse(responseText); // JSON bo‘lsa pars qilish
          console.error("API Error Response:", errorData);
          throw new Error(
            errorData.message || "Serverda ichki xatolik yuz berdi"
          );
        } catch {
          console.error("Non-JSON Error Response:", responseText);
          throw new Error("Serverdan noto‘g‘ri javob keldi");
        }
      }
      return JSON.parse(responseText);
    });

    toast
      .promise(submitPromise, {
        pending: "Jo'natilmoqda ...",
        success: "Ma'lumotlar muvaffaqiyatli jo'natildi",
      })
      .then(() => {
        reset();
      })
      .catch((error) => {
        console.error("Submission error:", error);
      })
      .finally(() => {
        setIsLoading(false)
      });
  };

  return (
    <div className="pb-8">
      <div className="container relative left-0 z-[40] max-lg:p-4 flex flex-col  md:flex-row items-center justify-between w-full bg-[#0653C9] rounded-[36px]">
        {/* Contact Info */}
        <div className="w-full lg:w-[450px] pl-6 pr-6 py-10 lg:pl-14 lg:py-14">
          <h6 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-white mb-2">
            {t("contactTitle")}
          </h6>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-white text-opacity-[60%] mb-6 lg:mb-9">
            {t("contactDescription")}
          </p>

          <div className="flex flex-col gap-3">
            {/* Location */}
            <Link href={"https://yandex.uz/maps/10335/tashkent/?ll=69.303946%2C41.318330&mode=whatshere&whatshere%5Bpoint%5D=69.303883%2C41.318303&whatshere%5Bzoom%5D=17&z=16"} target="_blank">
              <div className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer">
                <article className="bg-white p-3 inline-flex justify-center items-center rounded-lg">
                  <Image className="w-5 h-4" src={location} alt="Location" />
                </article>
                <article>
                  <span className="text-[13px] sm:text-[14px] font-normal text-opacity-[60%] text-white">
                    {t("addressLabel")}
                  </span>
                  <p className="text-[14px] sm:text-[16px] font-medium text-white line-clamp-1">
                    улица Мирзакалон Исмоилий, дом 2А, Ташкент
                  </p>
                </article>
              </div>
            </Link>

            {/* Phone */}
            <a href="tel:+998712007007" target="_blank" className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer">
              <article className="bg-white p-3 inline-flex items-center justify-center rounded-lg">
                <Image className="w-5 h-5" src={phone} alt="Phone" />
              </article>
              <article>
                <span className="text-[13px] sm:text-[14px] font-normal text-opacity-[60%] text-white">
                  {t("phonee")}
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium text-white line-clamp-1">
                  +998 (71) 200 70 07
                </p>
              </article>
            </a>
            {/* Email */}
            <a href="mailto:clamosocial@gmail.com" target="_blank" rel="noopener noreferrer" className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer">
              <article className="bg-white p-3 inline-flex rounded-lg">
                <Image className="w-5 h-4" src={email} alt="Email" />
              </article>
              <article>
                <span className="text-[13px] sm:text-[14px] font-normal text-opacity-[60%] text-white">
                  {t("emailLabel")}
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium text-white line-clamp-1">
                  infoclamo@gmail.com
                </p>
              </article>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="py-6 px-4 sm:px-8  lg:mt-0 border border-gray-200 w-full sm:w-[500px] lg:absolute lg:right-16 h-auto sm:h-[576px] bg-white rounded-[36px]">
          <article className="mb-[26px]">
            <h5 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-[120%] text-[#3D445E] mb-3">
              {t("formTitle")}
            </h5>
            <p className="text-[#838CAF] text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[130%]">
              {t("formSubtitle")}
            </p>
          </article>

          <form onSubmit={handleSubmit(handleSubmitted)} noValidate>
            {/* Full Name */}
            <article className="w-full mb-6">
              <label
                htmlFor="names"
                className="inline-flex mb-2 text-[14px] sm:text-[16px] font-medium text-[#3D445E]"
              >
                {t("fullName")}
              </label>
              <input
                id="names"
                {...register("names")}
                type="text"
                className="w-full bg-[#F7F7F8] px-3 h-10 rounded-lg text-[14px] outline-none border border-transparent focus:border-[#1a60cd]"
                placeholder={t("enterFullName")}
              />
              {errors.names && (
                <p className="text-red-500 text-sm">{errors.names.message}</p>
              )}
            </article>

            {/* Organization */}
            <article className="w-full mb-6">
              <label
                htmlFor="tashkilot"
                className="inline-flex mb-2 text-[14px] sm:text-[16px] font-medium text-[#3D445E]"
              >
                {t("organization")}
              </label>
              <input
                id="tashkilot"
                {...register("tashkilot")}
                type="text"
                className="w-full bg-[#F7F7F8] px-3 h-10 rounded-lg text-[14px] outline-none border border-transparent focus:border-[#1a60cd]"
                placeholder={t("enterOrganization")}
              />
              {errors.tashkilot && (
                <p className="text-red-500 text-sm">
                  {errors.tashkilot.message}
                </p>
              )}
            </article>

            {/* Phone Number */}
            <article className="w-full mb-6">
              <label
                htmlFor="phoneNumber"
                className="inline-flex mb-2 text-[14px] sm:text-[16px] font-medium text-[#3D445E]"
              >
                {t("phonee")}
              </label>
              <div className="w-full bg-[#F7F7F8] flex gap-2 px-3 h-10 rounded-lg border border-transparent focus-within:border-[#1a60cd]">
                <article className="flex items-center gap-1">
                  <Image
                    src={uzbflag}
                    className="w-6 sm:w-9"
                    alt="Flag Icons"
                  />
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
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </article>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className={`group flex items-center gap-1 text-[14px] font-medium text-white px-6 py-[10px] rounded-lg bg-[#0653C9] hover:bg-[#0761e9] transition-all duration-300 ${isLoading ? "opacity-60 cursor-not-allowed" : ""
                  }`} disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <LoaderCircle className="w-4 h-4 animate-spin" />
                    Jo&apos;natilmoqda...
                  </>
                ) : (
                  <>
                    {t("send")}
                    <Image
                      className="transition-all duration-300 group-hover:rotate-[43deg]"
                      src={submiticons}
                      alt="Send Icon"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
