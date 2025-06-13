import Image from "next/image";

import location from "../../../assets/icons/location.png";
import phone from "../../../assets/icons/phone.png";
import email from "../../../assets/icons/mail.png";

import submiticons from "../../../assets/icons/submiticons.png";
import uzbflag from "../../../assets/flag/flagicons.png";

export default function Contact() {
  return (
    <div className="px-4 py-8">
      <div className="container relative left-0 z-[40] flex flex-col lg:flex-row items-center justify-between w-full bg-[#0653C9] rounded-[36px]">
        
        {/* Contact Info */}
        <div className="w-full lg:w-[450px] pl-6 pr-6 py-10 lg:pl-14 lg:py-14">
          <h6 className="text-[28px] lg:text-[32px] font-semibold text-white mb-2">
            Bog‘lanish uchun
          </h6>
          <p className="text-[14px] lg:text-[16px] font-normal text-white text-opacity-[60%] mb-6 lg:mb-9">
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
                <span className="text-[14px] font-normal text-opacity-[60%] text-white">
                  Ofisimizga tashrif buyuring
                </span>
                <p className="text-[16px] font-medium text-white line-clamp-1">
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
                <span className="text-[14px] font-normal text-opacity-[60%] text-white">
                  Telefon raqam
                </span>
                <p className="text-[16px] font-medium text-white line-clamp-1">
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
                <span className="text-[14px] font-normal text-opacity-[60%] text-white">
                  Elektron pochta manzili
                </span>
                <p className="text-[16px] font-medium text-white line-clamp-1">
                  infoclamo@gmail.com
                </p>
              </article>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="py-6 px-6 lg:px-8 mt-6 lg:mt-0 relative lg:absolute border border-gray-200 lg:right-16 w-full lg:w-[500px] h-auto lg:h-[576px] bg-white rounded-[36px]">
          <article className="mb-[20px] lg:mb-[26px]">
            <h5 className="text-[28px] lg:text-[32px] font-bold leading-[120%] text-[#3D445E] mb-3">
              Biz bilan aloqa
            </h5>
            <p className="text-[#838CAF] text-[14px] lg:text-[16px] font-normal leading-[130%]">
              Agar sizda biron bir savol bo&apos;lsa yoki ma&apos;lumotga muhtoj
              bo&apos;lsangiz, biz bilan bog&apos;laning.
            </p>
          </article>
          <form>
            {/* Name */}
            <article className="w-full mb-4 lg:mb-6">
              <label className="inline-flex mb-2 text-[14px] lg:text-[16px] font-medium leading-[120%] text-[#3D445E]">
                Ism-familiya
              </label>
              <input
                type="text"
                className="w-full bg-[#F7F7F8] px-3 h-10 rounded-lg text-[14px] font-normal outline-none border border-transparent transition-all duration-200 focus:border-[#1a60cd]"
                name="names"
                placeholder="Ismingizni kiriting"
              />
            </article>
            {/* Organization */}
            <article className="w-full mb-4 lg:mb-6">
              <label className="inline-flex mb-2 text-[14px] lg:text-[16px] font-medium leading-[120%] text-[#3D445E]">
                Tashkilot
              </label>
              <input
                name="tashkilot"
                type="text"
                className="w-full bg-[#F7F7F8] px-3 h-10 rounded-lg text-[14px] font-normal outline-none border border-transparent transition-all duration-200 focus:border-[#1a60cd]"
                placeholder="Tashkilotingiz nomini yozing"
              />
            </article>
            {/* Phone */}
            <article className="w-full mb-4 lg:mb-6">
              <label className="inline-flex mb-2 text-[14px] lg:text-[16px] font-medium leading-[120%] text-[#3D445E]">
                Telefon raqam
              </label>
              <div className="w-full bg-[#F7F7F8] flex gap-2 px-3 h-10 rounded-lg border border-transparent focus-within:border-[#1a60cd] transition-colors duration-200">
                <article className="flex items-center gap-1">
                  <Image src={uzbflag} className="w-9" alt="flag Icons" />
                  <span className="text-[#3D445E] text-[14px]">+998</span>
                </article>
                <input
                  type="text"
                  name="phoneNumber"
                  className="w-full outline-none bg-[#F7F7F8]"
                />
              </div>
            </article>
            <div className="flex justify-end">
              <button className="group flex items-center gap-1 text-[14px] font-medium text-white px-6 py-[10px] rounded-lg cursor-pointer hover:bg-[#0761e9] transition-all duration-200 bg-[#0653C9]">
                Jo&apos;natish{" "}
                <Image
                  className="transition-all duration-300 group-hover:rotate-[43deg]"
                  src={submiticons}
                  alt="Icons send"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
