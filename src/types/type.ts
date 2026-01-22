import { StaticImageData } from "next/image";

export interface MainServiceCardProps {
    icon: string;
    title: string;
    description: string;
    link: string;
  }

  export interface platformsMain {
    id?:string,
    title: string,
    description: string,
    buttonText: string,
    buttonLink: string,
    phoneTitle:string,
    phoneNumber: number,
    image: string,
  }

  export interface commentOpinion {
    icons: string,
    subtitle:string,
    description: string,
  }

  export interface cardComments{
    id?:string,
    img: string,
    name: string,
    title: string,
    badge: string,
    staricon: string,
    time: string,
    comment: string
  }

  export type Language = {
    code: string;
    label: string;
    flag: string | StaticImageData;
  };



  export type NumbersType = {
  consulting_number: string;
  licenses_number: string;
  clinics_number: string;
};

export type StatsType = {
  id: number;
  consulting_number: string;
  licenses_number: string;
  clinics_number: string;
  created_at: string;
  updated_at: string;
};

export type AccreditationType = {
  id: number;
  page_name: string;
  page_name_en?: string;
  page_name_ru?: string;
  page_name_uz?: string;
  page_link: string;
  page_link_en?: string;
  page_link_ru?: string;
  page_link_uz?: string;
  content: string;
  created_at?: string;
  updated_at?: string;
};
