import Questions from "@/Components/Questions/Questions";

export default function  FAQSection() {

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-[#3D445E] font-bold font-vksans text-[30px] sm:text-[35px] md:text-[40px] leading-tight md:mb-10 sm:mb-8 mb-6">
          Tez-tez beriladigan savollar
        </h2>

        <Questions/>
      </div>
    </section>
  );
}
