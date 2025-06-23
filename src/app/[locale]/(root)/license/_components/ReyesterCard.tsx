import { MapPin } from "lucide-react";

interface Props {
  title: string;
  location: string;
  accreditationNumber: string;
  registrationDate: string;
  website: string;
  shares?: number;
  email?: string;
  phone?: string;
}

export default function ReyesterCard({
  title,
  location,
  accreditationNumber,
  registrationDate,
  website,
  shares = 100,
  email = "info@example.com",
  phone = "+998 90 000 00 00",
}: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow border space-y-3">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="flex gap-2 items-center text-gray-600 text-sm">
        <MapPin size={16} />
        <span>{location}</span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <p className="font-medium">Akkreditatsiya raqami</p>
          <p>{accreditationNumber}</p>
        </div>
        <div>
          <p className="font-medium">Berilgan sana</p>
          <p>{registrationDate}</p>
        </div>
        <div>
          <p className="font-medium">Sharhlar</p>
          <p>{shares}</p>
        </div>
        <div>
          <p className="font-medium">Vebsayt</p>
          <a
            href={`https://${website}`}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 pt-2">
        <div>
          <p className="font-medium">Email</p>
          <p>{email}</p>
        </div>
        <div>
          <p className="font-medium">Telefon</p>
          <p>{phone}</p>
        </div>
      </div>
      <div className="pt-3">
        <button className="text-blue-600 font-medium hover:underline flex items-center gap-1">
          Litsenziyani ko‘rish
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
