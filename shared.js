(function(){
const COMMON = {
en:{
  skip:"Skip to main content", login:"Login", register:"Register", dark:"Dark", light:"Light",
  searchlabel:"Search the site", searchph:"Search",
  nav1:"Become a CPA", nav2:"Learn & Grow", nav3:"Resources & Guidance", nav5:"CPAstore", nav6:"Tax 360",
  h1:"Register for the 2026 In-Depth Tax Program",
  lede:"Join Canada's most reputed tax training program and learn from 200+ technical experts across the nation. Registration closes August 26.",
  cta1:"Register now", cta2:"View all programs", heroimg:"Photo: professional reviewing tablet",
  rlabel:"I'm here as a…", r1:"Student", r2:"Affiliate Member", r3:"Provincial CPA Affiliate", r4:"Retired CPA", r5:"National Member", r6:"Advantage Member", r7:"Public",
  focush:"Our focus areas", learn:"Learn more",
  f1h:"Data and technology", f1p:"Stay relevant as technology reshapes the profession, from AI to information integrity.",
  f2h:"Ethics and governance", f2p:"Champion transparency, accountability and ethical decision-making in business.",
  f3h:"Financial reporting and assurance", f3p:"Regulation and standards that keep capital markets trusted and efficient.",
  f4h:"Public interest", f4p:"Advancing policy that protects the public and strengthens confidence in the profession.",
  f5h:"Sustainability", f5p:"Guidance on climate disclosure and sustainable value creation.",
  f6h:"Tax", f6p:"Deep expertise, education and advocacy for a fair and efficient tax system.",
  careerh:"Elevate your career", careerall:"All programs",
  c1img:"Photo: handbook library", c1h:"CPA Canada Handbook", c1p:"Complimentary access for Canadian CPAs. The essential collection for reporting and assurance standards.",
  c2img:"Photo: conference session", c2h:"2026 In-Depth Tax Program", c2p:"Sign up for Canada's most reputed tax training program with 200+ technical experts.",
  c3img:"Photo: online learning", c3h:"Complimentary CPD", c3p:"World-class free professional development, on demand. Filter by topic, format and CPD hours.",
  storebadge:"Now part of one site", storeh:"CPAstore: handbooks, courses and tools in one place",
  storep:"No more separate website. Browse the full catalogue, manage your invoices, and check out without leaving cpacanada.ca.",
  storecta:"Shop the CPAstore", storeimg:"Photo: publications & products",
  newsh:"In the news", newsall:"Read more",
  n1img:"Photo: market screens", n1d:"July 10, 2026", n1h:"Gambling or investing? Prediction markets blur the line", n1p:"Canadians will soon have to decide whether they're making an investment or placing a bet.",
  n2img:"Photo: investigator at work", n2d:"July 2, 2026", n2h:"This CPA seeks the truth behind the numbers", n2p:"From public practice to the RCMP, CPA Guy Paul Larocque works the numbers to track down the truth.",
  n3img:"Photo: AI illustration", n3d:"June 24, 2026", n3h:"AI agents are the new co-auditors, says our expert", n3p:"AI agents are becoming active participants in the auditing process.",
  fabout:"Supporting, empowering and advocating for more than 200,000 Chartered Professional Accountants.",
  fnav:"Explore", fsup:"Support", help:"Help Centre", fcontact:"Contact us", faccess:"Accessibility",
  fleg:"Legal", fpriv:"Privacy", fterms:"Terms of use",
  fine:"Internal concept prototype. Not affiliated with or endorsed by CPA Canada. Placeholder content for demonstration.",
  chatlaunch:"Ask CPA Assist", chath:"CPA Assist", chatsub:"Programs, courses, standards. Ask me anything",
  chatph:"Type your question…", chatnote:"Demo assistant with scripted responses. Production version: AI with live site retrieval.",
  chatHello:"Hi! I'm CPA Assist. I can point you to programs, courses, standards and guidance on this site. What are you looking for?",
  chatFallback:"I want to point you to the right place. Try asking about becoming a CPA, courses and CPD, the handbooks, the CPAstore, or how to contact support. You can also use the search bar above.",
  chips:["How do I become a CPA?","Find CPD courses","Where is the CPAstore?","Contact support"]
},
fr:{
  skip:"Passer au contenu principal", login:"Connexion", register:"S'inscrire", dark:"Sombre", light:"Clair",
  searchlabel:"Rechercher sur le site", searchph:"Rechercher",
  nav1:"Devenir CPA", nav2:"Apprendre et évoluer", nav3:"Ressources et directives", nav5:"Magasin CPA", nav6:"Tax 360",
  h1:"Inscrivez-vous au Cours fondamental d'impôt 2026",
  lede:"Joignez-vous au programme de formation fiscale le plus réputé au Canada et apprenez auprès de plus de 200 experts techniques. Les inscriptions se terminent le 26 août.",
  cta1:"S'inscrire maintenant", cta2:"Voir tous les programmes", heroimg:"Photo : professionnelle consultant une tablette",
  rlabel:"Je suis ici en tant que…", r1:"Étudiant", r2:"Membre affilié", r3:"CPA provincial affilié", r4:"CPA à la retraite", r5:"Membre national", r6:"Membre Avantage", r7:"Grand public",
  focush:"Nos domaines d'intervention", learn:"En savoir plus",
  f1h:"Données et technologie", f1p:"Restez pertinent alors que la technologie transforme la profession, de l'IA à l'intégrité de l'information.",
  f2h:"Éthique et gouvernance", f2p:"Promouvoir la transparence, la responsabilité et la prise de décision éthique en affaires.",
  f3h:"Information financière et certification", f3p:"Des normes qui maintiennent la confiance et l'efficacité des marchés financiers.",
  f4h:"Intérêt public", f4p:"Faire progresser des politiques qui protègent le public et renforcent la confiance envers la profession.",
  f5h:"Durabilité", f5p:"Directives sur la divulgation climatique et la création de valeur durable.",
  f6h:"Fiscalité", f6p:"Expertise, formation et représentation pour un régime fiscal équitable et efficace.",
  careerh:"Faites progresser votre carrière", careerall:"Tous les programmes",
  c1img:"Photo : collection de manuels", c1h:"Manuel de CPA Canada", c1p:"Accès gratuit pour les CPA canadiens. La collection essentielle pour les normes d'information financière et de certification.",
  c2img:"Photo : séance de formation", c2h:"Cours fondamental d'impôt 2026", c2p:"Inscrivez-vous au programme de formation fiscale le plus réputé au Canada, avec plus de 200 experts techniques.",
  c3img:"Photo : apprentissage en ligne", c3h:"DPC gratuit", c3p:"Du perfectionnement professionnel gratuit de calibre mondial, sur demande. Filtrez par sujet, format et heures de DPC.",
  storebadge:"Maintenant intégré au site", storeh:"Magasin CPA : manuels, cours et outils au même endroit",
  storep:"Fini le site distinct. Parcourez le catalogue complet, gérez vos factures et payez sans quitter cpacanada.ca.",
  storecta:"Visiter le Magasin CPA", storeimg:"Photo : publications et produits",
  newsh:"Dans l'actualité", newsall:"Lire la suite",
  n1img:"Photo : écrans boursiers", n1d:"10 juillet 2026", n1h:"Jeu ou placement? Les marchés prédictifs brouillent la frontière", n1p:"Les Canadiens devront bientôt décider s'ils font un placement ou un pari.",
  n2img:"Photo : enquêteur au travail", n2d:"2 juillet 2026", n2h:"Ce CPA cherche la vérité derrière les chiffres", n2p:"De l'exercice public à la GRC, le CPA Guy Paul Larocque fait parler les chiffres pour découvrir la vérité.",
  n3img:"Photo : illustration IA", n3d:"24 juin 2026", n3h:"Les agents d'IA, nouveaux coauditeurs, selon notre expert", n3p:"Les agents d'IA deviennent des participants actifs au processus d'audit.",
  fabout:"Soutenir, outiller et représenter plus de 200 000 comptables professionnels agréés.",
  fnav:"Explorer", fsup:"Soutien", help:"Centre d'aide", fcontact:"Nous joindre", faccess:"Accessibilité",
  fleg:"Mentions légales", fpriv:"Confidentialité", fterms:"Conditions d'utilisation",
  fine:"Prototype conceptuel interne. Sans affiliation avec CPA Canada. Contenu fictif à des fins de démonstration.",
  chatlaunch:"Demander à CPA Assist", chath:"CPA Assist", chatsub:"Programmes, cours, normes. Posez vos questions",
  chatph:"Écrivez votre question…", chatnote:"Assistant de démonstration à réponses scriptées. En production : IA avec recherche en direct.",
  chatHello:"Bonjour! Je suis CPA Assist. Je peux vous orienter vers les programmes, cours, normes et directives du site. Que cherchez-vous?",
  chatFallback:"Je veux vous orienter au bon endroit. Essayez de demander comment devenir CPA, les cours et le DPC, les manuels, le Magasin CPA, ou comment joindre le soutien. Vous pouvez aussi utiliser la barre de recherche ci-dessus.",
  chips:["Comment devenir CPA?","Trouver des cours de DPC","Où est le Magasin CPA?","Joindre le soutien"]
}
};
const BOT = {
en:[
  {k:["become","pathway","pep","cfe","exam","student","designation"],
   a:"To become a CPA you complete the CPA Professional Education Program (PEP) and pass the Common Final Examination (CFE). Different pathways get you into PEP depending on your education, including routes for internationally trained accountants. Start at Become a CPA → Pathway Finder. Registration itself happens through your provincial body."},
  {k:["course","cpd","learn","training","development","catalogue","webinar","certificate"],
   a:"All professional development lives in Learn & Grow, one catalogue you can filter by topic, format, price, and CPD hours, including a collection of free on-demand sessions. For tax, the In-Depth Tax Program is the flagship."},
  {k:["handbook","standard","reporting","assurance","audit","ifrs"],
   a:"The CPA Canada Handbook covers financial reporting and assurance standards, with complimentary access for Canadian CPAs. Find it under Resources & Guidance → Standards."},
  {k:["store","shop","buy","purchase","publication"],
   a:"The CPAstore is now integrated into this site: same account, same cart. Browse handbooks, courses, and tools from the CPAstore link in the main menu."},
  {k:["contact","support","help","phone","email","password","invoice"],
   a:"The Help Centre covers profile, password, and invoice questions. For membership matters, contact your provincial body; the national membership line is 1-855-441-4888."},
  {k:["fee","cost","price","dues","pay","membership"],
   a:"Program and course fees are listed on each item's page in Learn & Grow. Membership options range from Affiliate (free) to Member and Advantage tiers. See Membership for the comparison."},
  {k:["french","français","langue","language"],
   a:"The entire site is available in French. Use the FR toggle at the top of any page."},
  {k:["dark","theme","mode"],
   a:"Yes! Click the Dark toggle in the top bar."}
],
fr:[
  {k:["devenir","cheminement","pfp","efc","examen","étudiant","titre"],
   a:"Pour devenir CPA, vous complétez le Programme de formation professionnelle (PFP) et réussissez l'Examen final commun (EFC). Différents cheminements mènent au PFP selon votre formation, y compris pour les comptables formés à l'étranger. Commencez par Devenir CPA → Trouver mon cheminement. L'inscription se fait auprès de votre ordre provincial."},
  {k:["cours","dpc","formation","apprendre","catalogue","webinaire","certificat"],
   a:"Tout le perfectionnement professionnel se trouve dans Apprendre et évoluer, un catalogue filtrable par sujet, format, prix et heures de DPC, incluant des séances gratuites sur demande. Pour la fiscalité, le Cours fondamental d'impôt est le programme phare."},
  {k:["manuel","norme","information","certification","audit","ifrs"],
   a:"Le Manuel de CPA Canada couvre les normes d'information financière et de certification, avec accès gratuit pour les CPA canadiens. Voir Ressources et directives → Normes."},
  {k:["magasin","boutique","acheter","achat","publication"],
   a:"Le Magasin CPA est maintenant intégré à ce site : même compte, même panier. Parcourez les manuels, cours et outils à partir du lien Magasin CPA dans le menu principal."},
  {k:["joindre","soutien","aide","téléphone","courriel","mot de passe","facture","contact"],
   a:"Le Centre d'aide couvre les questions de profil, de mot de passe et de facturation. Pour l'adhésion, contactez votre ordre provincial; la ligne nationale est le 1-855-441-4888."},
  {k:["frais","coût","prix","cotisation","payer","adhésion"],
   a:"Les frais des programmes et des cours figurent sur la page de chaque élément dans Apprendre et évoluer. Les options d'adhésion vont d'Affilié (gratuit) à Membre et Avantage. Voir Adhésion pour la comparaison."},
  {k:["anglais","english","langue"],
   a:"Le site est entièrement offert en anglais. Utilisez le bouton EN en haut de la page."},
  {k:["sombre","thème","mode"],
   a:"Oui! Cliquez sur le bouton Sombre dans la barre du haut."}
]
};
const LOGO = {en:"assets/logo-en.png", fr:"assets/logo-fr.png"};
const LOGO_ALT = {
  en:"CPA Chartered Professional Accountants Canada (concept redesign)",
  fr:"CPA Comptables professionnels agréés Canada (refonte conceptuelle)"
};
function sget(k){try{return localStorage.getItem(k)}catch(e){return null}}
function sset(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function merged(l){return Object.assign({}, COMMON[l], (window.PAGE_I18N||{})[l]||{});}

let lang = sget("cpa-lang") || "en";
let stored = sget("cpa-dark");
let dark = stored !== null ? stored === "true"
  : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);

window.CUR_LANG = function(){return lang};
window.T = function(k){return merged(lang)[k]};

function applyTheme(){
  document.documentElement.classList.toggle("dark", dark);
  const t = document.getElementById("themeToggle");
  t.setAttribute("aria-pressed", String(dark));
  t.querySelector("[data-i18n]").textContent = dark ? merged(lang).light : merged(lang).dark;
}
function applyLang(){
  const D = merged(lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if(D[k] !== undefined) el.textContent = D[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k = el.getAttribute("data-i18n-ph");
    if(D[k] !== undefined) el.placeholder = D[k];
  });
  const img = document.getElementById("logoImg");
  img.src = LOGO[lang]; img.alt = LOGO_ALT[lang];
  const lt = document.getElementById("langToggle");
  lt.textContent = lang === "en" ? "FR" : "EN";
  lt.setAttribute("aria-label", lang === "en" ? "Passer au français" : "Switch to English");
  renderChips();
  applyTheme();
  document.dispatchEvent(new CustomEvent("langchange",{detail:{lang:lang}}));
}
document.getElementById("themeToggle").addEventListener("click", function(){ dark = !dark; sset("cpa-dark", String(dark)); applyTheme(); });
document.getElementById("langToggle").addEventListener("click", function(){ lang = lang==="en"?"fr":"en"; sset("cpa-lang", lang); applyLang(); });

const panel = document.getElementById("chatPanel");
const launch = document.getElementById("chatLaunch");
const log = document.getElementById("chatLog");
let greeted = false;
launch.addEventListener("click", function(){
  const open = panel.classList.toggle("open");
  launch.setAttribute("aria-expanded", String(open));
  if(open && !greeted){ botSay(merged(lang).chatHello); greeted = true; }
  if(open) document.getElementById("chatText").focus();
});
function addMsg(text, who){
  const d = document.createElement("div");
  d.className = "msg " + who; d.textContent = text;
  log.appendChild(d); log.scrollTop = log.scrollHeight;
}
function botSay(text){ setTimeout(function(){addMsg(text,"bot")}, 320); }
let repositoryContext = "";
let uploadedContext = "";
let contextLoaded = false;

function addKnowledgeControls(){
  const input = document.getElementById("chatText");
  if(!input || document.getElementById("knowledgeControls")) return;
  const controls = document.createElement("div");
  controls.id = "knowledgeControls";
  controls.className = "knowledge-controls";
  controls.innerHTML = '<label class="knowledge-upload">Attach files<input id="knowledgeFiles" type="file" multiple accept=".txt,.md,.html,.css,.js,.json,.csv,.xml"></label><button id="loadRepository" type="button">Load repository</button><span id="knowledgeStatus" role="status"></span>';
  input.closest(".chat-input").before(controls);
  document.getElementById("knowledgeFiles").addEventListener("change", async function(e){
    const files = Array.from(e.target.files || []).slice(0, 10);
    const parts = await Promise.all(files.map(async function(file){ return `FILE: ${file.name}\n${(await file.text()).slice(0, 30000)}`; }));
    uploadedContext = parts.join("\n\n");
    document.getElementById("knowledgeStatus").textContent = files.length ? `${files.length} file(s) attached` : "";
  });
  document.getElementById("loadRepository").addEventListener("click", loadRepository);
}
async function loadRepository(){
  const status = document.getElementById("knowledgeStatus");
  status.textContent = "Loading main…";
  try{
    const r = await fetch("/.netlify/functions/repository-context");
    const data = await r.json();
    if(!r.ok) throw new Error(data.error || "Repository unavailable");
    repositoryContext = data.documents.map(function(d){return `FILE: ${d.path}\n${d.content}`}).join("\n\n");
    contextLoaded = true;
    status.textContent = `${data.documents.length} repository file(s) loaded`;
  }catch(error){ status.textContent = error.message; }
}
async function askAI(question){
  const context = [repositoryContext, uploadedContext].filter(Boolean).join("\n\n");
  if(!context && !contextLoaded) return null;
  const r = await fetch("/.netlify/functions/assistant", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({question, context})});
  if(!r.ok) return null;
  const data = await r.json();
  return data.answer || null;
}
function answer(q){
  const n = q.toLowerCase();
  const hit = BOT[lang].find(function(e){return e.k.some(function(k){return n.includes(k)})});
  return hit ? hit.a : merged(lang).chatFallback;
}
async function send(text){
  const q = (text !== undefined ? text : document.getElementById("chatText").value).trim();
  if(!q) return;
  addMsg(q,"user"); document.getElementById("chatText").value = "";
  const aiAnswer = await askAI(q).catch(function(){ return null; });
  botSay(aiAnswer || answer(q));
}
document.getElementById("chatSend").addEventListener("click", function(){send()});
document.getElementById("chatText").addEventListener("keydown", function(e){ if(e.key==="Enter") send(); });
function renderChips(){
  const c = document.getElementById("chatChips"); c.innerHTML = "";
  merged(lang).chips.forEach(function(txt){
    const b = document.createElement("button"); b.textContent = txt;
    b.addEventListener("click", function(){ if(!panel.classList.contains("open")) launch.click(); send(txt); });
    c.appendChild(b);
  });
}
applyLang();
addKnowledgeControls();
})();
