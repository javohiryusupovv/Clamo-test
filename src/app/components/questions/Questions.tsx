// "use client";

// import { useEffect, useState } from "react";

// interface FAQ {
//   id: number;
//   question: string;
//   answer: string;
// }

// export default function Questions() {
//   const [answer, setAnswer] = useState<FAQ[]>([]);
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchFAQs = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/faqs/`
//         );
//         const data = await res.json();
//         setAnswer(data);
//       } catch {
//         setAnswer([]);
//       }
//     };
//     fetchFAQs();
//   }, []);

//   const handleToggle = (idx: number) => {
//     setOpenIndex(openIndex === idx ? null : idx);
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       {answer.map((q, idx) => (
//         <div
//           key={idx}
//           className={`${
//             openIndex === idx ? "" : "bg-white"
//           } rounded-lg border border-blue-100 hover:bg-slate-50`}
//         >
//           <button
//             onClick={() => handleToggle(idx)}
//             className={`w-full text-left px-6 py-5 text-lg font-medium cursor-pointer flex items-center justify-between ${
//               openIndex === idx
//                 ? "border-x border-t border-blue-500 rounded-t-lg"
//                 : ""
//             }`}
//           >
//             <span>{q.question}</span>
//             <span
//               className={`text-2xl ${
//                 openIndex === idx ? "text-blue-500" : "text-slate-400"
//               }`}
//             >
//               {openIndex === idx ? "−" : "+"}
//             </span>
//           </button>
//           {openIndex === idx && (
//             <div className="px-6 pb-5 text-base text-slate-700 leading-relaxed border-x border-b border-blue-500 rounded-b-lg">
//               {q.answer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


'use client';

import React, { useState } from 'react';
import {  getfaqData } from '../../../../constants/page';



const FaqAccordion: React.FC = () => {
  const faqData = getfaqData
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[1184px] mx-auto py-4">
      {faqData.map((item, index) => (
        <div key={index} className="px-4 py-4 rounded-[16px] bg-[#F5F5F533]/20% mb-4 border hover:border-[#0653C9] hover:cursor-pointer">
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium text-lg">{item.question}</span>
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
