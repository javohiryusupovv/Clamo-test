"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";

interface CompanyData {
  location: string;
  location_uz: string;
  location_en: string;
  location_ru: string;
  phone: string;
  email: string;
}

export default function ContactPage() {
  const t = useTranslations("ContactPageLayout");
  const locale = useLocale();
  const lang = locale.split("-")[0];
  const [company, setCompany] = useState<CompanyData | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/company/`)
      .then((res) => res.json())
      .then((data) => setCompany(data?.[0] || null))
      .catch(() => {});
  }, []);

  const mapUrl = `https://www.google.com/maps?q=41.31801344575129,69.31472228591157&z=18&hl=${lang}&output=embed`;

  const phone = company?.phone || "+998555143003";
  const email = company?.email || "info@clamo.uz";
  const address =
  (lang === "uz"
    ? company?.location_uz
    : lang === "ru"
      ? company?.location_ru
      : company?.location_en) ||
  company?.location ||
  "51 Parkent Street, Tashkent";

  const formatPhone = (p: string) => {
    const digits = p.replace(/\D/g, "");
    if (digits.length === 12) {
      return `+${digits.slice(0, 3)} (${digits.slice(3, 5)}) ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10)}`;
    }
    return p;
  };

  console.log(company);
  
  
  return (
    <div className="relative w-full md:h-[550px] h-[450px] mb-20">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        className="md:absolute inset-0 z-0 rounded-2xl max-md:mb-[190px]"
        loading="lazy"
        allowFullScreen
      ></iframe>

      <div className="md:absolute top-[55%] left-[100px] mt-7 md:transform -translate-y-1/2 z-10 w-full sm:w-[310px] bg-white bg-opacity-90 rounded-xl shadow-lg p-6 space-y-4 text-gray-800">
        <h2 className="text-2xl font-semibold font-vk">{t("phone_info")}</h2>

        <div className="group flex items-center gap-3">
          <FaPhoneAlt className="text-blue-600" />
          <Link href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
            <p className="text-sm font-vk">{t("phone_number")}</p>
            <p className="font-medium font-vk group-hover:underline">
              {formatPhone(phone)}
            </p>
          </Link>
        </div>

        <div className="group flex items-center gap-3">
          <FaEnvelope className="text-blue-600" />
          <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <p className="text-sm font-vk">{t("email")}</p>
            <p className="font-medium font-vk group-hover:underline">
              {email}
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <FaGlobe className="text-blue-600" />
          <div className="group">
            <p className="text-sm font-vk">{t("website")}</p>
            <Link
              href="https://clamo.uz"
              target="_blank"
              aria-label="website url"
              rel="noopener noreferrer"
            >
              <p className="font-medium font-vk group-hover:underline">
                clamo.uz
              </p>
            </Link>
          </div>
        </div>

        <div className="group flex items-center gap-3">
          <FaMapMarkerAlt className="text-blue-600" />
          <Link
            href="https://yandex.uz/maps/-/CLD9N-6D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm font-vk">{t("addres")}</p>
            <p className="font-medium font-vk group-hover:underline">
              {address}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
