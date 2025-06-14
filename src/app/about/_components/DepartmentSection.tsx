
import { FC, useEffect, useState } from 'react';

interface Department {
  id: number;
  title_uz: string;
  description_uz: string;
}

interface DepartmentCardProps {
  title_uz: string;
  description_uz: string;
  isFullWidth?: boolean;
}

const DepartmentCard: FC<DepartmentCardProps> = ({ title_uz, description_uz, isFullWidth = false }) => {
  return (
    <div
      className={`group rounded-2xl p-6 pt-10 pb-10 flex items-start gap-4 bg-[#F6F9FC] hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white hover:cursor-pointer mb-4 transition-all duration-700 ease-in-out ${
        isFullWidth ? 'md:col-span-2' : ''
      }`}
    >
      <div className="rounded-full p-2 bg-[#0653C9] text-white group-hover:bg-white group-hover:text-blue-700 transition-all duration-700 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="transition-all duration-400 ease-in-out">
        <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-700 ease-in-out">{title_uz}</h3>
        <p className="text-sm mt-2 group-hover:text-white transition-colors duration-700 ease-in-out">{description_uz}</p>
      </div>
    </div>
  );
};

const DepartmentSection: FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('https://clamo-production.up.railway.app/api/about/agent-sections/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  const firstFive = departments.slice(0, 5);

  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D445E] mb-3 text-start">
        Markaz bo‘limlari
      </h2>
      <p className="text-gray-600 mb-8">
        Bizning bo‘limlarimiz bilan tanishing, bizda barcha bo‘limlarimiz xizmati juda qulay va siz uchun mos keladi.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {firstFive.map((dept, index) => (
          <DepartmentCard
            key={dept.id}
            title_uz={dept.title_uz}
            description_uz={dept.description_uz}
            isFullWidth={index === firstFive.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default DepartmentSection;
