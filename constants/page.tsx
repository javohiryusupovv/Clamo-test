import { Department, ServiceCardProps, MedicalLegalProps,Partner,FAQItem,DoctorImg,enterThePortal,backgroundImage,FilterItem,PaginatedDataItem,Imagee,ContactData,SochealMedia } from "../app.types";

// import { TFunction } from "next-intl";
type TFunction = (key: string) => string;

export const getServices = (t: TFunction): ServiceCardProps[] => [
  {
    icon: "/Imgs/License.svg",
    title: t("services.license.title"),
    description: t("services.license.description"),
    link: "#",
  },
  {
    icon: "/Imgs/Accreditation.svg",
    title: t("services.acredetion.title"),
    description: t("services.acredetion.description"),
    link: "#",
  },
  {
    icon: "/Imgs/Konsulting.svg",
    title: t("services.consult.title"),
    description: t("services.consult.description"),
    link: "#",
  },
  {
    icon: "/Imgs/Malaka.svg",
    title: t("services.malaka.title"),
    description: t("services.malaka.description"),
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

export const getHamkorlar=(t: TFunction) => [
  {
    icon: "/icons/1inter.png",
    title: t("Hamkorlar.akredatsiyalash.title"),
    desc: t("Hamkorlar.akredatsiyalash.description"),
  },
  {
    icon: "/icons/litsenziyaicons.png",
    title:t("Hamkorlar.litsensiyalash.title"),
    desc:t("Hamkorlar.litsensiyalash.description"),
  },
  {
    icon: "/icons/memorandum.png",
    title:t("Hamkorlar.memorandum.title"),
    desc: t("Hamkorlar.memorandum.description"),
  },
];

export const getSteps = [
  {
    icon: "/Images/img1.png",
    title: "Ariza topshirish",
    description:
      "Markazning rasmiy platformasi orqali litsenziya olish uchun murojaat qilish",
  },
  {
    icon: "/Images/img2.png",
    title: "Hujjatlarni tekshirish",
    description:
      "Muassasaning sanitariya, texnik va huquqiy talablariga muvofiqligini tekshirish",
  },
  {
    icon: "/Images/img3.png",
    title: "Ekspert baholovi",
    description: "Mutaxassislar tomonidan tayyorgarlik darajasini baholash",
  },
  {
    icon: "/Images/img4.png",
    title: "Litsenziya qarori",
    description:
      "Talablar bajarilganda muassasalarga rasmiy litsenziya beriladi",
  },
];

export const getcardData = [
  {
    title: "Litsenziyalash",
    description:
      "Markazimiz tibbiyot tashkilotlarining litsenziyalash jarayonini boshqaradi va rasmiy hujjatlarni tayyorlashda yordam beradi. Bizning maqsadimiz — tibbiyot muassasalarining faoliyatini qonuniy va xavfsiz amalga oshirishini ta’minlashdir.",
  },
  {
    title: "Akkreditatsiyalash",
    description:
      "Akkreditatsiya tibbiyot muassasalarining xizmat sifatini va xavfsizligini baholash va xalqaro standartlarga mosligini tasdiqlash jarayonidir. Markazimiz bu jarayonni samarali tashkil etish va tibbiyot sohasining sifatini yaxshilashga yordam beradi.",
  },
  {
    title: "Malaka oshirish",
    description:
      "Shifokorlar va tibbiyot xodimlari uchun malaka oshirish kurslari orqali ularning bilim va ko‘nikmalarini muntazam yangilashga ko‘maklashamiz.",
  },
  {
    title: "Litsenziyalash",
    description:
      "Markazimiz tibbiyot tashkilotlarining litsenziyalash jarayonini boshqaradi va rasmiy hujjatlarni tayyorlashda yordam beradi. Bizning maqsadimiz — tibbiyot muassasalarining faoliyatini qonuniy va xavfsiz amalga oshirishini ta’minlashdir.",
  },
  {
    title: "Akkreditatsiyalash",
    description:
      "Akkreditatsiya tibbiyot muassasalarining xizmat sifatini va xavfsizligini baholash va xalqaro standartlarga mosligini tasdiqlash jarayonidir. Markazimiz bu jarayonni samarali tashkil etish va tibbiyot sohasining sifatini yaxshilashga yordam beradi.",
  },
  {
    title: "Malaka oshirish",
    description:
      "Shifokorlar va tibbiyot xodimlari uchun malaka oshirish kurslari orqali ularning bilim va ko‘nikmalarini muntazam yangilashga ko‘maklashamiz.",
  },
];

export const getDoctorImg: DoctorImg = {
  man: "/Images/man.png",
  woman: "/Images/woman.png"
}

export const getLicense: enterThePortal[] = [
  {
    id: 1,
    title: "Ariza topshirish",
    description:
      "Markazning rasmiy platformasi orqali litsenziya olish uchun murojaat qilish",
    icon: "/Vector2.png",
  },
  {
    id: 2,
    title: "Hujjatlarni tekshirish",
    description:
      "Muassasning sanitariya, texnik va huquqiy talablariga muvofiqligini tekshirish",
    icon: "/Vector.png",
  },
  {
    id: 3,
    title: "Ekspert baholovi",
    description: "Mutaxassislar tomonidan tayyorgarlik darajasini baholash",
    icon: "/Vector3.png",
  },
  {
    id: 4,
    title: "Litsenziya qarori",
    description:
      "Talablar bajarilganda muassasalarga rasmiy litsenziya beriladi",
    icon: "/Vector4.png",
  },
];

export const getBgImg: backgroundImage[] = [
  {
    id: 1,
    bgImg: "/Bg.png",
  },
];

export const getFilter:FilterItem[] = [
  {
    id: 2,
    created_at: "2025-06-12T10:10:57.941260Z",
    updated_at: "2025-06-12T10:10:57.941280Z",
    name: "Ariza topshirish",
  },
  {
    id: 1,
    created_at: "2025-06-10T10:28:57.997185Z",
    updated_at: "2025-06-12T10:11:20.437644Z",
    name: "Litsenziya qarori",
  },
  {
    id: 3,
    created_at: "2025-06-13T14:11:24.372312Z",
    updated_at: "2025-06-13T14:11:24.372335Z",
    name: "Hujjatni tekshirish",
  },
  {
    id: 4,
    created_at: "2025-06-13T14:13:01.719466Z",
    updated_at: "2025-06-13T14:13:01.719490Z",
    name: "Ekspert baholovi",
  },
];

export const getPaginatedData:PaginatedDataItem[] = [
  {
    id: 1,
    reyester_type: [
      {
        id: 1,
        created_at: "2025-06-10T10:28:57.997185Z",
        updated_at: "2025-06-12T10:11:20.437644Z",
        name: "Muddatni uzaytirish",
      },
    ],
    data: "Akkreditsiya berilgan sana",
    dayMonthYear: "12.12.2024",
    emailLocation: "Email manzil",
    created_at: "2025-06-10T10:29:44.944262Z",
    updated_at: "2025-06-10T10:29:44.944285Z",
    title: '"ALFA TERAPIYA" mas`uliyati cheklangan jamiyati',
    location: "Andijon viloyati, Andijon sh. 3-kichik daha, 38-uy, 46-manzil",
    accreditation_number: "L-29082988",
    website: "Vabsayt",
    websiteName: "Alfaterapia.uz",
    websiteLink: "http://Alfaterapia.uz",
    email: "alfaterapiya@mail.ru",
    phone: "+998712007007",
    comment: "Sharhlar",
    comment_number: 100,
  },
  {
    id: 2,
    reyester_type: [
      {
        id: 1,
        created_at: "2025-06-10T10:28:57.997185Z",
        updated_at: "2025-06-12T10:11:20.437644Z",
        name: "Hujjatni o’zgartirish",
      },
    ],
    data: "Akkreditsiya berilgan sana",
    dayMonthYear: "12.12.2024",
    emailLocation: "Email manzil",
    created_at: "2025-06-10T10:29:44.944262Z",
    updated_at: "2025-06-10T10:29:44.944285Z",
    title: '"ALFA TERAPIYA" mas`uliyati cheklangan jamiyati',
    location: "Andijon viloyati, Andijon sh. 3-kichik daha, 38-uy, 46-manzil",
    accreditation_number: "L-29082988",
    website: "Vabsayt",
    websiteName: "Alfaterapia.uz",
    websiteLink: "http://Alfaterapia.uz",
    email: "alfaterapiya@mail.ru",
    phone: "+998712007007",
    comment: "Sharhlar",
    comment_number: 100,
  },
  {
    id: 3,
    reyester_type: [
      {
        id: 1,
        created_at: "2025-06-10T10:28:57.997185Z",
        updated_at: "2025-06-12T10:11:20.437644Z",
        name: "Faoliyatni tugatish",
      },
    ],
    data: "Akkreditsiya berilgan sana",
    dayMonthYear: "12.12.2024",
    emailLocation: "Email manzil",
    created_at: "2025-06-10T10:29:44.944262Z",
    updated_at: "2025-06-10T10:29:44.944285Z",
    title: '"ALFA TERAPIYA" mas`uliyati cheklangan jamiyati',
    location: "Andijon viloyati, Andijon sh. 3-kichik daha, 38-uy, 46-manzil",
    accreditation_number: "L-29082988",
    website: "Vabsayt",
    websiteName: "Alfaterapia.uz",
    websiteLink: "http://Alfaterapia.uz",
    email: "alfaterapiya@mail.ru",
    phone: "+998712007007",
    comment: "Sharhlar",
    comment_number: 100,
  },
  {
    id: 4,
    reyester_type: [
      {
        id: 1,
        created_at: "2025-06-10T10:28:57.997185Z",
        updated_at: "2025-06-12T10:11:20.437644Z",
        name: "Qayta ro’yxat",
      },
    ],
    data: "Akkreditsiya berilgan sana",
    dayMonthYear: "12.12.2024",
    emailLocation: "Email manzil",
    created_at: "2025-06-10T10:29:44.944262Z",
    updated_at: "2025-06-10T10:29:44.944285Z",
    title: '"ALFA TERAPIYA" mas`uliyati cheklangan jamiyati',
    location: "Andijon viloyati, Andijon sh. 3-kichik daha, 38-uy, 46-manzil",
    accreditation_number: "L-29082988",
    website: "Vabsayt",
    websiteName: "Alfaterapia.uz",
    websiteLink: "http://Alfaterapia.uz",
    email: "alfaterapiya@mail.ru",
    phone: "+998712007007",
    comment: "Sharhlar",
    comment_number: 100,
  },
];

export const getImg: Imagee[] = [
  {
    id:1,
    img:"https://utmlgylkkghbjocewude.supabase.co/storage/v1/object/sign/data/EcommerImage/LogoClamo.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNjAzNzdiYS0xZjNjLTRkODUtOTA3OS1mNzVlZDdiOTk4NDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYXRhL0Vjb21tZXJJbWFnZS9Mb2dvQ2xhbW8uc3ZnIiwiaWF0IjoxNzQ5OTIzMjM2LCJleHAiOjE3ODE0NTkyMzZ9.TvDECpUdKZcKIWJOd6SbgHh8yu4X3Iys82jQyLK1QkA"
  }
]
export const getContactInfo: ContactData[] = [
  {
    phone: "+998 (55) 514 30 03",
    email: "clamosocial@gmail.com",
    website: "Clamo.uz",
    address: "улица Мирзакалон Исмоилий, дом 2A",
  },
];

export const getSochealMedia: SochealMedia[] = [
  {
    id: 1,
    name: "Telegram",
    icon: "/icons/telegram.png",
    link: "t.me/CLAMO_uz",
  },
  {
    id: 2,
    name: "Instagram",
    icon: "/icons/instagram.png",
    link: "@clamo.uz",
  },
  {
    id: 3,
    name: "Facebook",
    icon: "/icons/facebook.png",
    link: "@CLAMORasmiy",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: "/icons/instagram.png",
    link: "@CLAMO Social",
  },
];

export const getsocialLinks = [
    {
      href: "https://facebook.com",
      icon: (
        <svg className="w-6 h-6 fill-[#0650C3] group-hover:fill-white transition" viewBox="0 0 24 24">
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
        </svg>
      ),
    },
    {
      href: "https://twitter.com",
      icon: (
        <svg className="w-6 h-6 fill-[#0650C3] group-hover:fill-white transition" viewBox="0 0 24 24">
          <path d="M24 4.557a9.847 9.847 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.868 9.868 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.373 4.482A13.957 13.957 0 0 1 1.671 3.149a4.915 4.915 0 0 0 1.523 6.556A4.902 4.902 0 0 1 .964 9.1v.061a4.918 4.918 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.212.084 4.922 4.922 0 0 0 4.6 3.42A9.867 9.867 0 0 1 0 21.539a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.01-7.512 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
        </svg>
      ),
    },
    {
      href: "https://instagram.com",
      icon: (
        <svg className="w-6 h-6 fill-[#0650C3] group-hover:fill-white transition" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.36 3.608 1.335.975.975 1.273 2.242 1.335 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.36 2.633-1.335 3.608-.975.975-2.242 1.273-3.608 1.335-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.36-3.608-1.335-.975-.975-1.273-2.242-1.335-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.36-2.633 1.335-3.608C4.543 2.593 5.81 2.295 7.176 2.233 8.441 2.175 8.821 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.672.132 4.333.456 3.276 1.514 2.218 2.571 1.893 3.911 1.833 5.291.775 6.669.763 7.078.763 12s.012 5.331.07 6.61c.06 1.38.385 2.719 1.443 3.776 1.057 1.057 2.396 1.382 3.776 1.443 1.279.058 1.688.07 6.61.07s5.331-.012 6.61-.07c1.38-.06 2.719-.385 3.776-1.443 1.057-1.057 1.382-2.396 1.443-3.776.058-1.279.07-1.688.07-6.61s-.012-5.331-.07-6.61c-.06-1.38-.385-2.719-1.443-3.776-1.057-1.057-2.396-1.382-3.776-1.443C15.668.014 15.259 0 12 0z"/>
          <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
        </svg>
      ),
    },
    {
      href: "https://linkedin.com",
      icon: (
        <svg className="w-6 h-6 fill-[#0650C3] group-hover:fill-white transition" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.849-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.356V9h3.414v1.561h.048c.476-.9 1.637-1.849 3.372-1.849 3.604 0 4.271 2.372 4.271 5.456v6.284zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.144 0 2.07.926 2.07 2.07 0 1.143-.926 2.07-2.07 2.07zM6.814 20.452H3.861V9h2.953v11.452z"/>
        </svg>
      ),
    },
  ];