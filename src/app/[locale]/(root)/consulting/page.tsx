import Firstpage from "./_components/firstpage";
import Secondpage from "./_components/secondpage";

export async function getCarousel() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/about/directions/`,
    {
      next: { revalidate: 60 },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");

  return res.json();
}
export default async function page() {
  const carouselData = await getCarousel();
  return (
    <div>
      <Firstpage />
      <Secondpage carousel={carouselData} />
    </div>
  );
}
