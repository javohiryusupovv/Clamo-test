import { ServiceCardProps } from "@/app.types";

import litsenziya from "../public/Imgs/License.svg"
import Accreditation from "../public/Imgs/Accreditation.svg"
import Konsulting from "../public/Imgs/Konsulting.svg"
import Malaka from "../public/Imgs/Malaka.svg"



export const getServices: ServiceCardProps[] = [
  {
    icon: litsenziya,
    title: "Litsenziyalash",
    description:
      "Markangizni tibbiyot muassasalariga litsenziya olishda yordam beradi. Hujjat tayyorlash, ariza topshirish",
    link: "#",
  },
  {
    icon: Accreditation,
    title: "Akkreditatsiyalash",
    description:
      "Tibbiyot tashkilotlarining xizmat sifatini baholaymiz va akkreditatsiya qilishni ta'minlaymiz",
    link: "#",
  },
  {
    icon: Konsulting,
    title: "Konsalting xizmati",
    description:
      "Klinikalar va shifoxonalar tashkil etish jarayonida huquqiy, metodik va texnik maslahatlar beramiz",
    link: "#",
  },
  {
    icon: Malaka,
    title: "Malaka oshirish",
    description:
      "Shifokorlar, tibbiyot xodimlari va boshqalar uchun malaka oshirish kurslarini tashkil etamiz",
    link: "#",
  },
];