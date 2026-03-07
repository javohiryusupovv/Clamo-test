import {
  ServiceCardProps,
  TeamMember,
  MedicalLegalProps,
  FAQItem,
  DoctorImg,
  enterThePortal,
  backgroundImage,
  ContactData,
  SochealMedia,
  PlatformsServiceProps,
  OpinionCard,
  CardComment,
  StepType,
} from "../app.types";

type TFunction = (key: string) => string;

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

export const getMedical = (t: TFunction): MedicalLegalProps[] => [
  {
    subtitle: t("medical.subtitle"),
    badge: t("medical.badge"),
    title: t("medical.title"),
    description: t("medical.description"),
    bgCircle: "/images/twoCircle.png",
    clamoFlag: "@/assets/flag/flag1.png",
  },
];

export const getPlatforms = (t: TFunction): PlatformsServiceProps[] => [
  {
    id: 1,
    title: t("main.title"),
    description: t("main.description"),
    buttonText: t("main.button"),
    buttonLink: "#",
    phoneTitle: t("main.phone"),
    phoneNumber: "1369",
    image: "/Imgs/Mockup.png",
  },
];

export const getCardComment = (t: TFunction): CardComment[] => [
  {
    id: 1,
    img: "/Imgs/dilorom.png",
    name: t("cardComment.name_one"),
    staricon: "/Imgs/Stars.png",
    time: t("cardComment.time_one"),
    comment: t("cardComment.comment_one"),
    fikr: t("cardComment.fikr"),
  },
  {
    id: 2,
    img: "/Imgs/murod.png",
    name: t("cardComment.name_two"),
    staricon: "/Imgs/Stars.png",
    time: t("cardComment.time_two"),
    comment: t("cardComment.comment_two"),
    fikr: t("cardComment.fikr"),

  },
  {
    id: 3,
    img: "/Imgs/maftuna.jpg",
    name: t("cardComment.name_three"),
    staricon: "/Imgs/Stars.png",
    time: t("cardComment.time_three"),
    comment: t("cardComment.comment_three"),
    fikr: t("cardComment.fikr"),
  },
  {
    id: 4,
    img: "/Imgs/jasur.jpg",
    name: t("cardComment.name_four"),
    staricon: "/Imgs/Stars.png",
    time: t("cardComment.time_four"),
    comment: t("cardComment.comment_four"),
    fikr: t("cardComment.fikr"),
  },
  {
    id: 5,
    img: "/Imgs/nargiza2.jpg",
    name: t("cardComment.name_five"),
    staricon: "/Imgs/Stars.png",
    time: t("cardComment.time_five"),
    comment: t("cardComment.comment_five"),
    fikr: t("cardComment.fikr"),
  },
  {
    id: 6,
    img: "/Imgs/shaxnoza.jpg",
    name: t("cardComment.name_six"),
    staricon: "/Imgs/Stars.png",
    time: t("cardComment.time_six"),
    comment: t("cardComment.comment_six"),
    fikr: t("cardComment.fikr"),
  },
  {
    id: 7,
    img: "/Imgs/Umid.png",
    name: t("cardComment.name_seven"),
    staricon: "/Imgs/Stars.png",
    time: t("cardComment.time_seven"),
    comment: t("cardComment.comment_seven"),
    fikr: t("cardComment.fikr"),
  },
  {
    id: 8,
    img: "/Imgs/jas.webp",
    name: t("cardComment.name_eight"),
    staricon: "/Imgs/Stars.png",
    time: t("cardComment.time_eight"),
    comment: t("cardComment.comment_eight"),
    fikr: t("cardComment.fikr"),
  },
  {
    id: 9,
    img: "/Imgs/nargiza.jpg",
    name: t("cardComment.name_nine"),
    staricon: "/Imgs/Stars.png",
    time: t("cardComment.time_nine"),
    comment: t("cardComment.comment_nine"),
    fikr: t("cardComment.fikr"),
  },
];


export const getOpinion = (t: TFunction): OpinionCard[] => [
  {
    id: 1,
    icons: "/Imgs/sharh-logo.svg",
    subtitle: t("comments.thought"),
    description: t("comments.your_opinion"),
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

export const getHamkorlar = (t: TFunction) => [
  {
    icon: "/icons/1inter.svg",
    title: t("Hamkorlar.akredatsiyalash.title"),
    desc: t("Hamkorlar.akredatsiyalash.description"),
  },
  {
    icon: "/icons/litsenziyaicons.svg",
    title: t("Hamkorlar.litsensiyalash.title"),
    desc: t("Hamkorlar.litsensiyalash.description"),
  },
  {
    icon: "/icons/memorandum.svg",
    title: t("Hamkorlar.memorandum.title"),
    desc: t("Hamkorlar.memorandum.description"),
  },
];

export const getSteps: StepType[] = [
  {
    icon: "/Images/arizaicon.svg",
    title: "Ariza topshirish",
    title_uz: "Ariza topshirish",
    title_en: "Submit application",
    title_ru: "Подача заявления",
    description:
      "Markazning rasmiy platformasi orqali litsenziya olish uchun murojaat qilish",
    description_uz:
      "Markazning rasmiy platformasi orqali litsenziya olish uchun murojaat qilish",
    description_en:
      "Apply for a license through the official platform of the center",
    description_ru:
      "Подать заявление на получение лицензии через официальную платформу центра",
  },
  {
    icon: "/Images/checkicons.svg",
    title: "Hujjatlarni tekshirish",
    title_uz: "Hujjatlarni tekshirish",
    title_en: "Document verification",
    title_ru: "Проверка документов",
    description:
      "Muassasaning sanitariya, texnik va huquqiy talablariga muvofiqligini tekshirish",
    description_uz:
      "Muassasaning sanitariya, texnik va huquqiy talablariga muvofiqligini tekshirish",
    description_en:
      "Check compliance with the sanitary, technical and legal requirements of the institution",
    description_ru:
      "Проверка соответствия санитарным, техническим и правовым требованиям учреждения",
  },
  {
    icon: "/Images/expert.svg",
    title: "Ekspert baholovi",
    title_uz: "Ekspert baholovi",
    title_en: "Expert evaluation",
    title_ru: "Экспертная оценка",
    description: "Mutaxassislar tomonidan tayyorgarlik darajasini baholash",
    description_uz: "Mutaxassislar tomonidan tayyorgarlik darajasini baholash",
    description_en: "Assessment of the level of preparation by specialists",
    description_ru: "Оценка уровня подготовки специалистами",
  },
  {
    icon: "/Images/flagicons.svg",
    title: "Litsenziya qarori",
    title_uz: "Litsenziya qarori",
    title_en: "License decision",
    title_ru: "Решение о лицензии",
    description:
      "Talablar bajarilganda muassasalarga rasmiy litsenziya beriladi",
    description_uz:
      "Talablar bajarilganda muassasalarga rasmiy litsenziya beriladi",
    description_en:
      "Official licenses are issued to institutions when requirements are met",
    description_ru:
      "Официальные лицензии выдаются учреждениям при выполнении требований",
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
// arizatopshirish
export const getLicense = (t: TFunction): enterThePortal[] => [
  {
    id: 1,
    title: t("document.application_title"),
    description: t("document.application_description"),
    icon: "/license/ariza.svg",
  },
  {
    id: 2,
    title: t("document.documents_title"),
    description: t("document.documents_description"),
    icon: "/license/hujjat.svg",
  },
  {
    id: 3,
    title: t("document.expert_title"),
    description: t("document.expert_description"),
    icon: "/license/expert.svg",
  },
  {
    id: 4,
    title: t("document.license_title"),
    description: t("document.license_description"),
    icon: "/license/litsenziya.svg",
  },
];

export const getBgImg: backgroundImage[] = [
  {
    id: 1,
    bgImg: "/Bg.png",
  },
];

// export const getFilter: FilterItem[] = [
//   ... (removed, use getFilterFromAPI instead)
// ];

export const getContactInfo: ContactData[] = [
  {
    phone: "+998 (55) 514 30 03",
    email: "clamosocial@gmail.com",
    website: "Clamo.uz",
    address: "г. Ташкент, ул. Паркент, дом 51",
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

export const metadataContent = {
  uz: {
    title: "Litsenziyalash va Akkreditatsiyalash Markazi",
    description:
      "CLAMO — litsenziyalash va akkreditatsiyalash bo‘yicha xizmatlar ko‘rsatadigan davlat muassasasi. Ta'lim, sog‘liqni saqlash va boshqa sohalarda yuridik shaxslarni rasmiy ro‘yxatdan o‘tkazish va sifatini baholashga doir barcha jarayonlarni yengil va shaffof tarzda amalga oshiring.",
    ogDescription:
      "Davlat litsenziya va akkreditatsiya jarayonlarini raqamlashtirish va soddalashtirishga yo‘naltirilgan platforma. CLAMO orqali muassasangizni tez, qulay va shaffof tarzda ro‘yxatdan o‘tkazing.",
    twitterDescription:
      "Litsenziya va akkreditatsiyani CLAMO orqali tez, oson va ishonchli tarzda oling.",
  },
  ru: {
    title: "Центр лицензирования и аккредитации",
    description:
      "CLAMO — государственное учреждение, предоставляющее услуги по лицензированию и аккредитации. Упростите и сделайте прозрачными процессы регистрации и оценки качества юридических лиц в сферах образования, здравоохранения и других.",
    ogDescription:
      "Платформа для цифровизации и упрощения государственных процессов лицензирования и аккредитации. Зарегистрируйте вашу организацию быстро и удобно с Clamo.",
    twitterDescription:
      "Получите лицензию и аккредитацию быстро, легко и надёжно с CLAMO.",
  },
  en: {
    title: "Licensing and Accreditation Center",
    description:
      "CLAMO is a government institution providing licensing and accreditation services. Streamline and simplify the registration and quality assessment processes for legal entities in education, healthcare, and other sectors.",
    ogDescription:
      "A platform designed to digitize and simplify state licensing and accreditation procedures. Register your organization quickly and transparently with Clamo.",
    twitterDescription:
      "Get licensed and accredited quickly, easily, and reliably with CLAMO.",
  },
};
