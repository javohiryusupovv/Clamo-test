import { MapPin, ArrowUpRight } from "lucide-react";
import { ReyesterType } from "../../../../../../app.types";

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
  return (
    <div className="border rounded-2xl p-6 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-lg">
            {reyesterType?.map((type) => type.name_uz).join(", ") || "Reyester turi yo‘q"}
            Muddati uzaytirish
          </span>
          <a
            href="#"
            className="text-sm text-sky-600 bg-sky-50 hover:bg-sky-100 px-3 py-1 rounded-lg flex items-center gap-1"
          >
            Litsenziyani ko‘rish <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center text-sm text-gray-600 mt-1 mb-4">
        <MapPin className="w-4 h-4 mr-1 text-blue-500" />
        {location}
      </div>

      <hr className="my-4" />

      {/* Info grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
        <div>
          <div className="font-medium">Akkreditatsiya raqami</div>
          <div className="text-gray-900 font-semibold">{accreditationNumber}</div>
        </div>
        <div>
          <div className="font-medium">Akkreditatsiya berilgan sana</div>
          <div className="text-gray-900 font-semibold">{registrationDate}</div>
        </div>
        <div>
          <div className="font-medium">Email manzil</div>
          <div className="text-gray-900">{email}</div>
        </div>
        <div>
          <div className="font-medium">Sharhlar</div>
          <div className="text-gray-900">{shares}</div>
        </div>
        <div>
          <div className="font-medium">Vebsayt</div>
          <div className="text-gray-900">{website}</div>
        </div>
        <div>
          <div className="font-medium">Telefon raqam</div>
          <div className="text-gray-900">{phone}</div>
        </div>
      </div>
    </div>
  );
}
