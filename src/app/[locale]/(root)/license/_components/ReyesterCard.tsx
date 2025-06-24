import { MapPin } from "lucide-react";
import { ReyesterType } from "../../../../../../app.types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface ReyesterCardProps {
  title: string;
  location: string;
  accreditationNumber: string;
  registrationDate: string;
  reyesterType?: ReyesterType[];
  website: string;
  shares: number;
  email: string;
  phone: string;
}

export default function ReyesterCard({
  title,
  location,
  accreditationNumber,
  registrationDate,
  reyesterType,
  website,
  shares,
  email,
  phone,
}: ReyesterCardProps) {
  const renderValue = (value: string | number | undefined) => {
    if (value === undefined || value === null || value === "" || value === 0) {
      return <span className="text-gray-400">NaN</span>;
    }
    return <span>{value}</span>;
  };
  return (
    <div className="bg-white rounded-2xl p-6 shadow border space-y-3 mb-[24px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start flex-wrap sm:flex-nowrap gap-2">
        <div>
          <h3 className="text-sm sm:text-[16px] md:text-[24px] font-semibold mb-1 text-gray-800 pb-2">
            {renderValue(title)}
          </h3>
          <div className="lg:flex gap-2 items-center text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <MapPin width={24} height={24} className="text-[#23B3FC]" />
              <span className="text-[14px] font-normal text-[#3D445E]">
                {renderValue(location)}
              </span>
            </div>
            <div className="text-sm px-3 py-1 rounded-lg flex gap-2">
              {reyesterType?.map((type, idx) => {
                return (
                  <button
                    key={idx}
                    className="bg-[#E3E8ED] py-1 px-3 rounded-lg"
                  >
                    {renderValue(type.name)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <button className="group flex items-center justify-center gap-1 mt-2 sm:mt-0 text-[10px] sm:text-xs md:text-sm text-[#23B3FC] font-medium bg-blue-50 px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 rounded-md hover:bg-blue-100 transition-colors">
          Litsenziyani ko‘rish
          <FaArrowRightLong className="group-hover:rotate-[1deg] group-hover:scale-105 transition-all duration-100 -rotate-45" />
        </button>
      </div>

      <div className="grid lg:grid-cols-3 ms:grid-cols-2 items-center justify-center text-sm text-gray-700 border-t pt-[20px] gap-4">
        <div>
          <p className="font-medium text-[14px] text-[#808597] pb-[8px]">
            Akkreditatsiya raqami
          </p>
          <p className="text-[18px] font-semibold text-[#3D445E]">
            {renderValue(accreditationNumber)}
          </p>

          <p className="font-medium text-[14px] text-[#808597] pb-[8px] mt-4">
            Sharhlar
          </p>
          <p className="text-[18px] font-semibold text-[#3D445E]">{renderValue(shares)}</p>
        </div>

        <div className="ms:border-l ms:pl-[40px]">
          <p className="font-medium text-[14px] text-[#808597] pb-[8px]">
            Akkreditsiya berilgan sana
          </p>
          <p className="text-[18px] font-semibold text-[#3D445E]">
            {renderValue(registrationDate)}
          </p>

          <p className="font-medium text-[14px] text-[#808597] pb-[8px] mt-4">
            Vebsayt
          </p>
          <Link
            href={website}
            className="hover:underline text-[18px] font-semibold text-[#3D445E]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {renderValue(website)}
          </Link>
        </div>

        <div className="lg:border-l lg:pl-[40px]">
          <p className="font-medium text-[14px] text-[#808597] pb-[8px]">
            Email manzil
          </p>
          <p className="text-[18px] font-semibold text-[#3D445E]">{renderValue(email)}</p>

          <p className="font-medium text-[14px] text-[#808597] pb-[8px] mt-4">
            Telefon raqam
          </p>
          <p className="text-[18px] font-semibold text-[#3D445E]">{renderValue(phone)}</p>
        </div>
      </div>
    </div>
  );
}
