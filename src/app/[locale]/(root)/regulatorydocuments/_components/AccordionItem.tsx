'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AccordionItemProps } from "../../../../../../app.types"

const AccordionItem = ({ title, content, link }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
      }`}
    >
      <button
        onClick={toggleAccordion}
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-800">{title}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>

      {isOpen && (
        <div className="px-4 pb-4 text-gray-600 text-sm">
          <p>{content}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 underline hover:text-blue-800 transition"
            >
              Havola
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
