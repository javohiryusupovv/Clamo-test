
import MainService from "@/Components/MainServes";
import Partnyor from "@/Components/Partnyor/Partnyor";
import Izohlar from "@/Components/comments";
import Hero from "@/Components/hero";
import InstallPage from "@/Components/installPage";
import MedicalLegal from "@/Components/medicalLegal";
import NewsPage from "@/Components/news";
import QuestionsPage from "@/Components/questionsPage";

export default function Main() {
  return (
    <div>
        <Hero/>
        <MedicalLegal/>
        <MainService/>
        <Izohlar/>
        <NewsPage/>
        <div className="bg-[#f6f9fc] py-[60px]">
          <InstallPage/>
          <Partnyor/>
        </div>
        <QuestionsPage/>
    </div>
  )
}
