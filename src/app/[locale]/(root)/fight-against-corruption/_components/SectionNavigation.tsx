// app/[locale]/fight-against-corruption/_components/SectionNavigation.tsx
'use client';

import { useEffect, useState } from 'react';

interface Section {
  id: string;
  title: string;
}

interface SectionNavigationProps {
  sections: Section[];
}

export default function SectionNavigation({ sections }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isOpen, setIsOpen] = useState(false);

  console.log(sections);
  

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -66%',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 1024 ? 140 : 96; // mobile uchun kattaroq offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      
      // Mobile da bosilganda yopiladi
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      }
    }
  };

  const activeTitle = sections.find(s => s.id === activeSection)?.title || sections[0]?.title;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-[#3D445E] mb-4">Boblar</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation (Sticky Dropdown) */}
      <div className="lg:hidden sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-4 flex items-center justify-between text-left"
        >
          <div className="flex-1">
            <span className="text-xs text-gray-500 block mb-1">Joriy bob</span>
            <span className="text-sm font-bold text-[#3D445E]">{activeTitle}</span>
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg max-h-[60vh] overflow-y-auto">
            <ul className="py-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleClick(section.id)}
                    className={`w-full text-left px-4 py-3 transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}