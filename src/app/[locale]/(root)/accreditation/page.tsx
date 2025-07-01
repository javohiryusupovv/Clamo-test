import { getFaqs } from "@/lib/getFaqs";
import Firstpage from "./_components/firstpage"
import Secondpage from "./_components/secondpage"
import QuestionsPage from "@/app/[locale]/(root)/components/QuestionsPage";
import ReyesterClient from "../license/_components/ReyesterClinet";
import { getReyesterTypes, getReyestersFromAPI } from "@/lib/getLicense";
import { getLocalizedValue } from "@/lib/getLocalization";

interface Params {
  locale: string;
}
export async function generateMetadata({ params }: { params: Promise<{locale: string }>}) {
  const {locale} = await params
  const content = {
    title_uz: "CLAMO bilan akkreditsiyalash — zamonaviy yondashuv",
    description_uz: "Tashkilotingiz uchun zarur litsenziyani tez va ishonchli tarzda oling. Clamo sizning qonuniylikdagi ishonchli hamkoringiz.",

    title_ru: "Аккредитация с CLAMO — современный подход",
    description_ru: "Получите необходимую лицензию для вашей организации быстро и надежно. Clamo — ваш надежный партнер в вопросах легализации.",

    title_en: "Accreditation with CLAMO — A Modern Approach",
    description_en: "Obtain the required license for your organization quickly and reliably. Clamo is your trusted partner in legal compliance.",
  };

  return {
    title: getLocalizedValue(content, "title", locale),
    description: getLocalizedValue(content, "description", locale),
  };
}


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
