import Image from "next/image";

import location from "../../../assets/icons/location.png"
import phone from "../../../assets/icons/phone.png"
import email from "../../../assets/icons/mail.png"
import share from "../../../assets/icons/share.png"


export default function Contact() {
  return (
    <div>
      <div className="container relative left-0 flex items-center justify-between w-full bg-[#0653C9] rounded-[36px]">
        <div className="w-[450px] pl-14 py-14">
          <h6 className="text-[32px] font-semibold text-white mb-2">Bog‘lanish uchun</h6>
          <p className="text-[16px] font-normal text-white text-opacity-[60%] mb-9">Siz tizimdan chiqishingiz mumkin bo'lgan quyidagi usullardan foydalangan holda biz bilan bog'laning</p>
          <div className="flex flex-col gap-3">
            <div className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer">
              <article className="bg-white p-3 inline-flex justify-center items-center rounded-lg">
                <Image className="w-5 h-4" src={location} alt="Location" />
              </article>
              <article>
                <span className="text-[14px] font-normal text-opacity-[60%] text-white">Ofisimizga tashrif buyuring</span>
                <p className="text-[16px] font-medium text-white line-clamp-1">улица Мирзакалон Исмоилий, дом 2А, Ташкент</p>
              </article>
            </div>
            <div className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer">
              <article className="bg-white p-3 inline-flex items-center justify-center rounded-lg">
                <Image className="w-5 h-5" src={phone} alt="Location" />
              </article>
              <article>
                <span className="text-[14px] font-normal text-opacity-[60%] text-white">Telefon raqam</span>
                <p className="text-[16px] font-medium text-white line-clamp-1">+998 (71) 200 70 07</p>
              </article>
            </div>
            <div className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer">
              <article className="bg-white p-3 inline-flex rounded-lg">
                <Image className="w-5 h-4" src={email} alt="Location" />
              </article>
              <article>
                <span className="text-[14px] font-normal text-opacity-[60%] text-white">Elektron pochta manzili</span>
                <p className="text-[16px] font-medium text-white line-clamp-1">infoclamo@gmail.com</p>
              </article>
            </div>
          </div>
        </div>
        <div className="form absolute right-16 w-[500px] h-[576px] bg-white rounded-[36px]"></div>
      </div>
    </div>
  )
}
