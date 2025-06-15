import { getDepartments } from "../../../../../../constants/page";

export default function DepartmentSection() {
  const departments = getDepartments;
  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D445E] mb-3 text-start">
        Markaz bo&apos;limlari
      </h2>
      <p className="text-gray-600 mb-8">
        Bizning bo&apos;limlarimiz bilan tanishing, bizda barcha
        bo&apos;limlarimiz xizmati juda qulay va siz uchun mos keladi.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {departments.map((departments) => (
          <div key={departments.id}
            className={`group rounded-2xl p-6 pt-10 pb-10 flex items-start gap-4 bg-[#F6F9FC] hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white hover:cursor-pointer mb-4 transition-all duration-200 ease-in-out`}
          >
            <div className="rounded-full p-2 bg-[#0653C9] text-white group-hover:bg-white group-hover:text-blue-700 transition-all duration-200 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div className="transition-all duration-200 ease-in-out">
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-200 ease-in-out">
                {departments.title}
              </h3>
              <p className="text-sm mt-2 group-hover:text-white transition-colors duration-200 ease-in-out">
                {departments.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
