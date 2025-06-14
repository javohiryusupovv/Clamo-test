

import Izohlar from "@/app/components/Comments";
// import Hero from "@/app/components/Hero";
import InstallPage from "@/app/components/InstallPage";
import MainService from "@/app/components/MainServes";
import MedicalLegal from "@/app/components/MedicalLegal";
import NewsPage from "@/app/components/News";
import QuestionsPage from "@/app/components/QuestionsPage";
import Partnyor from "./components/partnyor/Partnyor";



export default function Main() {
  return (
    <>
     <div className="overflow-hidden">
           {/* <Hero /> */}
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
