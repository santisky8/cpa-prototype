import type { Lang } from "../types";

export interface BotRule {
  keywords: string[];
  answer: string;
}

export const botAnswers: Record<Lang, BotRule[]> = {
  en: [
    {
      keywords: ["become", "pathway", "pep", "cfe", "exam", "student", "designation"],
      answer: "To become a CPA you complete the CPA Professional Education Program (PEP) and pass the Common Final Examination (CFE). Different pathways get you into PEP depending on your education, including routes for internationally trained accountants. Start at Become a CPA → Pathway Finder. Registration itself happens through your provincial body."
    },
    {
      keywords: ["course", "cpd", "learn", "training", "development", "catalogue", "webinar", "certificate"],
      answer: "All professional development lives in Learn & Grow, one catalogue you can filter by topic, format, price, and CPD hours, including a collection of free on-demand sessions. For tax, the In-Depth Tax Program is the flagship."
    },
    {
      keywords: ["handbook", "standard", "reporting", "assurance", "audit", "ifrs"],
      answer: "The CPA Canada Handbook covers financial reporting and assurance standards, with complimentary access for Canadian CPAs. Find it under Resources & Guidance → Standards."
    },
    {
      keywords: ["store", "shop", "buy", "purchase", "publication"],
      answer: "The CPA Store is a dedicated destination for handbooks, courses, and tools. Use the CPA Store link in the main menu when you are ready to purchase."
    },
    {
      keywords: ["contact", "support", "help", "phone", "email", "password", "invoice"],
      answer: "The Help Centre covers profile, password, and invoice questions. For membership matters, contact your provincial body; the national membership line is 1-855-441-4888."
    },
    {
      keywords: ["fee", "cost", "price", "dues", "pay", "membership"],
      answer: "Program and course fees are listed on each item's page in Learn & Grow. Membership options range from Affiliate (free) to Member and Advantage tiers. See Membership for the comparison."
    },
    {
      keywords: ["french", "français", "langue", "language"],
      answer: "The entire site is available in French. Use the FR toggle at the top of any page."
    },
    {
      keywords: ["dark", "theme", "mode"],
      answer: "Yes! Click the Dark toggle in the top bar."
    }
  ],
  fr: [
    {
      keywords: ["devenir", "cheminement", "pfp", "efc", "examen", "étudiant", "titre"],
      answer: "Pour devenir CPA, vous complétez le Programme de formation professionnelle (PFP) et réussissez l'Examen final commun (EFC). Différents cheminements mènent au PFP selon votre formation, y compris pour les comptables formés à l'étranger. Commencez par Devenir CPA → Trouver mon cheminement. L'inscription se fait auprès de votre ordre provincial."
    },
    {
      keywords: ["cours", "dpc", "formation", "apprendre", "catalogue", "webinaire", "certificat"],
      answer: "Tout le perfectionnement professionnel se trouve dans Apprendre et évoluer, un catalogue filtrable par sujet, format, prix et heures de DPC, incluant des séances gratuites sur demande. Pour la fiscalité, le Cours fondamental d'impôt est le programme phare."
    },
    {
      keywords: ["manuel", "norme", "information", "certification", "audit", "ifrs"],
      answer: "Le Manuel de CPA Canada couvre les normes d'information financière et de certification, avec accès gratuit pour les CPA canadiens. Voir Ressources et directives → Normes."
    },
    {
      keywords: ["magasin", "boutique", "acheter", "achat", "publication"],
      answer: "La Boutique CPA est maintenant intégrée à ce site : même compte, même panier. Parcourez les manuels, cours et outils à partir du lien Boutique CPA dans le menu principal."
    },
    {
      keywords: ["joindre", "soutien", "aide", "téléphone", "courriel", "mot de passe", "facture", "contact"],
      answer: "Le Centre d'aide couvre les questions de profil, de mot de passe et de facturation. Pour l'adhésion, contactez votre ordre provincial; la ligne nationale est le 1-855-441-4888."
    },
    {
      keywords: ["frais", "coût", "prix", "cotisation", "payer", "adhésion"],
      answer: "Les frais des programmes et des cours figurent sur la page de chaque élément dans Apprendre et évoluer. Les options d'adhésion vont d'Affilié (gratuit) à Membre et Avantage. Voir Adhésion pour la comparaison."
    },
    {
      keywords: ["anglais", "english", "langue"],
      answer: "Le site est entièrement offert en anglais. Utilisez le bouton EN en haut de la page."
    },
    {
      keywords: ["sombre", "thème", "mode"],
      answer: "Oui! Cliquez sur le bouton Sombre dans la barre du haut."
    }
  ]
};
