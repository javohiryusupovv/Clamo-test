import { Department, ServiceCardProps, TeamMember, MedicalLegalProps,Partner,FAQItem } from "@/app.types";

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

export const getPartners: Partner[] = [
  {
    id: 1,
    image: "/logo/mytaxi.svg",
    title: "MyTaxi",
  },
  {
    id: 2,
    image: "/logo/sharhlogo.png",
    title: "Sharh.uz",
  },
  {
    id: 3,
    image: "/logo/uzsuvozi.svg",
    title: "Suv Ta'minoti",
  },
  {
    id: 4,
    image: "/logo/yoshlar.svg",
    title: "Yoshlar Ishlar Agentligi",
  },
  {
    id: 5,
    image: "/logo/yuridik.png",
    title: "Yuridik",
  },
  {
    id: 6,
    image: "/logo/mytaxi.svg",
    title: "MyTaxi",
  },
  {
    id: 7,
    image: "/logo/sharhlogo.png",
    title: "Sharh.uz",
  },
  {
    id: 8,
    image: "/logo/uzsuvozi.svg",
    title: "Suv Ta'minoti",
  },
  {
    id: 9,
    image: "/logo/yoshlar.svg",
    title: "Yoshlar Ishlar Agentligi",
  },
  {
    id: 10,
    image: "/logo/yuridik.png",
    title: "Yuridik",
  },
];

export const getfaqData: FAQItem[] = [
  {
    question: 'Есть ли бесплатные материалы?',
    answer: 'Да, мы предлагаем ряд бесплатных курсов и лекций, чтобы вы могли ознакомиться с качеством наших материалов и методик. Бесплатные материалы доступны в разделе "Бесплатные курсы" и включают как видеоуроки, так и аудиолекции. Вы можете начать обучение с бесплатных материалов и затем перейти к более углубленным платным курсам.',
  },
  {
    question: 'Как записаться на курс?',
    answer: 'Вы можете записаться на курс, выбрав интересующий вас курс и нажав кнопку "Записаться". Далее следуйте инструкциям на экране.',
  },
  {
    question: 'Можно ли получить сертификат по окончании курса?',
    answer: 'Да, после успешного завершения курса и выполнения всех заданий вы получите сертификат.',
  },
  {
    question: 'Как я могу связаться с поддержкой?',
    answer: 'Вы можете связаться с нашей службой поддержки через форму обратной связи на сайте или по электронной почте support@example.com.',
  },
  {
    question: 'Нужно ли подключение к интернету для использования приложения?',
    answer: 'Да, для полноценной работы приложения требуется стабильное подключение к интернету.',
  },
  {
    question: 'Можно ли вернуть деньги за приобретенный курс?',
    answer: 'Да, вы можете оформить возврат средств в течение 14 дней после покупки при соблюдении условий возврата.',
  },
  {
    question: 'Как часто обновляются курсы?',
    answer: 'Мы регулярно обновляем курсы, чтобы они соответствовали последним изменениям и требованиям.',
  },
  {
    question: 'Есть ли ограничения по возрасту для пользователей приложения?',
    answer: 'Приложение предназначено для пользователей старше 16 лет.',
  },
]; 