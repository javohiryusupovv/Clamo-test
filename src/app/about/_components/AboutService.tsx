
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getServices } from "../../../../constants/page";
import Image from "next/image";

export default function ServicesSection() {
  const services = getServices

  //   useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     import("aos").then(AOS => {
  //       AOS.init({ duration: 1000 });
  //     });
  //   }
  // }, []);


  return (
    <section className="py-16 bg-[#F6F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D445E] mb-3 text-start">
            Markaz ko&apos;rsatadigan xizmatlar
          </h2>
          <p className="text-sm sm:text-base text-gray-600 md:max-w-full max-w-2xl text-start">
            Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda, qulay va samarali yechimlar bilan.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md p-6 flex flex-col justify-between transition duration-300 hover:-translate-y-1"
              data-aos="zoom-out"
            >
              <div>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 flex justify-end items-center gap-4">
                <Link
                  href={service.link}
                  className="text-sm text-[#23B3FC] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Batafsil
                </Link>
                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-[#23B3FC] transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-[#23B3FC] group-hover:text-white group-hover:-rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
