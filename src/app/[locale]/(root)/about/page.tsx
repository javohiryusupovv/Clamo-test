  import Servicec from "./_components/AboutService";
  import HeroSection from "./_components/HeroSection";
  // import DepartmentSection from "./_components/DepartmentSection";
  import TeamCarousel from "./_components/TeamCarousel";
  import AboutMain from "./_components/AboutMain";
  import { getTeamCarousel } from "@/lib/getTeamCarousel";
  // import { getSection } from "@/lib/getSection";
  // import { getCarousel } from "@/lib/getCarousel"; // yoki sizga mos yo'l
  // import Secondpage from "@/app/[locale]/(root)/consulting/_components/secondpage"
import { getLocalizedValue } from "@/lib/getLocalization";
import { getServices } from "@/lib/getServicec";
// import CenterStructure from "./_components/CenterStructure";



  export async function generateMetadata({ params }: { params: Promise<{locale: string }>}) {
    const {locale} = await params
    const sectionData = await getServices();
  const content = sectionData[0];

  return {
    title: getLocalizedValue(content, "description", locale) || "About Us - Default Title",
    description: getLocalizedValue(content, "description", locale) || "Learn more about our mission, team, and services.",
  };
  }




  export default async function About() {
    // const department = await getSection();
    const service = await getServices();
    const members = await getTeamCarousel();
    // const carouselData = await getCarousel();

    return (
      <div className="overflow-hidden">
        <AboutMain />
        <Servicec servicec={service} />
        {/* <CenterStructure /> */}
        {/* <DepartmentSection agentsection={department} /> */}
        <TeamCarousel members={members} />
        <HeroSection />
        {/* <Secondpage carousel={carouselData} /> */}
      </div>
    );
  }
