import { getReyestersFromAPI } from "@/lib/getLicense";
import LicenseHero from "./_components/LicenseHero";
import ReyesterCard from "./_components/ReyesterCard";

export default async function Page() {
  const reyesters = await getReyestersFromAPI();
  
  return (
    <>
      <LicenseHero />
      {/* Klinikalar section */}
      <section className="container mx-auto px-4 py-[80px]">
        {reyesters.map((item) => (
        <ReyesterCard
          key={item.id}
          title={item.title_uz}
          location={item.location_uz}
          accreditationNumber={item.accreditation_number}
          registrationDate={item.registration_date}
          website={item.website}
          shares={item.shares}
          email={item.email}
          phone={item.phone}
        />
      ))}
      </section>
    </>
  );
}
