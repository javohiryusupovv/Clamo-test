export default function CenterStructure() {
  return (
    <section>
      <div className="md:mb-12 mb-6 flex flex-col gap-[4px] items-center lg:pt-[64px] md:pt-[34px] pt-[24px] lg:pb-[44px] md:pb-[34px] pb-[24px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[100%] font-vk font-bold text-[#3D445E] text-start">
          Markaz tuzilmasi
        </h2>
        <p className="text-sm sm:text-base md:text-[20px] font-vk text-[#012548CC] leading-[140%] md:max-w-full max-w-2xl text-center">
          {/* {t("service_des")} */}
          Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha
          xizmatlar bir joyda, qulay va samarali yechimlar bilan.
        </p>
      </div>
    </section>
  );
}
