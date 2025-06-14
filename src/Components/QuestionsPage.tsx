
import { FaAngleRight } from "react-icons/fa";
import Questions from "../app/accreditation/_components/questions";

export default function QuestionsPage() {


  return (
    <div className="container md:py-16 py-8">
      <div className="flex items-center justify-between gap-1 md:pb-[28px] pb-[20px]">
        <h1 className="lg:text-[48px] md:text-[44px] text-[20px] font-bold text-[#3D445E]">
          Tez-tez beriladigan savollar
        </h1>
        <p className="sm:text-[16px] text-[13px] font-medium text-[#3D445E] cursor-pointer flex  items-center gap-1 hover:underline transition  group">
          Barcha savollar{" "}
          <FaAngleRight className=" group-hover:translate-x-2 transition" />
        </p>
      </div>
      <Questions/>
    </div>
  );
}
