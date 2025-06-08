
export default function DirectionsSection() {
  return (
    <section className="py-20 px-4 sm:px-8 text-center container mt-50px">
      <h2 className="text-[48px] font-bold mb-3 text-start text-[#3D445E]">Ishlash yo‘nalishlari</h2>
      <p className="text-gray-600 mx-auto mb-10 text-start">
        Bo‘limlarimiz bilan tanishing, bizda barcha bo‘limlar xizmati juda qulay va siz uchun mos keladi.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
        {/* 1 */}
        <div className="group bg-white rounded-2xl p-6 shadow text-gray-800 hover:bg-blue-600 hover:cursor-pointer transition duration-300 ease-in-out">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-white">Litsenziyalash</h3>
          <p className="text-sm leading-relaxed group-hover:text-white">
            Markamiz tibbiyot tashkilotlarining litsenziyalash jarayonini boshqaradi va rasmiy hujjatlarini
            tayyorlashda yordam beradi. Bizning maqsadimiz — tibbiyot muassasalarining faoliyatini qonuniy va xavfsiz
            amalga oshirishini ta'minlashdir.
          </p>
        </div>
        {/* 2 */}
        <div className="group bg-white rounded-2xl p-6 shadow text-gray-800 hover:bg-blue-600 hover:cursor-pointer transition duration-300 ease-in-out">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-white">Akkreditatsiyalash</h3>
          <p className="text-sm leading-relaxed group-hover:text-white">
            Akkreditatsiya tibbiyot muassasalarining xizmat sifatini va xavfsizligini baholash va xalqaro
            standartlarga mosligini tasdiqlash jarayonidir. Markazimiz bu jarayonni samarali tashkil etish va tibbiyot
            tashkilotlarini rivojlantirishga yordam beradi.
          </p>
        </div>

        {/* 3 */}
        <div className="group bg-white rounded-2xl p-6 shadow text-gray-800 hover:bg-blue-600 hover:cursor-pointer transition duration-300 ease-in-out">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-white">Malaka oshirish</h3>
          <p className="text-sm leading-relaxed group-hover:text-white">
            Shifokorlar va tibbiyot xodimlari uchun malaka oshirish kurslari orqali ularning bilim va ko‘nikmalarini
            muntazam yangilashga ko‘maklashamiz.
          </p>
        </div>
      </div>
    </section>
  );
}
