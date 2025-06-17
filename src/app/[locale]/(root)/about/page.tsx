import Servicec from "./_components/AboutService";
import HeroSection from "./_components/HeroSection";
import DepartmentSection from "./_components/DepartmentSection";
import TeamCarousel from "./_components/TeamCarousel";
import AboutMain from "./_components/AboutMain";
import { getServicec } from "@/lib/getServicec";

export default async function About() {
const service = await getServicec();
  return (
    <div>
      <AboutMain />
      <Servicec servicec={service} />
      <DepartmentSection />
      <TeamCarousel />
      <HeroSection />
    </div>
  );
}
