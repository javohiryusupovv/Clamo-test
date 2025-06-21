import { getNews } from "@/lib/getNews";
import NewsGrid from "./_components/NewsGrid";

export default async function page() {
    const newsorg = await getNews();
    console.log(newsorg);
    

  return (
    <NewsGrid news={newsorg} />
  );
}
