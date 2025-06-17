import Firstpage from "./_components/firstpage"
import Secondpage from "./_components/secondpage"
import QuestionsPage from "@/app/[locale]/(root)/components/QuestionsPage";
import { FaqItem } from "../../../../../app.types";
export default function page({faqData}: {faqData: FaqItem[]}) {
  return (
    <div>
      <Firstpage/>
      <Secondpage/>
      <QuestionsPage faqData={faqData}/>
      </div>
  )
}
