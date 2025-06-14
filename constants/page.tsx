import { Department, ServiceCardProps, TeamMember, MedicalLegalProps } from "@/app.types";

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

export const getMedical: MedicalLegalProps[] = [
        {
      subtitle: "Sizning sog'lig'ingiz biz uchun",
      badge: "Muhim!",
      title: "CLAMO bilan tibbiy faoliyatingizni qonuniylashtiring!",
      description:
        "Biz tibbiy tashkilotlarga O'zbekistonda ruxsatnoma va litsenziya olishda yordam beramiz. CLAMO bilan faoliyatingizni qonuniy boshlang va sifatli xizmat ko'rsatishga yo'l oching!",
      bgCircle: "/images/twoCircle.png",
      clamoFlag: "@/assets/flag/flag1.png",
    },
]

export const getPlatforms = [
  {
    id: 1,
    title: "Litsenziyalash va akkreditatsiyalash platformasiga o‘ting",
    description: "Soha bo‘yicha har qanday savolingizga javob beramiz",
    buttonText: "Platformaga kirish",
    buttonLink: "#",
    phoneTitle: "Qisqa raqam",
    phoneNumber: "1369",
    image: "/Imgs/Mockup.png",
  },
];

export const getCardComment = [
    {
      id: 1,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 2,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 3,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 4,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 5,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 6,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 7,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 8,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
  ];

export const getOpinion = [
    {
      id: 1,
      icons: "/Imgs/sharh-logo.png",
      subtitle: "Fikr-mulohazalar",
      description:
        "O‘z fikr-mulohazalaringizni platformada qoldirishingiz mumkin",
    },
  ];
