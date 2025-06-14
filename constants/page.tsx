import { Department, ServiceCardProps, TeamMember } from "@/app.types";

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
    description:
      "Yurak va qon tomir tizimi kasalliklarini tashxislash va davolash bo'limi.",
  },
  {
    id: 2,
    title: "Nevrologiya",
    description: "Asab tizimi kasalliklarini tashxislash va davolash bo'limi.",
  },
  {
    id: 3,
    title: "Gastroenterologiya",
    description:
      "Oshqozon-ichak trakti kasalliklarini tashxislash va davolash bo'limi.",
  },
];

export const getTeamCarousel: TeamMember[] = [
  {
    id: 1,
    name: "Dr. John Smith",
    position: "Kardiolog",
    description: "20 yillik tajribaga ega yurak kasalliklari bo‘yicha yetakchi mutaxassis.",
    image: "/team/2.webp",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    position: "Nevrolog",
    description: "Asab tizimi kasalliklarini davolashda 15 yillik tajribaga ega shifokor.",
    image: "/team/4.avif",
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    position: "Gastroenterolog",
    description: "Oshqozon-ichak muammolari bo‘yicha malakali mutaxassis.",
    image: "/team/2.webp",
  },
  {
    id: 4,
    name: "Dr. Michael Lee",
    position: "Nevrolog",
    description: "Miya insultlari va surunkali bosh og‘riqlari bo‘yicha ixtisoslashgan.",
    image: "/team/4.avif",
  },
  {
    id: 5,
    name: "Dr. Sarah Kim",
    position: "Gastroenterolog",
    description: "Ichki kasalliklar va ovqat hazm qilish muammolarini davolashda tajribali.",
    image: "/team/2.webp",
  },
];
