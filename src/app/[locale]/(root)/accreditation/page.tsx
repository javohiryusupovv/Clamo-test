import { getFaqs } from "@/lib/getFaqs";
import Firstpage from "./_components/firstpage"
import Secondpage from "./_components/secondpage"
import QuestionsPage from "@/app/[locale]/(root)/components/QuestionsPage";
import ReyesterClient from "../license/_components/ReyesterClinet";
import { getReyesterTypes, getReyestersFromAPI } from "@/lib/getLicense";
export default async function page() {
  const faqData = await getFaqs()
  const reyesters = await getReyestersFromAPI();
  const types = await getReyesterTypes();
  return (
    <div>
      <Firstpage />
      <Secondpage />
      <section className="container mx-auto px-4 lg:py-[80px]">
        <ReyesterClient reyesters={reyesters} types={types} />
      </section>
      <QuestionsPage faqData={faqData} />
    </div>
  )
}
