import Izohlar from "@/components/Comments";
import Hero from "@/components/Hero";
import InstallPage from "@/components/InstallPage";
import MainService from "@/components/MainServes";
import MedicalLegal from "@/components/MedicalLegal";
import NewsPage from "@/components/News";
import Partnyor from "@/components/partnyor/Partnyor";
import QuestionsPage from "@/components/QuestionsPage";



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
