import QuestionsPage from "@/app/[locale]/(root)/components/QuestionsPage";
import { FAQItem } from "../../../../../../app.types";

export default function  FAQSection({faqData}: {faqData: FAQItem[]}) {

  return (
      <div className="container mx-auto">
        <QuestionsPage faqData={faqData}/>
      </div>

  );
}
