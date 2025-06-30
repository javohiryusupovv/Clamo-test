import { getFaqs } from "@/lib/getFaqs";
import Questionsss from "../components/questions/Questions";

export default async function QuestionsPageWrapper() {
  const faqData = await getFaqs();

  return (
    <div className="md:mb-16 mb-6 lg:mt-10 ">
      <div className="container">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-vk leading-[100%] lg:pb-8 md:pb-5 pb-3 max-sm:text-center font-bold text-[#3D445E]">
          Tez-tez beriladigan savollar
        </h1>
      </div>
      <Questionsss faqData={faqData} />
    </div>
  );
}
