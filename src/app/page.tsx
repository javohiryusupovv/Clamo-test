import Izohlar from "@/Components/Comments";
import Hero from "@/Components/Hero";
import InstallPage from "@/Components/InstallPage";
import MainService from "@/Components/MainServes";
import MedicalLegal from "@/Components/MedicalLegal";
import NewsPage from "@/Components/News";
import Partnyor from "@/Components/partnyor/Partnyor";
import QuestionsPage from "@/Components/QuestionsPage";



export default function Main() {
  return (
    <>
     <div className="overflow-hidden">
           <Hero />
           <MedicalLegal />
           <MainService />
           <Izohlar />
           <NewsPage />
           <div className="bg-[#f6f9fc] py-[60px]">
             <InstallPage />
             <Partnyor />
           </div>
           <QuestionsPage />
         </div>
    </>
  )
}
