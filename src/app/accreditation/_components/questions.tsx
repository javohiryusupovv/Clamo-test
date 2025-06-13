"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function     FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Есть ли бесплатные материалы?",
      answer:
        "Да, мы предлагаем ряд бесплатных курсов и лекций, чтобы вы могли ознакомиться с качеством наших материалов и методик. Бесплатные материалы доступны в разделе 'Бесплатные курсы' и включают как видеоролики, так и аудиолекции.",
    },
    {
      question: "Как записаться на курс?",
      answer:
        "Чтобы записаться на курс, вам нужно зарегистрироваться на нашем сайте, выбрать интересующий вас курс и нажать кнопку 'Записаться'.",
    },
    {
      question: "Можно ли получить сертификат по окончании курса?",
      answer:
        "Да, по окончании большинства наших курсов вы можете получить сертификат. Для этого необходимо успешно пройти все задания и сдать финальный тест.",
    },
    {
      question: "Как я могу связаться с поддержкой?",
      answer:
        "Вы можете связаться с нашей службой поддержки через форму обратной связи на сайте или написать нам на электронную почту support@example.com.",
    },
    {
      question:
        "Нужно ли подключение к интернету для использования приложения?",
      answer:
        "Да, для использования нашего приложения требуется стабильное подключение к интернету.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-[#3D445E] font-bold font-vksans text-[30px] sm:text-[35px] md:text-[40px] leading-tight md:mb-10 sm:mb-8 mb-6">
          Tez-tez beriladigan savollar
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-3xl transition-all duration-300 shadow-sm ${
                  isOpen
                    ? "border-[#0653C9] bg-[#F5F5F533]"
                    : "border-[#E3E8E9] bg-white hover:border-[#0653C9]"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 sm:p-6 text-left focus:outline-none hover:bg-[#F0F8FF] rounded-3xl"
                >
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-[#3D445E] font-vksans">
                    {faq.question}
                  </span>
                  <span className="text-[#0653C9]">
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "max-h-[400px] opacity-100 px-4 sm:px-6 pb-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-[#3D445E] font-vksans leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
