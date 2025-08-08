import { getFaqs } from "@/lib/getFaqs";
import Firstpage from "./_components/firstpage"
import Secondpage from "./_components/secondpage"
import QuestionsPage from "@/app/[locale]/(root)/components/QuestionsPage";
import ReyesterClient from "../licensing/_components/ReyesterClinet";
import { getReyesterTypes, getReyestersFromAPI } from "@/lib/getLicense";
import { getLocalizedValue } from "@/lib/getLocalization";

export async function generateMetadata({ params }: { params: Promise<{locale: string }>}) {
  const {locale} = await params
  const content = {
    title_uz: "CLAMO bilan akkreditatsiya — zamonaviy yondashuv",
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
  const { results: firstPageData, count } = await getReyestersFromAPI(1);
  const types = await getReyesterTypes();
  return (
    <div className="overflow-hidden">
      <Firstpage />
      <Secondpage />
      <section className="container mx-auto px-4 lg:py-[80px]">
        <ReyesterClient initialData={firstPageData} initialCount={count} types={types} />
      </section>
      <QuestionsPage faqData={faqData} />
    </div>
  )
}
