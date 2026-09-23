import type { Course } from "../types";
import { blueMountainImage } from "./heroImages";

function unsplash(id: string, w = 900, q = 88): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const courses: Course[] = [
  {
    id: "in-depth-tax",
    title: { en: "In-Depth Tax Program", fr: "Cours fondamental d'impôt" },
    description: {
      en: "Canada's flagship tax training, taught by 200+ technical experts. Hosted at Blue Mountain Resort, Ontario.",
      fr: "La formation fiscale phare au Canada, offerte par plus de 200 experts. Présenté au Blue Mountain Resort, en Ontario."
    },
    topic: "tax", format: "cert", hours: 120, price: 3495,
    image: blueMountainImage
  },
  {
    id: "gst-hst",
    title: { en: "GST/HST Essentials", fr: "L'essentiel de la TPS/TVH" },
    description: {
      en: "Practical fundamentals for indirect tax compliance.",
      fr: "Les bases pratiques de la conformité en taxes indirectes."
    },
    topic: "tax", format: "ondemand", hours: 8, price: 399,
    image: unsplash("1775163024488-e88e4a71179f")
  },
  {
    id: "audit-quality",
    title: { en: "Audit Quality Fundamentals", fr: "Principes de la qualité de l'audit" },
    description: {
      en: "Strengthen engagement quality from planning to reporting.",
      fr: "Renforcez la qualité des missions, de la planification au rapport."
    },
    topic: "audit", format: "virtual", hours: 12, price: 549,
    image: unsplash("1758518727613-00192aed759b")
  },
  {
    id: "data-analytics",
    title: { en: "Data Analytics for CPAs", fr: "Analyse de données pour CPA" },
    description: {
      en: "Hands-on analytics skills for finance and assurance work.",
      fr: "Compétences pratiques en analyse pour la finance et la certification."
    },
    topic: "tech", format: "ondemand", hours: 10, price: 449,
    image: unsplash("1560472354-b33ff0c44a43")
  },
  {
    id: "ai-in-audit",
    title: { en: "AI in the Audit", fr: "L'IA dans l'audit" },
    description: {
      en: "Where AI agents fit in the modern audit and how to supervise them.",
      fr: "La place des agents d'IA dans l'audit moderne et comment les superviser."
    },
    topic: "tech", format: "virtual", hours: 6, price: 349,
    image: unsplash("1518770660439-4636190af475")
  },
  {
    id: "ifrs-update",
    title: { en: "IFRS Update 2026", fr: "Mise à jour IFRS 2026" },
    description: {
      en: "What changed this year and what it means for your statements.",
      fr: "Ce qui a changé cette année et l'impact sur vos états financiers."
    },
    topic: "finrep", format: "ondemand", hours: 4, price: 0,
    image: unsplash("1497215728101-856f4ea42174")
  },
  {
    id: "aspe-essentials",
    title: { en: "ASPE Essentials", fr: "L'essentiel des NCECF" },
    description: {
      en: "Core private enterprise standards, explained with examples.",
      fr: "Les normes clés pour entreprises à capital fermé, avec exemples."
    },
    topic: "finrep", format: "ondemand", hours: 6, price: 299,
    image: unsplash("1553877522-43269d4ea984")
  },
  {
    id: "sustainability-disclosure",
    title: { en: "Sustainability Disclosure Standards", fr: "Normes de divulgation en durabilité" },
    description: {
      en: "CSDS 1 and 2 explained for preparers and advisors.",
      fr: "Les NCID 1 et 2 expliquées aux préparateurs et conseillers."
    },
    topic: "sust", format: "virtual", hours: 8, price: 499,
    image: unsplash("1497435334941-8c899ee9e8e9")
  },
  {
    id: "climate-risk",
    title: { en: "Climate Risk for Finance Leaders", fr: "Risque climatique pour leaders financiers" },
    description: {
      en: "Assess and report climate risk with confidence.",
      fr: "Évaluez et présentez le risque climatique avec confiance."
    },
    topic: "sust", format: "inperson", hours: 14, price: 1195,
    image: unsplash("1509391366360-2e959784a276")
  },
  {
    id: "economic-update",
    title: { en: "Quarterly Economic Update", fr: "Le point économique trimestriel" },
    description: {
      en: "Analysis from our Chief Economist on what moves Canada's economy.",
      fr: "L'analyse de notre économiste en chef sur l'économie canadienne."
    },
    topic: "lead", format: "ondemand", hours: 2, price: 0,
    image: unsplash("1762427354397-854a52e0ded7")
  },
  {
    id: "leading-teams",
    title: { en: "Leading Finance Teams", fr: "Diriger des équipes financières" },
    description: {
      en: "People leadership for controllers, directors and partners.",
      fr: "Le leadership humain pour contrôleurs, directeurs et associés."
    },
    topic: "lead", format: "inperson", hours: 16, price: 1495,
    image: unsplash("1552664730-d307ca884978")
  },
  {
    id: "nfp-certificate",
    title: { en: "Not-for-Profit Certificate I", fr: "Certificat OSBL I" },
    description: {
      en: "Foundational finance and governance for the NFP sector.",
      fr: "Finance et gouvernance de base pour le secteur des OSBL."
    },
    topic: "finrep", format: "cert", hours: 40, price: 1425,
    image: unsplash("1469571486292-0ba58a3f068b")
  }
];
