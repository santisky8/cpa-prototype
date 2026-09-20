import { useState } from "react";
import { useI18n } from "../i18n/I18nContext";
import type { Lang } from "../types";

interface WizardCopy {
  prog: string[];
  q: string[];
  a1: string[];
  a2: string[];
  a3: string[];
  resh: string;
  results: [string, string][];
  workYes: string;
  workNo: string;
  next: string[];
  back: string;
}

const copy: Record<Lang, WizardCopy> = {
  en: {
    prog: ["Question 1 of 3", "Question 2 of 3", "Question 3 of 3"],
    q: [
      "What best describes your education?",
      "Are you currently working in accounting or finance?",
      "When do you plan to start?"
    ],
    a1: [
      "High school (completed or in progress)",
      "Bachelor's degree without the accounting prerequisites",
      "Bachelor's degree with the accounting prerequisites",
      "Internationally trained accountant"
    ],
    a2: ["Yes", "No"],
    a3: ["As soon as possible", "Within the next year", "Just exploring for now"],
    resh: "Your recommended pathway",
    results: [
      ["Start with post-secondary studies", "Your route: complete a bachelor's degree in any discipline, then take the CPA preparatory courses to qualify for the CPA Professional Education Program (PEP)."],
      ["CPA preparatory courses", "Your route: complete the CPA preparatory courses to cover the missing prerequisites, then enter the CPA Professional Education Program (PEP) and write the Common Final Examination (CFE)."],
      ["Direct entry to CPA PEP", "You likely qualify for direct admission to the CPA Professional Education Program (PEP). From there you complete your modules, your practical experience and the Common Final Examination (CFE)."],
      ["International pathway", "Start with a credential assessment. Depending on your designation and country, mutual recognition or reciprocity agreements may shorten your route to the Canadian CPA."]
    ],
    workYes: "Good news: relevant work may count toward the 30 months of practical experience required for certification.",
    workNo: "You will complete 30 months of practical experience during the program. Many candidates work while they study.",
    next: [
      "Next step: contact your provincial or regional CPA body to confirm requirements and register.",
      "Next step: review admission dates. Most provincial bodies offer several intakes per year.",
      "Next step: browse the program overview and reach out to a provincial body when you're ready."
    ],
    back: "Start over"
  },
  fr: {
    prog: ["Question 1 de 3", "Question 2 de 3", "Question 3 de 3"],
    q: [
      "Qu'est-ce qui décrit le mieux votre formation?",
      "Travaillez-vous actuellement en comptabilité ou en finance?",
      "Quand prévoyez-vous commencer?"
    ],
    a1: [
      "Études secondaires (terminées ou en cours)",
      "Baccalauréat sans les préalables en comptabilité",
      "Baccalauréat avec les préalables en comptabilité",
      "Comptable formé à l'étranger"
    ],
    a2: ["Oui", "Non"],
    a3: ["Dès que possible", "Au cours de la prochaine année", "J'explore pour l'instant"],
    resh: "Votre cheminement recommandé",
    results: [
      ["Commencez par des études postsecondaires", "Votre voie : obtenez un baccalauréat dans n'importe quelle discipline, puis suivez les cours préparatoires CPA pour être admissible au Programme de formation professionnelle (PFP)."],
      ["Cours préparatoires CPA", "Votre voie : complétez les cours préparatoires CPA pour combler les préalables manquants, puis entrez au Programme de formation professionnelle (PFP) et passez l'Examen final commun (EFC)."],
      ["Admission directe au PFP", "Vous êtes probablement admissible directement au Programme de formation professionnelle (PFP). Vous y complétez vos modules, votre expérience pratique et l'Examen final commun (EFC)."],
      ["Cheminement international", "Commencez par une évaluation de vos titres. Selon votre titre et votre pays, des ententes de reconnaissance mutuelle peuvent raccourcir votre route vers le CPA canadien."]
    ],
    workYes: "Bonne nouvelle : un emploi pertinent peut compter dans les 30 mois d'expérience pratique exigés pour l'agrément.",
    workNo: "Vous accumulerez 30 mois d'expérience pratique pendant le programme. Beaucoup de candidats travaillent en étudiant.",
    next: [
      "Prochaine étape : communiquez avec votre ordre provincial ou régional de CPA pour confirmer les exigences et vous inscrire.",
      "Prochaine étape : consultez les dates d'admission. La plupart des ordres offrent plusieurs cohortes par année.",
      "Prochaine étape : parcourez l'aperçu du programme et communiquez avec un ordre quand vous serez prêt."
    ],
    back: "Recommencer"
  }
};

export default function Wizard() {
  const { lang } = useI18n();
  const L = copy[lang];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  function choose(i: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = i;
      return next;
    });
    setStep((s) => s + 1);
  }

  function reset() {
    setStep(0);
    setAnswers([]);
  }

  if (step < 3) {
    const questions = [L.q[0], L.q[1], L.q[2]];
    const options = [L.a1, L.a2, L.a3];
    return (
      <div className="wizard" aria-live="polite">
        <p className="wprog">{L.prog[step]}</p>
        <p className="q">{questions[step]}</p>
        <div className="wopts">
          {options[step].map((opt, i) => (
            <button key={opt} type="button" onClick={() => choose(i)}>{opt}</button>
          ))}
        </div>
      </div>
    );
  }

  const [title, body] = L.results[answers[0] ?? 0];
  const workNote = answers[1] === 0 ? L.workYes : L.workNo;
  const nextNote = L.next[Math.min(answers[2] ?? 0, L.next.length - 1)];

  return (
    <div className="wizard" aria-live="polite">
      <p className="wprog">{L.resh}</p>
      <div className="wresult">
        <h3>{title}</h3>
        <p>{body}</p>
        <p>{workNote}</p>
        <p><strong>{nextNote}</strong></p>
      </div>
      <div className="wback">
        <button type="button" className="btn ghost" onClick={reset}>{L.back}</button>
      </div>
    </div>
  );
}
