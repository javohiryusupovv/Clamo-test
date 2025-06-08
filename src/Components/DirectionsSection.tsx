
export default function DirectionsSection() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-[#f8fafd] text-center">
      <h2 className="text-3xl font-bold mb-3">Ishlash yo‘nalishlari</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Bo‘limlarimiz bilan tanishing, bizda barcha bo‘limlar xizmati juda qulay va siz uchun mos keladi.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
        {/* 1 */}
        <div className="bg-white rounded-2xl p-6 shadow text-gray-800">
          <h3 className="text-lg font-semibold mb-2">Litsenziyalash</h3>
          <p className="text-sm leading-relaxed">
            Markamiz tibbiyot tashkilotlarining litsenziyalash jarayonini boshqaradi va rasmiy hujjatlarini
            tayyorlashda yordam beradi. Bizning maqsadimiz — tibbiyot muassasalarining faoliyatini qonuniy va xavfsiz
            amalga oshirishini ta'minlashdir.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white rounded-2xl p-6 shadow text-gray-800">
          <h3 className="text-lg font-semibold mb-2">Akkreditatsiyalash</h3>
          <p className="text-sm leading-relaxed">
            Akkreditatsiya tibbiyot muassasalarining xizmat sifatini va xavfsizligini baholash va xalqaro
            standartlarga mosligini tasdiqlash jarayonidir. Markazimiz bu jarayonni samarali tashkil etish va tibbiyot
            tashkilotlarini rivojlantirishga yordam beradi.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white rounded-2xl p-6 shadow text-gray-800">
          <h3 className="text-lg font-semibold mb-2">Malaka oshirish</h3>
          <p className="text-sm leading-relaxed">
            Shifokorlar va tibbiyot xodimlari uchun malaka oshirish kurslari orqali ularning bilim va ko‘nikmalarini
            muntazam yangilashga ko‘maklashamiz.
          </p>
        </div>
      </div>
    </section>
  );
}
