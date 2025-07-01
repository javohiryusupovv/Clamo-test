import { FaAngleRight } from "react-icons/fa6";

export default function Button({ title }: { title: string }) {
  return (
    <div>
      <button className="group font-inter lg:w-[183px] w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[80%] bg-[#23B3FC] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">
        {title}
        <FaAngleRight className="group-hover:translate-x-1 transition-all duration-200" />
      </button>
    </div>
  );
  }