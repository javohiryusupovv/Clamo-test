import Image from "next/image";
import Phone from "../assets/icons/phone.png";
import Flag from "../assets/icons/uzbekistan.png";
import LogoClamo from "../assets/icons/LogoClamo.svg";
import Down from "../assets/icons/down.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="flex items-center justify-between py-10">
        <Link href="/">
          <ul>
            <Image
              src={LogoClamo}
              alt="Phone icons"
              width={55}
              height={55}
              className="w-[155.71px] h-[40px]"
            />
          </ul>
        </Link>

        <ul className="flex items-center gap-10">
          <article className="flex items-center gap-[9px]">
            <Link href="/about">
              <li className="text-sm font-medium text-[#3D445E]">
                Biz haqimizda
              </li>
            </Link>
            <div className="w-5 h-5 flex items-center">
              <Image
                src={Down}
                alt="Down strelka"
                width={11}
                height={11}
                className="mt-[6px] "
              />
            </div>
          </article>
          <li className="text-sm font-medium text-[#3D445E]">Litsenziyalash</li>
          <li className="text-sm font-medium text-[#3D445E]">
            Akkreditsiyalash
          </li>
          <li className="text-sm font-medium text-[#3D445E]">
            Bog&apos;lanish
          </li>
        </ul>
        <ul className="flex items-center gap-8">
          <article className="flex items-center gap-3">
            <Image
              src={Flag}
              alt="Phone icons"
              width={24}
              height={24}
              className="object-contain"
            />
            <article className="flex items-center gap-[9px]">
              <p className="text-sm uppercase text-[#3D445E] font-medium">uz</p>
              <div className="w-5 h-5 flex items-center">
                <Image src={Down} alt="Down strelka" width={11} height={11} />
              </div>
            </article>
          </article>
          <article className="flex items-center gap-[6px]">
            <Image src={Phone} alt="Phone icons" width={17} height={17} />
            <p className="text-base font-bold text-[#3D445E]">1369</p>
          </article>
        </ul>
      </nav>
    </div>
  );
}
