import Firstpage from "./_components/firstpage";
import Secondpage from "./_components/secondpage";
import { getCarousel } from "@/lib/getCarousel"; // yoki sizga mos yo'l

export default async function Page() {
  const carouselData = await getCarousel();

  return (
    <div>
      <Firstpage />
      <Secondpage carousel={carouselData} />
    </div>
  );
}
