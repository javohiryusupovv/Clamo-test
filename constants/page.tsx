import {
  Department,
  ServiceCardProps,
  TeamMember,
  MedicalLegalProps,
  Partner,
  FAQItem,
  DoctorImg,
  enterThePortal,
  backgroundImage,
  FilterItem,
  PaginatedDataItem,
  Imagee,
  ContactData,
  SochealMedia,
} from "../app.types";

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
    icon: "/Imgs/Malaka.svg",
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
    description:
      "20 yillik tajribaga ega yurak kasalliklari bo‘yicha yetakchi mutaxassis.",
    image: "/team/2.webp",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    position: "Nevrolog",
    description:
      "Asab tizimi kasalliklarini davolashda 15 yillik tajribaga ega shifokor.",
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
    description:
      "Miya insultlari va surunkali bosh og‘riqlari bo‘yicha ixtisoslashgan.",
    image: "/team/4.avif",
  },
  {
    id: 5,
    name: "Dr. Sarah Kim",
    position: "Gastroenterolog",
    description:
      "Ichki kasalliklar va ovqat hazm qilish muammolarini davolashda tajribali.",
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
];

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
    question: "Есть ли бесплатные материалы?",
    answer:
      'Да, мы предлагаем ряд бесплатных курсов и лекций, чтобы вы могли ознакомиться с качеством наших материалов и методик. Бесплатные материалы доступны в разделе "Бесплатные курсы" и включают как видеоуроки, так и аудиолекции. Вы можете начать обучение с бесплатных материалов и затем перейти к более углубленным платным курсам.',
  },
  {
    question: "Как записаться на курс?",
    answer:
      'Вы можете записаться на курс, выбрав интересующий вас курс и нажав кнопку "Записаться". Далее следуйте инструкциям на экране.',
  },
  {
    question: "Можно ли получить сертификат по окончании курса?",
    answer:
      "Да, после успешного завершения курса и выполнения всех заданий вы получите сертификат.",
  },
  {
    question: "Как я могу связаться с поддержкой?",
    answer:
      "Вы можете связаться с нашей службой поддержки через форму обратной связи на сайте или по электронной почте support@example.com.",
  },
  {
    question: "Нужно ли подключение к интернету для использования приложения?",
    answer:
      "Да, для полноценной работы приложения требуется стабильное подключение к интернету.",
  },
  {
    question: "Можно ли вернуть деньги за приобретенный курс?",
    answer:
      "Да, вы можете оформить возврат средств в течение 14 дней после покупки при соблюдении условий возврата.",
  },
  {
    question: "Как часто обновляются курсы?",
    answer:
      "Мы регулярно обновляем курсы, чтобы они соответствовали последним изменениям и требованиям.",
  },
  {
    question: "Есть ли ограничения по возрасту для пользователей приложения?",
    answer: "Приложение предназначено для пользователей старше 16 лет.",
  },
];

export const getHamkorlar = [
  {
    icon: "/icons/1inter.png",
    title: "Akkreditatsiyalash",
    desc: "Tibbiyot tashkilotlarini akkreditatsiyalash va sifat menejmenti sohasida xalqaro hamkorlikni mustahkamlash maqsadida Hindiston Respublikasi Kasalxonalar va sog'liqni saqlash xizmatlarini akkreditatsiyalash milliy kengashi (NABH) bilan anglashuv memorandumi imzolandi. Ushbu memorandum tajriba almashinuvi, o'quv dasturlari va sifat standartlarini uyg'unlashtirish bo'yicha hamkorlikni nazarda tutadi.",
  },
  {
    icon: "/icons/litsenziyaicons.png",
    title: "Litsenziyalash",
    desc: "Qozog'iston Respublikasi bilan hamkorlikda tibbiyot sohasida litsenziyalash tizimini takomillashtirishga qaratilgan qo'shma loyiha amalga oshirilmoqda. Loyihaning asosiy maqsadi — ikki davlat tajribasini o'rganish, ilg'or xalqaro standartlar asosida litsenziyalash jarayonini raqamlashtirish va tibbiyot tashkilotlariga qulay, ochiq va samarali tizim yaratishdan iborat.",
  },
  {
    icon: "/icons/memorandum.png",
    title: "Memorandum",
    desc: '"CLAMO" loyihasi tibbiyot sohasida hamkorlikni rivojlantirishga qaratilgan platformadir. Ushbu loyiha tibbiyot mutaxassislari, tadqiqotchilar va tibbiy tashkilotlarni bir joyga jamlab, ularning o\'zaro tajriba almashishiga, ilmiy hamkorlikni kuchaytirishga va innovatsion yechimlar ishlab chiqishiga yordam beradi.',
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
  woman: "/Images/woman.png",
};

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

export const getFilter: FilterItem[] = [
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

export const getPaginatedData: PaginatedDataItem[] = [
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
    license_btn: "Litsenziyani ko'rish",
    accreditation_name: "Akkreditatsiya raqami",
    accreditation_number: "L-29082988",
    website: "Vabsayt",
    websiteName: "Alfaterapia.uz",
    websiteLink: "http://Alfaterapia.uz",
    email: "alfaterapiya@mail.ru",
    phoneNumber: "Telfon raqam",
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
    license_btn: "Litsenziyani ko'rish",
    accreditation_name: "Akkreditatsiya raqami",
    accreditation_number: "L-29082988",
    website: "Vabsayt",
    websiteName: "Alfaterapia.uz",
    websiteLink: "http://Alfaterapia.uz",
    email: "alfaterapiya@mail.ru",
    phoneNumber: "Telfon raqam",
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
    license_btn: "Litsenziyani ko'rish",
    accreditation_name: "Akkreditatsiya raqami",
    accreditation_number: "L-29082988",
    website: "Vabsayt",
    websiteName: "Alfaterapia.uz",
    websiteLink: "http://Alfaterapia.uz",
    email: "alfaterapiya@mail.ru",
    phoneNumber: "Telfon raqam",
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
    license_btn: "Litsenziyani ko'rish",
    accreditation_name: "Akkreditatsiya raqami",
    accreditation_number: "L-29082988",
    website: "Vabsayt",
    websiteName: "Alfaterapia.uz",
    websiteLink: "http://Alfaterapia.uz",
    email: "alfaterapiya@mail.ru",
    phoneNumber: "Telfon raqam",
    phone: "+998712007007",
    comment: "Sharhlar",
    comment_number: 100,
  },
];

export const getImg: Imagee[] = [
  {
    id: 1,
    img: "https://utmlgylkkghbjocewude.supabase.co/storage/v1/object/sign/data/EcommerImage/LogoClamo.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNjAzNzdiYS0xZjNjLTRkODUtOTA3OS1mNzVlZDdiOTk4NDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYXRhL0Vjb21tZXJJbWFnZS9Mb2dvQ2xhbW8uc3ZnIiwiaWF0IjoxNzQ5OTIzMjM2LCJleHAiOjE3ODE0NTkyMzZ9.TvDECpUdKZcKIWJOd6SbgHh8yu4X3Iys82jQyLK1QkA",
  },
];
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
