import { getReyestersFromAPI, getReyesterTypes } from "@/lib/getLicense";
import LicenseHero from "./_components/LicenseHero";
import ReyesterClient from "./_components/ReyesterClinet";

export default async function Page() {
  const reyesters = await getReyestersFromAPI();
  const types = await getReyesterTypes();

  return (
    <>
      <LicenseHero />
      
      <section className="container mx-auto px-4 py-[80px]">
        <ReyesterClient reyesters={reyesters} types={types} />
      </section>
    </>
  );
}
