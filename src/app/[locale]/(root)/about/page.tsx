  import Servicec from "./_components/AboutService";
  import HeroSection from "./_components/HeroSection";
  import DepartmentSection from "./_components/DepartmentSection";
  import TeamCarousel from "./_components/TeamCarousel";
  import AboutMain from "./_components/AboutMain";
  import { getServicec } from "@/lib/getServicec";
  import { getTeamCarousel } from "@/lib/getTeamCarousel";
  import { getSection } from "@/lib/getSection";
  import { getCarousel } from "@/lib/getCarousel"; // yoki sizga mos yo'l
  import Secondpage from "@/app/[locale]/(root)/consulting/_components/secondpage"
import { getLocalizedValue } from "@/lib/utils";

  interface Params {
    locale: string;
  }


  export async function generateMetadata({ params }: { params: Params }) {
    const sectionData = await getServicec();
  console.log(sectionData[0]);
  const content = sectionData[0];
  
  return {
    title: getLocalizedValue(params.locale, content, "description") || "About Us - Default Title",
    description: getLocalizedValue(params.locale, content, "description") || "Learn more about our mission, team, and services.",
  };
  }




  export default async function About() {
    const department = await getSection();
    const service = await getServicec();
    const members = await getTeamCarousel();
    const carouselData = await getCarousel();
    
    return (
      <div className="overflow-hidden">
        <AboutMain />
        <Servicec servicec={service} />
        <DepartmentSection agentsection={department} />
        <TeamCarousel members={members} />
        <HeroSection />
        <Secondpage carousel={carouselData} />
      </div>
    );
  }
