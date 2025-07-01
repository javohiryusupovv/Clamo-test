import { getNews } from "@/lib/getNews";
import NewsGrid from "./_components/NewsGrid";
import { getLocalizedValue } from "@/lib/getLocalization";

export async function generateMetadata({ params }: { params: Promise<{locale: string }>}) {
  const {locale} = await params
    const content = {
    title_uz: "Clamo yangiliklari",
    description_uz: "Clamo bilan bog‘liq so‘nggi yangiliklar, e’lonlar va tarmoqdagi o‘zgarishlardan xabardor bo‘ling.",

    title_ru: "Новости Clamo",
    description_ru: "Следите за последними новостями, объявлениями и обновлениями, связанными с Clamo.",

    title_en: "Clamo news",
    description_en: "Stay updated with the latest news, announcements, and developments related to Clamo.",
  };

  return {
    title: getLocalizedValue(content, "title", locale),
    description: getLocalizedValue(content, "description", locale),
  };
}


export default async function page() {
    const newsorg = await getNews();    
  return (
    <NewsGrid news={newsorg} />
  );
}
