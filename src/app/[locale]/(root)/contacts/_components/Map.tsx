"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { getContactInfo } from "../../../../../../constants/page";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function ContactPage() {
  const t = useTranslations("ContactPageLayout");
  const adres = useTranslations("ContactPage");
  const contact = getContactInfo;
  const locale = useLocale();
  const lang = locale.split("-")[0];

  const mapUrl = `https://www.google.com/maps?q=41.31801344575129,69.31472228591157&z=18&hl=${lang}&output=embed`;


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

      {contact.map((item, id) => (
        <div
          key={id}
          className="md:absolute top-[55%] left-[100px] mt-7 md:transform -translate-y-1/2 z-10 w-full sm:w-[310px] bg-white bg-opacity-90 rounded-xl shadow-lg p-6 space-y-4 text-gray-800"
        >
          <h2 className="text-2xl font-semibold font-vk">{t("phone_info")}</h2>

          <div className=" group flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <Link href="tel:+998555143003" target="_blank" rel="noopener noreferrer">
              <p className="text-sm font-vk">{t("phone_number")}</p>
              <p className="font-medium font-vk group-hover:underline">
                {item.phone}
              </p>
            </Link>
          </div>

          <div className="group flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <Link href="mailto:info@clamo.uz" target="_blank" rel="noopener noreferrer">
              <p className="text-sm font-vk">{t("email")}</p>
              <p className="font-medium font-vk group-hover:underline">
                {item.email}
              </p>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <FaGlobe className="text-blue-600" />
            <div className="group">
              <p className="text-sm font-vk">{t("website")}</p>
              <Link
                href={"https://clamo.uz"}
                target="_blank"
                aria-label="website url"
                rel="noopener noreferrer"
              >
                <p className="font-medium font-vk group-hover:underline">
                  {item.website.toLowerCase()}
                </p>
              </Link>
            </div>
          </div>

          <div className="group flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" />
            <Link
              href={"https://yandex.uz/maps/-/CLD9N-6D"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm font-vk">{t("addres")}</p>
              <p className="font-medium font-vk group-hover:underline">
                {adres("address")}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
