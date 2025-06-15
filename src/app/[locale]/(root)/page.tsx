

import Izohlar from "@/app/[locale]/(root)/components/Comments";
import Hero from "@/app/[locale]/(root)/components/Hero";
import InstallPage from "@/app/[locale]/(root)/components/InstallPage";
import MainService from "@/app/[locale]/(root)/components/MainServes";
import MedicalLegal from "@/app/[locale]/(root)/components/MedicalLegal";
import NewsPage from "@/app/[locale]/(root)/components/News";
import QuestionsPage from "@/app/[locale]/(root)/components/QuestionsPage";
import Partnyor from "./components/partnyor/Partnyor";



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
             <Partnyor/>
           </div>
           <QuestionsPage />
         </div>
    </>
  )
}
