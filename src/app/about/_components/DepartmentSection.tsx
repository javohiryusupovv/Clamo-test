'use client';

import { FC, useEffect, useState } from 'react';

interface Department {
  id: number;
  title_uz: string;
  description_uz: string;
}

interface DepartmentCardProps {
  title_uz: string;
  description_uz: string;
  isHighlighted?: boolean;
}

const DepartmentCard: FC<DepartmentCardProps> = ({ title_uz, description_uz }) => {
  return (
    <div className="group rounded-2xl p-6 pt-10 pb-10 flex items-start gap-4 bg-[#F6F9FC] hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white hover:cursor-pointer mb-4 transition-transform duration-300">
      <div className="rounded-full p-2 group-hover:bg-white group-hover:text-blue-700 bg-[#0653C9] text-white transition-transform duration-300">
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
      <div>
        <h3 className="text-lg font-semibold group-hover:text-white">{title_uz}</h3>
        <p className="text-sm mt-2 group-hover:text-white">{description_uz}</p>
      </div>
    </div>
  );
};

const DepartmentSection: FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ5NTU2NDIzLCJpYXQiOjE3NDk1NTYxMjMsImp0aSI6IjFiNjk3Mjg1NDE3ODRkYzE5MDg1MzMzNWZlYjVhZjk5IiwidXNlcl9pZCI6Mn0.EzPDM9Y3VuFxbW4tr8fi961pS5HwigvSoH31Rw9fplo"
      if (!token) {
        throw new Error('No token found. Please log in.');
      }

      const response = await fetch('https://clamo-production.up.railway.app/api/about/agent-sections/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setDepartments(data);
    }

    fetchDepartments();
  }, []);
  
  const fallbackDescription =
    'Shifokorlarimiz yuqori malakali mutaxassislardan iborat bo‘lib, ular zamonaviy usullar asosida tashxis qo‘yish, individual davolash rejasini tuzish va bemorlarni qo‘llab-quvvatlashga intiladilar.';

  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D445E] mb-3 text-start">
        Markaz bo‘limlari
      </h2>
      <p className="text-gray-600 mb-8">
        Bizning bo‘limlarimiz bilan tanishing, bizda barcha bo‘limlarimiz xizmati juda qulay va siz uchun mos keladi.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {departments.length > 0 ? (
          departments.map((dept) => (
            <DepartmentCard
              key={dept.id}
              title_uz={dept.title_uz}
              description_uz={dept.description_uz}
            />
          ))
        ) : (
          <>
            <DepartmentCard title_uz="Test bo‘limi" description_uz={fallbackDescription} />
            <DepartmentCard title_uz="Test bo‘limi" description_uz={fallbackDescription} />
            <DepartmentCard title_uz="Test bo‘limi" description_uz={fallbackDescription} />
            <DepartmentCard title_uz="Test bo‘limi" description_uz={fallbackDescription} />
          </>
        )}
      </div>
      {departments.length > 0 ? (
        <DepartmentCard
          title_uz={departments[departments.length - 1]?.title_uz || 'Test bo‘limi'}
          description_uz={departments[departments.length - 1]?.description_uz || fallbackDescription}
        />
      ) : (
        <DepartmentCard title_uz="Test bo‘limi" description_uz={fallbackDescription} />
      )}
    </section>
  );
};

export default DepartmentSection;