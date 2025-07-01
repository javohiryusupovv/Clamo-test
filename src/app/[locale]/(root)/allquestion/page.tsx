import { getFaqs } from "@/lib/getFaqs";
import Questionsss from "../components/questions/Questions";
import InfoTitle from "./_components/info";

export default async function QuestionsPageWrapper() {
  const faqData = await getFaqs();
  

  return (
    <div className="md:mb-16 mb-6 lg:mt-10 ">
      <div className="container">
        <InfoTitle/>
      </div>
      <Questionsss faqData={faqData} />
    </div>
  );
}
