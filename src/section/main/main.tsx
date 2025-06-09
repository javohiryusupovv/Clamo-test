import Hero from "@/components/hero";
import MedicalLegal from "@/components/medicalLegal";
import MainService from "@/components/MainServes";
import Comments from "@/components/comments";
// import NewsPage from "@/components/news";
import InstallPage from "@/components/installPage";
import QuestionsPage from "@/components/questionsPage";

export default function Main() {
  return (
    <div>
        <Hero/>
        <MedicalLegal/>
        <MainService/>
        <Comments/>
        {/* <NewsPage/> */}
        <InstallPage/>
        <QuestionsPage/>
    </div>
  )
}
