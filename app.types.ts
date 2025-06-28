export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
};

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  description: string;
}

export interface NewsType {
  id: number;
  slug: string;
  title: string;
  title_uz: string;
  created_at: string;
  image: string;
}

export interface MedicalLegalProps {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  bgCircle: string;
  clamoFlag: string;
}

export type Partner = {
  id: number;
  image: string;
  title: string;
};

export type AccordionItemProps = {
  title: string;
  content: string;
  link?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type CardData = {
  title: string;
  description: string;
};

export type DoctorImg = {
  man: string;
  woman: string;
};

export interface enterThePortal {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface backgroundImage {
  id: number;
  bgImg: string;
}

export interface FilterItem {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
}

export interface ReyesterType {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  slug: string;
  name_uz: string;
  name_en: string;
  name_ru: string; 
  
}
export interface PaginatedDataItem {
  id: number;
  reyester_type: ReyesterType[];
  data: string;
  dayMonthYear: string;
  emailLocation: string;
  created_at: string;
  updated_at: string;
  title: string;
  location: string;
  accreditation_name: string;
  license_btn: string;
  accreditation_number: string;
  website: string;
  websiteName: string;
  websiteLink: string;
  email: string;
  phoneNumber: string;
  phone: string;
  comment: string;
  comment_number: number;
}

export interface Imagee {
  id: number;
  img: string;
}

export interface ContactData {
  phone: string;
  email: string;
  website: string;
  address: string;
}

export interface SochealMedia {
  id: number;
  icon: string;
  name: string;
  link: string;
}

export interface PlatformsServiceProps {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  phoneTitle: string;
  phoneNumber: string;
  image: string;
}

export interface OpinionCard {
  id: number;
  icons: string;
  subtitle: string;
  description: string;
}

export interface CardComment {
  id: number;
  img: string;
  name: string;
  title: string;
  badge: string;
  staricon: string;
  time: string;
  comment: string;
}

export interface NewsTypes {
  id: number;
  slug: string;
  title: string;
  title_uz: string;
  created_at: string;
  image: string;
  description: string;
}

export interface CarouselData {
  title: string;
  description: string;
}

export interface FaqItem {
  id: number;
  question: string;
  question_uz: string;
  question_en: string;
  question_ru: string;
  answer: string;
  answer_uz: string;
  answer_en: string;
  answer_ru: string;
}

export interface ServiceData {
  id: number;
  title: string;
  title_uz: string;
  title_en: string;
  title_ru: string;
  description: string;
  description_uz: string;
  description_en: string;
  description_ru: string;
  icon: string;
  created_at?: string;
  updated_at?: string;
}

export interface TeamMembers {
  id: number;
  created_at: string;
  updated_at: string;
  image: string;
  full_name: string;
  full_name_uz: string;
  full_name_en: string;
  full_name_ru: string;
  description: string;
  description_uz: string;
  description_en: string;
  description_ru: string;
}

export interface Department {
  id: number;
  created_at: string; 
  updated_at: string;
  icon: string; 
  title: string;
  title_uz: string;
  title_en: string;
  title_ru: string;
  description: string;
}


export interface ReyesterItem {
  id: number;
  title_uz: string;
  title: string;
  title_en: string;
  title_ru: string;
  location_uz: string;
  location: string;
  location_en: string;
  location_ru: string;
  accreditation_number: string;
  registration_date: string;
  reyester_type?: ReyesterType[]; // Reyester turi, optional
  website: string;
  email: string;
  phone: string;
  type: string; // Reyester turi
  reviews: string
}

export interface StepType {
  icon: string;
  title: string;
  title_uz: string;
  title_en: string;
  title_ru: string;
  description: string;
  description_uz: string;
  description_en: string;
  description_ru: string;
}
