import WhiteDown from "@/assets/icons/whiteDown.png";
import Image from "next/image";

export default function LearnMore() {
  return (
    <button className="w-[185px] h-[40px] ml-6 flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%]">
      Batafsil tanishish <Image src={WhiteDown} alt="down strelka" />
    </button>
  );
}
