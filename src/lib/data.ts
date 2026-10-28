export type L = "fr" | "en" | "mg";
export type T = Record<L, string>;
const t = (fr: string, en: string, mg: string): T => ({ fr, en, mg });

export const langs: { code: L; name: string; flag: string }[] = [
  { code: "fr", name: "Français", flag: "fr" },
  { code: "en", name: "English", flag: "gb" },
  { code: "mg", name: "Malagasy", flag: "mg" },
];

export const ui = {
  about: t("À propos", "About", "Momba ahy"),
  skills: t("Compétences", "Skills", "Fahaizana"),
  exp: t("Expériences", "Experience", "Traikefa"),
  edu: t("Formation", "Education", "Fianarana"),
  contact: t("Contact", "Contact", "Fifandraisana"),
  hello: t("Bonjour, je suis", "Hi, I am", "Salama, izaho no"),
  role: t("Développeur Web & Mobile Full-Stack", "Full-Stack Web & Mobile Developer", "Mpamorona tranonkala sy aplikasiona Full-Stack"),
  bio: t(
    "Je conçois des applications web et mobiles modernes, de l'interface jusqu'au déploiement (CI/CD, Docker). Basé à Madagascar, je travaille avec Laravel, React et Next.js.",
    "I build modern web and mobile applications, from the interface to deployment (CI/CD, Docker). Based in Madagascar, I work with Laravel, React and Next.js.",
    "Mamorona tranonkala sy aplikasiona maoderina aho, manomboka amin'ny endrika ka hatramin'ny fandefasana azy (CI/CD, Docker). Monina eto Madagasikara ary miasa amin'ny Laravel, React ary Next.js."
  ),
  cta1: t("Me contacter", "Contact me", "Mifandraisa amiko"),
  cta2: t("Voir mes expériences", "See my experience", "Jereo ny traikefako"),
  info: t("Informations", "Information", "Fampahalalana"),
  location: t("Localisation", "Location", "Toerana"),
  place: t("Toliara, Madagascar", "Toliara, Madagascar", "Toliara, Madagasikara"),
  spoken: t("Langues", "Languages", "Fiteny"),
  spokenList: t("Français, Anglais, Malgache", "French, English, Malagasy", "Frantsay, Anglisy, Malagasy"),
  now: t("En cours", "Current", "Mbola mitohy"),
  visit: t("Voir le site", "Visit site", "Hijery ny tranonkala"),
  contactText: t("Un projet, une mission ? Écrivez-moi.", "Have a project or a mission? Write to me.", "Misy tetikasa na asa ho atao? Soraty amiko."),
  rights: t("Tous droits réservés", "All rights reserved", "Zo rehetra voatokana"),
};

export const skills: { title: T; items: string[] }[] = [
  { title: t("Cloud & DevOps", "Cloud & DevOps", "Cloud & DevOps"), items: ["Google Cloud Platform", "CI/CD", "Kubernetes", "Docker", "Git"] },
  { title: t("Langages", "Languages", "Fiteny fandaharana"), items: ["C#", "Java", "Python", "JavaScript", "TypeScript", "PHP"] },
  { title: t("Backend", "Backend", "Backend"), items: [".NET", "Laravel", "Symfony", "Django", "Spring Boot", "Node.js", "Express.js"] },
  { title: t("Frontend", "Frontend", "Frontend"), items: ["Angular", "Vue.js", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"] },
  { title: t("Bases de données & BaaS", "Databases & BaaS", "Tahiry angona & BaaS"), items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "Supabase"] },
  { title: t("Méthodes & modélisation", "Methods & modeling", "Fomba fiasa & maodely"), items: ["Agile", "UML", "Merise"] },
  { title: t("Design & éditeurs", "Design & editors", "Endrika & fitaovana"), items: ["Figma", "Canva", "VS Code", "IntelliJ IDEA", "Eclipse", "Android Studio"] },
];

export const experiences: { role: T; org: string; period: T; place: string; desc: T; link?: string; current?: boolean }[] = [
  {
    role: t("Développeur Web — Site vitrine", "Web Developer — Showcase website", "Mpamorona tranonkala — Tranonkala fampisehoana"),
    org: "ONG Kintan'ny Ankizy", period: t("Sept. 2026", "Sep. 2026", "Sep. 2026"), place: "Toliara",
    desc: t("Conception et développement du site vitrine Kintan'ny Ankizy, avec une interface moderne et responsive.",
      "Design and development of the Kintan'ny Ankizy showcase website with a modern, responsive interface.",
      "Famolavolana sy fananganana ny tranonkala Kintan'ny Ankizy, miaraka amin'ny endrika maoderina mifanaraka amin'ny efijery rehetra."),
    link: "https://kintan-ny-ankizy.vercel.app/fr",
  },
  {
    role: t("Développeur WordPress — Refonte", "WordPress Developer — Redesign", "Mpamorona WordPress — Fanavaozana"),
    org: "RAIKY", period: t("Août 2026", "Aug. 2026", "Aogositra 2026"), place: "Toliara",
    desc: t("Refonte et mise à jour du site RAIKY sous WordPress : design, contenus et fonctionnalités.",
      "Redesign and update of the RAIKY website on WordPress: design, content and features.",
      "Fanavaozana ny tranonkala RAIKY amin'ny WordPress : endrika, votoaty ary fiasa."),
    link: "https://raiky.mg",
  },
  {
    role: t("Développeur WordPress — Freelance", "WordPress Developer — Freelance", "Mpamorona WordPress — Mimaso"),
    org: "Shain Lodge", period: t("Août 2026", "Aug. 2026", "Aogositra 2026"), place: "Toliara",
    desc: t("Développement et déploiement du site Shain Lodge sous WordPress, avec personnalisation du design, des contenus et des fonctionnalités.",
      "Development and deployment of the Shain Lodge website on WordPress, with custom design, content and features.",
      "Fananganana sy fandefasana ny tranonkala Shain Lodge amin'ny WordPress, miaraka amin'ny fanamboarana ny endrika, ny votoaty ary ny fiasa."),
    link: "https://shainlodge.com",
  },
  {
    role: t("Développeur Frontend, DevOps & Testeur — Freelance", "Frontend, DevOps & Test Engineer — Freelance", "Mpamorona Frontend, DevOps & Mpitsapa — Mimaso"),
    org: "Tecknay — JOB.MG", period: t("Depuis juil. 2026", "Since Jul. 2026", "Hatramin'ny Jol. 2026"), place: "Antananarivo", current: true,
    desc: t("Développement frontend, mise en place des processus DevOps et tests de l'application web JOB.MG.",
      "Frontend development, DevOps setup and testing of the JOB.MG web application.",
      "Fampandrosoana frontend, fametrahana ny dingana DevOps ary fitsapana ny aplikasiona web JOB.MG."),
  },
  {
    role: t("Développeur Full-Stack & Déploiement — Laravel & React.js", "Full-Stack Developer & Deployment — Laravel & React.js", "Mpamorona Full-Stack & Fandefasana — Laravel & React.js"),
    org: "RAIKY — IRAKY Delivery", period: t("Depuis juin 2026", "Since Jun. 2026", "Hatramin'ny Jona 2026"), place: "Toliara", current: true,
    desc: t("Développement et déploiement d'IRAKY Delivery, application de gestion des livraisons reliant clients et coursiers, avec une PWA utilisable sur web, mobile et desktop.",
      "Development and deployment of IRAKY Delivery, a delivery management app connecting customers and couriers, with a PWA usable on web, mobile and desktop.",
      "Fampandrosoana sy fandefasana ny IRAKY Delivery, aplikasiona fitantanana fandefasana entana mampifandray ny mpanjifa sy ny mpitatitra, miaraka amin'ny PWA azo ampiasaina amin'ny web, finday ary ordinatera."),
    link: "https://iraky-delivery.vercel.app",
  },
  {
    role: t("Développeur Full-Stack — Laravel & React.js", "Full-Stack Developer — Laravel & React.js", "Mpamorona Full-Stack — Laravel & React.js"),
    org: "ADES — Direction Régionale", period: t("Sept. – déc. 2023", "Sep. – Dec. 2023", "Sep. – Des. 2023"), place: "Toliara",
    desc: t("Application web de gestion du planning du personnel.", "Web application for staff schedule management.", "Aplikasiona web fitantanana ny fandaharam-potoanan'ny mpiasa."),
  },
];

export const education: { title: T; school: string; period: string }[] = [
  { title: t("Licence 3 en informatique", "Bachelor's (Year 3) in Computer Science", "Lisansa 3 amin'ny informatika"), school: "École Nationale d'Informatique, Fianarantsoa", period: "2023 – 2024" },
  { title: t("Master 1 en informatique", "Master's (Year 1) in Computer Science", "Master 1 amin'ny informatika"), school: "École Nationale d'Informatique, Fianarantsoa", period: "2024 – 2025" },
  { title: t("Master 2 en informatique", "Master's (Year 2) in Computer Science", "Master 2 amin'ny informatika"), school: "École Nationale d'Informatique, Fianarantsoa", period: "2025 – 2026" },
];

export const contact = { email: "fulgencedamivelo6@gmail.com", github: "https://github.com/23fulgence23", whatsapp: "https://wa.me/261325320054", phone: "+261 32 53 200 54" };
