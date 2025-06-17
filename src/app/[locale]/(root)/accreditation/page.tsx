import { getFaqs } from "@/lib/getFaqs";
import Firstpage from "./_components/firstpage"
import Secondpage from "./_components/secondpage"
import QuestionsPage from "@/app/[locale]/(root)/components/QuestionsPage";
export default async function page() {
    const faqData = await getFaqs()
  return (
    <div>
      <Firstpage/>
      <Secondpage/>
      <QuestionsPage faqData={faqData}/>
      </div>
  )
}
