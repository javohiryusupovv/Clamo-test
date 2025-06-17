import { getPartners } from "@/lib/getPartners";
import Partnyor from "../components/partnyor/Partnyor";
import International from "./_components/International";
import InternationalProject from "./_components/InternationalProject";

export default async function InternationalMain() {
  const part = await getPartners();

  return (
    <div>
      <International />

      <Partnyor partners={part} />

      <InternationalProject />
    </div>
  );
}
