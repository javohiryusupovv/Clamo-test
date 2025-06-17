import Izohlar from "@/app/[locale]/(root)/components/Comments";
import Hero from "@/app/[locale]/(root)/components/Hero";
import InstallPage from "@/app/[locale]/(root)/components/InstallPage";
import MainService from "@/app/[locale]/(root)/components/MainServes";
import MedicalLegal from "@/app/[locale]/(root)/components/MedicalLegal";
import NewsPage from "@/app/[locale]/(root)/components/News";
import QuestionsPage from "@/app/[locale]/(root)/components/QuestionsPage";
import Partnyor from "./components/partnyor/Partnyor";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/stats/`,
    {
      next: { revalidate: 60 },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Ma'lumotni olishda xatolik");

  return res.json();
}

async function getNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news/news`, {
    next: { revalidate: 60 },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");

  return res.json();
}



export default async function Main() {
  const data = await getData();
  const datas = await getNews();

  return (
    <div className="overflow-hidden">
      <Hero numbers={data[0]} />
      <MedicalLegal />
      <MainService />
      <Izohlar />
      <NewsPage news={datas[2]} />
      <div className="bg-[#f6f9fc] py-[60px]">
        <InstallPage />
        <Partnyor />
      </div>
      <QuestionsPage  />
    </div>
  );
}
