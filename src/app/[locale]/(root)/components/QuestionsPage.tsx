import { FaAngleRight } from "react-icons/fa";
import Questions from "./questions/Questions";
import { useLocale, useTranslations } from "next-intl";
import { FAQItem } from "../../../../../app.types";
import Link from "next/link";

export default function QuestionsPage({ faqData }: { faqData: FAQItem[] }) {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <div className="container md:py-10 py-5">
      <div className="flex items-center justify-between max-sm:flex-col gap-1 md:pb-[28px] pb-[20px]">
        <h1 className="lg:text-[48px] md:text-4xl text-3xl font-vk leading-[100%] max-sm:text-center font-bold text-[#3D445E]">
          {t("question_title")}
        </h1>
        <Link href={`/${locale}/allquestion`}>
          <p className="sm:text-[16px] font-vela text-[13px] font-medium text-[#3D445E] cursor-pointer flex  items-center gap-1 hover:underline transition  group">
            {t("all_question")}{" "}
            <FaAngleRight className=" group-hover:translate-x-2 transition" />
          </p>
        </Link>
      </div>
      <Questions faqData={faqData} />
    </div>
  );
}
