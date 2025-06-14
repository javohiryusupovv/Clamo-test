import Image from "next/image";
import cirlceBG from "../../../assets/images/twoCircle.png";
import DevLogos from "../../../assets/logo/uicLogo.png";
import lnkdn from "../../../assets/logo/ln.svg";
import TibbiyotVazirlik from "../../../assets/logo/TibbiyotVazirlik.png";
import "./Footer.css";
import Link from "next/link";
import Contact from "../contact/Contact";

export default function FooterLayout() {
  return (
    <div className="pt-20 bg-[#F6F9FC]">
      <Contact />
      <div className="relative top-0 right-0 z-[10] w-full sm:h-[500px] h-[750px] bg-[#F6F9FC] overflow-hidden">
        <div className="container relative top-0 right-0 z-[50]">
          <div className="block sm:flex gap-20 absolute top-0 left-0 py-28 sm:py-20 sm:px-0 px-[30px]">
            <div>
              <div className="w-[400px] mb-[88px]">
                <article className="flex items-center gap-7 mb-5">
                  <Image src="/LogoClamo.svg" alt="Clamo Logo" />
                  <Image src={TibbiyotVazirlik} alt="Tibbiyot Vazirligi logo" />
                </article>
                <p className="text-[12px] sm:text-[16px] text-[#3D445E] sm:w-auto w-[350px]">Raqamli texnologiyalarni joriy etish orqali litsenziyalash va akkreditatsiya jarayonlarini soddalashtirish, Xalqaro standartlarni to&apos;liq integratsiya qilish</p>
              </div>
              <div>
                <p className="text-[#3D445E] text-[14px] mb-4 uppercase">
                  Ijtimoiy tarmoqlarimiz
                </p>
                <div className="flex items-center gap-4">
                  <article className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg">
                    <Image src={lnkdn} alt="Ijtimoiy tarmoq logo" />
                  </article>
                  <article className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg">
                    <Image src={lnkdn} alt="Ijtimoiy tarmoq logo" />
                  </article>
                  <article className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg">
                    <Image src={lnkdn} alt="Ijtimoiy tarmoq logo" />
                  </article>
                  <article className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg">
                    <Image src={lnkdn} alt="Ijtimoiy tarmoq logo" />
                  </article>
                </div>
              </div>
            </div>
            <div className="sm:pt-0 pt-[20px]">
              <p className="text-[#3D445E] text-[18px] font-bold leading-[140%] mb-[12px]">
                Bo&apos;limlar
              </p>
              <ul className="flex flex-col gap-3">
                <Link href="/about">
                  <li className="group flex items-center gap-1 hover:text-[#23B3FC] cursor-pointer transition-all duration-200 text-[#3D445E] text-[14px] font-medium">
                    <p className="opacity-0 group-hover:opacity-[1] group-hover:translate-x-0 -translate-x-4 transition-all duration-200 w-[9px] h-[9px] rounded-full bg-[#23B3FC]"></p>{" "}
                    <span className="-translate-x-3 group-hover:translate-x-1 transition-all duration-200">
                      Biz haqimizda
                    </span>
                  </li>
                </Link>
                <Link href="/regulatorydocuments">
                  <li className="group flex items-center gap-1 hover:text-[#23B3FC] cursor-pointer transition-all duration-200 text-[#3D445E] text-[14px] font-medium">
                    <p className="opacity-0 group-hover:opacity-[1] group-hover:translate-x-0 -translate-x-4 transition-all duration-200 w-[9px] h-[9px] rounded-full bg-[#23B3FC]"></p>{" "}
                    <span className="-translate-x-3 group-hover:translate-x-1 transition-all duration-200">
                      Normativ hujjatlar
                    </span>
                  </li>
                </Link>
                <Link href="/about">
                  <li className="group flex items-center gap-1 hover:text-[#23B3FC] cursor-pointer transition-all duration-200 text-[#3D445E] text-[14px] font-medium">
                    <p className="opacity-0 group-hover:opacity-[1] group-hover:translate-x-0 -translate-x-4 transition-all duration-200 w-[9px] h-[9px] rounded-full bg-[#23B3FC]"></p>{" "}
                    <span className="-translate-x-3 group-hover:translate-x-1 transition-all duration-200">
                      Markaz haqida
                    </span>
                  </li>
                </Link>
                <Link href="/license">
                  <li className="group flex items-center gap-1 hover:text-[#23B3FC] cursor-pointer transition-all duration-200 text-[#3D445E] text-[14px] font-medium">
                    <p className="opacity-0 group-hover:opacity-[1] group-hover:translate-x-0 -translate-x-4 transition-all duration-200 w-[9px] h-[9px] rounded-full bg-[#23B3FC]"></p>{" "}
                    <span className="-translate-x-3 group-hover:translate-x-1 transition-all duration-200">
                      Litsenziyalash
                    </span>
                  </li>
                </Link>
                <Link href="/accreditation">
                  <li className="group flex items-center gap-1 hover:text-[#23B3FC] cursor-pointer transition-all duration-200 text-[#3D445E] text-[14px] font-medium">
                    <p className="opacity-0 group-hover:opacity-[1] group-hover:translate-x-0 -translate-x-4 transition-all duration-200 w-[9px] h-[9px] rounded-full bg-[#23B3FC]"></p>{" "}
                    <span className="-translate-x-3 group-hover:translate-x-1 transition-all duration-200">
                      Akkreditsiyalash
                    </span>
                  </li>
                </Link>
                <li className="group flex items-center gap-1 hover:text-[#23B3FC] cursor-pointer transition-all duration-200 text-[#3D445E] text-[14px] font-medium">
                  <p className="opacity-0 group-hover:opacity-[1] group-hover:translate-x-0 -translate-x-4 transition-all duration-200 w-[9px] h-[9px] rounded-full bg-[#23B3FC]"></p>{" "}
                  <span className="-translate-x-3 group-hover:translate-x-1 transition-all duration-200">
                    Bog&apos;lanish
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-shadow hidden lg:block">
          <Image
            className="absolute bottom-1 w-[700px] right-0 xl:block hidden"
            src={cirlceBG}
            alt="bg-Cirlce"
          />
          <div className="container relative top-0 right-0">
            <Image
              className="absolute top-14 right-6 w-[400px]"
              src="/flag//groupFlag.png"
              alt="Flag Clamo"
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-[11] w-full py-5">
          <article className="container flex justify-between items-center">
            <p className="text-[#3D445E]/[60%] text-[7px] sm:text-[14px]">
              Copyright {new Date().getFullYear()} - “CLAMO” LLC
            </p>
            <article className="flex justify-between items-center gap-4">
              <span className="text-[#3D445E test-[7px]">Developed by</span>
              <Image src={DevLogos} alt="Logo Developed" />

            </article>
          </article>
        </div>
      </div>
    </div>
  );
}