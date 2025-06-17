import Izohlar from "@/app/[locale]/(root)/components/Comments";
import Hero from "@/app/[locale]/(root)/components/Hero";
import InstallPage from "@/app/[locale]/(root)/components/InstallPage";
import MainService from "@/app/[locale]/(root)/components/MainServes";
import MedicalLegal from "@/app/[locale]/(root)/components/MedicalLegal";
import NewsPage from "@/app/[locale]/(root)/components/News";
import QuestionsPage from "@/app/[locale]/(root)/components/QuestionsPage";
import Partnyor from "./components/partnyor/Partnyor";
import { getData } from "@/lib/getData";
import { getNews } from "@/lib/getNews";
import { getPartners } from "@/lib/getPartners";
import { getFaqs } from "@/lib/getFaqs";


export default async function Main() {
  const data = await getData();
  const datas = await getNews();
  const part = await getPartners()
  const faqData = await getFaqs()

  return (
    <div className="overflow-hidden">
      <Hero numbers={data[0]} />
      <MedicalLegal />
      <MainService />
      <Izohlar />
      <NewsPage news={datas[2]} />
      <div className="bg-[#f6f9fc] py-[60px]">
        <InstallPage />
        {/* partniyor fayliga props junatdim hali to'liq emas */}
        <Partnyor partners={part} />
      </div>
      <QuestionsPage faqData={faqData} />
    </div>
  );
}
