import WhiteDown from "@/assets/icons/whiteDown.png";
import Image from "next/image";

export default function LearnMore() {
  return (
    <button className="group hover:bg-[#23B3FC]/[80%] transition-all duration-200 w-[185px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%] cursor-pointer">
      Batafsil tanishish <Image className=" group-hover:translate-x-1 transition-all duration-200" src={WhiteDown} alt="down strelka" />
    </button>
  );
}
