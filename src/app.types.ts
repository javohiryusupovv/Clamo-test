
export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface Department {
  id: number;
  title: string;
  description: string;
}

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

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
  title_uz?: string;
  created_at?: string;
  image?: string;
};

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
  accreditation_number: string;
  website: string;
  websiteName: string;
  websiteLink: string;
  email: string;
  phone: string;
  comment: string;
  comment_number: number;
}

export interface Imagee {
  id:number
  img:string;
}