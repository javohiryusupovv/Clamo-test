
'use client';

import React, { useState } from 'react';
import {  getfaqData } from '../../../../../../constants/page';



const FaqAccordion: React.FC = () => {
  const faqData = getfaqData
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-auto mx-auto py-4">
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
