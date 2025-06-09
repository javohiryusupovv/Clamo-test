import Hero from "@/Components/Hero";
import MedicalLegal from "@/Components/MedicalLegal";
import MainService from "@/Components/MainServes";
import Comments from "@/Components/Comments";
import NewsPage from "@/Components/News";
import InstallPage from "@/Components/InstallPage";
import QuestionsPage from "@/Components/QuestionsPage";
import Partnyor from "@/Components/Partnyor/Partnyor";

export default function Main() {
  return (
    <div>
        <Hero/>
        <MedicalLegal/>
        <MainService/>
        <Comments/>
        <NewsPage/>
        <InstallPage/>
        <Partnyor/>
        <QuestionsPage/>
    </div>
  )
}
