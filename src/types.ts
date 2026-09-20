export type Lang = "en" | "fr";

export type LocalizedText = Record<Lang, string>;

export type CourseTopic = "tax" | "audit" | "finrep" | "tech" | "sust" | "lead";
export type CourseFormat = "ondemand" | "virtual" | "inperson" | "cert";

export interface Course {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  topic: CourseTopic;
  format: CourseFormat;
  hours: number;
  price: number;
  image: string;
}

export interface SavedAddress {
  id: string;
  nameKey: string;
  name: string;
  addr1: string;
  addr2: string;
  city: string;
  prov: string;
  postal: string;
  country: string;
}

export interface StoreItem {
  key: string;
  price: number;
}

export interface ChatMessage {
  id: number;
  text: string;
  who: "user" | "bot";
}
