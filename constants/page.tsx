import { Department, ServiceCardProps } from "@/app.types";



export const getServices: ServiceCardProps[] = [
  {
    icon: "/Imgs/License.svg",
    title: "Litsenziyalash",
    description:
      "Markangizni tibbiyot muassasalariga litsenziya olishda yordam beradi. Hujjat tayyorlash, ariza topshirish",
    link: "#",
  },
  {
    icon: "/Imgs/Accreditation.svg",
    title: "Akkreditatsiyalash",
    description:
      "Tibbiyot tashkilotlarining xizmat sifatini baholaymiz va akkreditatsiya qilishni ta'minlaymiz",
    link: "#",
  },
  {
    icon: "/Imgs/Konsulting.svg",
    title: "Konsalting xizmati",
    description:
      "Klinikalar va shifoxonalar tashkil etish jarayonida huquqiy, metodik va texnik maslahatlar beramiz",
    link: "#",
  },
  {
    icon: "/imgs/Malaka.svg",
    title: "Malaka oshirish",
    description:
      "Shifokorlar, tibbiyot xodimlari va boshqalar uchun malaka oshirish kurslarini tashkil etamiz",
    link: "#",
  },
];

export const getDepartments: Department[] = [
  {
    id: 1,
    title: "Kardiologiya",
    description: "Yurak va qon tomir tizimi kasalliklarini tashxislash va davolash bo'limi.",
  },
  {
    id: 2,
    title: "Nevrologiya",
    description: "Asab tizimi kasalliklarini tashxislash va davolash bo'limi.",
  },
  {
    id: 3,
    title: "Gastroenterologiya",
    description: "Oshqozon-ichak trakti kasalliklarini tashxislash va davolash bo'limi.",
  },
];
