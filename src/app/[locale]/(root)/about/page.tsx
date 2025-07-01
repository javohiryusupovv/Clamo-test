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
