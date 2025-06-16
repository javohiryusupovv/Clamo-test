"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { getContactInfo } from "../../../../../../constants/page";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const contact = getContactInfo;
  return (
    <div className="relative w-full h-[550px] mb-20 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47951.73847904946!2d69.24007384112964!3d41.2918162894356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ae4cb57ed3d%3A0x89e50d44b93dc3a!2sParkent%20Street%2051%2C%20Tashkent!5e0!3m2!1sen!2s!4v1718070862677!5m2!1sen!2s"
        width="100%"
        height="100%"
        className="md:absolute inset-0 z-0 rounded-2xl max-md:mb-[190px]"
        loading="lazy"
        allowFullScreen
      ></iframe>

      {contact.map((item, id) => (
        <div
          key={id}
          className="md:absolute top-[55%] left-[100px] md:transform -translate-y-1/2 z-10 w-full sm:w-[310px] bg-white bg-opacity-90 rounded-xl shadow-lg p-6 space-y-4 text-gray-800"
        >
          <h2 className="text-2xl font-semibold">{t("phone_info")}</h2>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <div>
              <p className="text-sm">{t("phone_number")}</p>
              <p className="font-medium">{item.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <div>
              <p className="text-sm">{t("email")}</p>
              <p className="font-medium">{item.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaGlobe className="text-blue-600" />
            <div>
              <p className="text-sm">{t("website")}</p>
              <p className="font-medium">{item.website}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" />
            <div>
              <p className="text-sm">{t("addres")}</p>
              <p className="font-medium">{item.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
