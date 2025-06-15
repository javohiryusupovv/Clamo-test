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