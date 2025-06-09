import AccordionItem from './AccordionItem';

export default function ExamplePage() {
    return (
        <div className='bg-white z-50 w-full'>
            <div className="space-y-4 pt-[96px] pb-[96px] bg-white container">
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D445E] mb-3 text-start">
                        Normativ hujjatlar
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 md:max-w-full max-w-2xl text-start">
Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda, qulay va samarali yechimlar bilan.                    </p>
                </div>
                <AccordionItem
                    title="Litsensiyalash bo‘yicha qonun"
                    content={`"Litsensiyalash, ruxsat berish va xabardor qilish tartib-taomillari to‘g‘risidagi"dagi`}
                    link="https://lex.uz/docs/-5511879"
                />
                <AccordionItem
                    title="Akkreditatsiyalash bo‘yicha 1-qonun"
                    content="Bu yerda akkreditatsiya bo‘yicha birinchi qonunning qisqacha tavsifi."
                />
                <AccordionItem
                    title="Akkreditatsiyalash bo‘yicha 2-qonun"
                    content="Bu yerda akkreditatsiya bo‘yicha ikkinchi qonunning qisqacha tavsifi."
                />
            </div>
        </div>
    );
}
