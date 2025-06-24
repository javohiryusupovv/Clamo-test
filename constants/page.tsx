import {
  ServiceCardProps,
  TeamMember,
  MedicalLegalProps,
  Partner,
  FAQItem,
  DoctorImg,
  enterThePortal,
  backgroundImage,
  ContactData,
  SochealMedia,
  PlatformsServiceProps,
  OpinionCard,
  CardComment,
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


export const getCardComment = (t:TFunction): CardComment[] => [
  {
    id: 1,
    img: "/Imgs/Umid.png",
    name: t("cardComment.name"),
    title: t("cardComment.title"),
    badge: t("cardComment.badge"),
    staricon: "/Imgs/Stars.png",
    time: t("cardComment.time"),
    comment: t("cardComment.comment"),
  },
    {
        id: 2,
        img: "/Imgs/Umid.png",
        name: t("cardComment.name"),
        title: t("cardComment.title"),
        badge: t("cardComment.badge"),
        staricon: "/Imgs/Stars.png",
        time: t("cardComment.time"),
        comment: t("cardComment.comment"),
    },
    {
        id: 3,
        img: "/Imgs/Umid.png",
        name: t("cardComment.name"),
        title: t("cardComment.title"),
        badge: t("cardComment.badge"),
        staricon: "/Imgs/Stars.png",
        time: t("cardComment.time"),
        comment: t("cardComment.comment"),
    },
    {
        id: 4,
        img: "/Imgs/Umid.png",
        name: t("cardComment.name"),
        title: t("cardComment.title"),
        badge: t("cardComment.badge"),
        staricon: "/Imgs/Stars.png",
        time: t("cardComment.time"),
        comment: t("cardComment.comment"),
    },
    {
        id: 5,
        img: "/Imgs/Umid.png",
        name: t("cardComment.name"),
        title: t("cardComment.title"),
        badge: t("cardComment.badge"),
        staricon: "/Imgs/Stars.png",
        time: t("cardComment.time"),
        comment: t("cardComment.comment"),
    },
    {
        id: 6,
        img: "/Imgs/Umid.png",
        name: t("cardComment.name"),
        title: t("cardComment.title"),
        badge: t("cardComment.badge"),
        staricon: "/Imgs/Stars.png",
        time: t("cardComment.time"),
        comment: t("cardComment.comment"),
    },
    {
        id: 7,
        img: "/Imgs/Umid.png",
        name: t("cardComment.name"),
        title: t("cardComment.title"),
        badge: t("cardComment.badge"),
        staricon: "/Imgs/Stars.png",
        time: t("cardComment.time"),
        comment: t("cardComment.comment"),
    },
    {
        id: 8,
        img: "/Imgs/Umid.png",
        name: t("cardComment.name"),
        title: t("cardComment.title"),
        badge: t("cardComment.badge"),
        staricon: "/Imgs/Stars.png",
        time: t("cardComment.time"),
        comment: t("cardComment.comment"),
    },
];

export const getOpinion = (t:TFunction): OpinionCard[] => [
  {
    id: 1,
    icons: "/Imgs/sharh-logo.png",
    subtitle: t("comments.thought"),
    description: t("comments.your_opinion"),
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
  woman: "/Images/woman.png",
};
// arizatopshirish
export const getLicense = (t:TFunction): enterThePortal[] => [
  {
    id: 1,
    title: t("document.application_title"),
    description:
      t("document.application_description"),
    icon: "/Vector2.png",
  },
  {
    id: 2,
    title: t("document.documents_title"),
    description:t("document.documents_description"),
    icon: "/Vector.png",
  },
  {
    id: 3,
    title: t("document.expert_title"),
    description: t("document.expert_description"),
    icon: "/Vector3.png",
  },
  {
    id: 4,
    title: t("document.license_title"),
    description: t("document.license_description"),
    icon: "/Vector4.png",
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
