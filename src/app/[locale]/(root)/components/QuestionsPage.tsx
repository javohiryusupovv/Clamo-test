import { FaAngleRight } from "react-icons/fa";
import Questions from "./questions/Questions";
import { useTranslations } from "next-intl";
import { FAQItem } from "../../../../../app.types";

export default function QuestionsPage({faqData}: {faqData: FAQItem[]}) {
  const t = useTranslations("HomePage");

  return (
    <div className="container md:py-16 py-8">
      <div className="flex items-center justify-between gap-1 md:pb-[28px] pb-[20px]">
        <h1 className="lg:text-[48px] font-vk md:text-[44px] text-[20px] font-bold text-[#3D445E]">
          {t("question_title")}
        </h1>
        <p className="sm:text-[16px] font-vela text-[13px] font-medium text-[#3D445E] cursor-pointer flex  items-center gap-1 hover:underline transition  group">
          {t("all_question")}{" "}
          <FaAngleRight className=" group-hover:translate-x-2 transition" />
        </p>
      </div>
      <Questions faqData={faqData} />
    </div>
  );
}
