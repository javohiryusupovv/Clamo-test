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
        {/* <MainService/> */}
        <Izohlar/>
        <NewsPage/>
        <InstallPage/>
        <QuestionsPage/>
    </div>
  )
}
