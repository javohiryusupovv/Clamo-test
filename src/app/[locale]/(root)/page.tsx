import Izohlar from "@/app/[locale]/(root)/components/Comments";
import Hero from "@/app/[locale]/(root)/components/Hero";
import InstallPage from "@/app/[locale]/(root)/components/InstallPage";
import MainService from "@/app/[locale]/(root)/components/MainServes";
import MedicalLegal from "@/app/[locale]/(root)/components/MedicalLegal";
import NewsPage from "@/app/[locale]/(root)/components/News";
import QuestionsPage from "@/app/[locale]/(root)/components/QuestionsPage";
import Partnyor from "./components/partnyor/Partnyor";
import ServicesSection from "./about/_components/AboutService";
import { getData } from "@/lib/getData";
import { getNews } from "@/lib/getNews";
import { getPartners } from "@/lib/getPartners";
import { getFaqs } from "@/lib/getFaqs";
import { getServicec } from "@/lib/getServicec";

export default async function Main() {
  const data = await getData();
  const datas = await getNews();
  const part = await getPartners();
  const faqData = await getFaqs();
  const service = await getServicec();

  return (
    <div className="overflow-hidden">
      <Hero numbers={data[0]} />
      <MedicalLegal />
      <div className="bg-[#F6F9FC]">
        <div className="max-lg:container">
          <ServicesSection servicec={service} />
        </div>
      </div>
      <MainService />
      <Izohlar />
      <NewsPage news={datas} />
      <div className="bg-[#f6f9fc] md:py-[60px] py-[25px]">
        <InstallPage />
        <Partnyor partners={part} />
      </div>
      <QuestionsPage faqData={faqData} />
    </div>
  );
}
