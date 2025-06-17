import Servicec from "./_components/AboutService";
import HeroSection from "./_components/HeroSection";
import DepartmentSection from "./_components/DepartmentSection";
import TeamCarousel from "./_components/TeamCarousel";
import AboutMain from "./_components/AboutMain";
import { getServicec } from "@/lib/getServicec";
import { getTeamCarousel } from "@/lib/getTeamCarousel";

export default async function About() {
const service = await getServicec();
const members = await getTeamCarousel();

  return (
    <div>
      <AboutMain />
      <Servicec servicec={service} />
      <DepartmentSection />
      <TeamCarousel members={members} />
      <HeroSection />
    </div>
  );
}
