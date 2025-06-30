"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SochealMedia() {
    const t = useTranslations("Soceal-Media")

  return (
    <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-3 items-center justify-center bg-[#F6F9FC] md:mb-10 mb-7 py-6 max-md:mt-[405px] max-sm:mt-[395px] rounded-2xl">
      <Link href={"https://t.me/CLAMO_uz"} aria-label="website" target="_blank">
        <div className="flex items-center md:justify-center md:gap-5 ml-5 gap-2 group hover:cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DFE9F7] transition duration-200 group-hover:bg-blue-700 cursor-pointer">
            <svg
              className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
              viewBox="0 0 496 512"
            >
              <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
            </svg>
          </div>

          <div className="flex flex-col -space-y-1">
            <h2 className="text-sm font-vk">{t("telegram_alo")}</h2>
            <p className="font-medium font-vk">t.me/CLAMO_uz</p>
          </div>
        </div>
      </Link>

      <Link href={"https://instagram.com/clamo.uz"} aria-label="Clamo Instagram" target="_blank">
        <div className="flex items-center md:justify-center md:gap-5 ml-5 gap-2 group hover:cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DFE9F7] transition duration-200 group-hover:bg-blue-700 cursor-pointer">
            <svg
              className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>

          <div className="flex flex-col -space-y-1">
            <h2 className="text-sm font-vk">{t("instagram")}</h2>
            <p className="font-medium font-vk">@clamo.uz</p>
          </div>
        </div>
      </Link>

      <Link
        href={
          "https://www.facebook.com/people/CLAMO-Rasmiy/61574003283120/?mibextid=wwXIfr&rdid=jD2A4C8aUmaFwdKS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15rQ6GTeNE%2F%3Fmibextid%3DwwXIfr"
        }
        aria-label="Clamo Facebook"
        target="_blank"
      >
        <div className="flex items-center md:justify-center md:gap-5 ml-5 gap-2 group hover:cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DFE9F7] transition duration-200 group-hover:bg-blue-700 cursor-pointer">
            <svg
              className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
              viewBox="0 0 320 512"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </div>

          <div className="flex flex-col -space-y-1">
            <h2 className="text-sm">{t("facebook")}</h2>
            <p className="font-medium">@CLAMORasmiy</p>
          </div>
        </div>
      </Link>
      <Link
        href={
          "https://www.linkedin.com/in/clamo-social-3a1454364/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        }
        aria-label="Clamo LinkedIn"
        target="_blank"
      >
        <div className="flex items-center md:justify-center md:gap-5 ml-5 gap-2 group hover:cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DFE9F7] transition duration-200 group-hover:bg-blue-700 cursor-pointer">
            <svg
              className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </div>

          <div className="flex flex-col -space-y-1">
            <h2 className="text-sm font-vk">{t("linkiden_ai")}</h2>
            <p className="font-medium font-vk">@clamo.uz</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
