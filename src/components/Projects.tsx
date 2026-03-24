"use client";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Globe, Smartphone, Monitor } from "lucide-react";

const projects = [
  {
    title: "Gestion Coupures Électriques",
    subtitle: "JIRAMA Toliara",
    type: "web",
    icon: Globe,
    color: "#7c3aed",
    year: "2024",
    status: "Déployé ✓",
    description:
      "Application web complète pour la gestion et la planification des coupures et maintenances électriques. Permet aux techniciens de planifier, suivre et notifier les interventions dans tous les secteurs.",
      tags: ["React.js", "Express.js", "MySQL", "REST API"],
    features: ["Planification des coupures", "Gestion des secteurs", "Notifications", "Rapports"],
  },
  {
    title: "Gestion Planning RH",
    subtitle: "ADES – Direction Régionale Toliara",
    type: "web",
    icon: Globe,
    color: "#00d4ff",
    year: "2023",
    status: "Livré ✓",
    description:
      "Application de gestion du planning du personnel pour le service RH. Gestion des congés, missions, permissions et repos médicaux avec tableau de bord analytique.",
    tags: ["PHP", "Laravel", "MySQL", "HTML/CSS", "Bootstrap"],
    features: ["Gestion des congés", "Planning missions", "Tableau de bord RH", "Export rapports"],
  },
  {
    title: "Suivi Bancaire avec Triggers",
    subtitle: "Projet Académique ENI",
    type: "web",
    icon: Monitor,
    color: "#f59e0b",
    year: "2025",
    status: "Académique",
    description:
      "Application de suivi bancaire exploitant les triggers et procédures stockées SQL pour automatiser les traitements. Historique des transactions, alertes automatiques et rapports financiers.",
      tags: ["Python", "Flask", "MySQL", "Triggers", "Procédures stockées", "Vue.js"],
    features: ["Triggers SQL", "Historique transactions", "Alertes auto", "Rapports"],
  },
  {
    title: "Gestion Présence par QR Codes",
    subtitle: "Projet Académique ENI",
    type: "mobile",
    icon: Smartphone,
    color: "#00ff88",
    year: "2025",
    status: "Académique",
    description:
      "Application mobile de gestion des présences via QR codes dynamiques. Scan en temps réel, rapports d'assiduité et interface d'administration pour les enseignants.",
    tags: ["React Native", "Node.js", "MongoDB", "QR Code", "Expo"],
    features: ["QR dynamiques", "Scan temps réel", "Rapports assiduité", "Admin dashboard"],
  },
  {
    title: "Projets Multi-Technologies",
    subtitle: "Divers projets ENI",
    type: "web",
    icon: Monitor,
    color: "#ff6b6b",
    year: "2021–2026",
    status: "Portfolio",
    description:
      "Ensemble de projets réalisés avec différentes technologies : Django (Python), JSP/Servlets (Java), Symfony (PHP), Vue.js. Couvrant e-commerce, gestion d'inventaire, et plateformes éducatives.",
    tags: ["Django", "JSP", "Symfony", "Vue.js", "Spring Boot"],
    features: ["E-commerce", "Gestion stock", "Plateforme éducative", "API REST"],
  },
];

const typeIcons = { web: Globe, mobile: Smartphone, desktop: Monitor };

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-accent font-mono text-sm">05. Projets</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-2">
            Mes <span className="text-gradient">Réalisations</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((proj, i) => {
            const Icon = proj.icon;
            return (
              <div
                key={i}
                className={`card-hover rounded-xl border border-border bg-card overflow-hidden flex flex-col transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Card header */}
                <div className="p-5 border-b border-border"
                  style={{ background: `linear-gradient(135deg, ${proj.color}08, transparent)` }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: proj.color + "15", border: `1px solid ${proj.color}30` }}>
                      <Icon size={18} style={{ color: proj.color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded font-mono"
                        style={{ color: proj.color, background: proj.color + "10", border: `1px solid ${proj.color}20` }}>
                        {proj.year}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-text leading-tight">{proj.title}</h3>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: proj.color }}>{proj.subtitle}</p>
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400">
                    {proj.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-muted text-sm leading-relaxed mb-4">{proj.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-1.5 mb-4">
                    {proj.features.map(feat => (
                      <div key={feat} className="flex items-center gap-1.5 text-xs text-muted">
                        <span style={{ color: proj.color }}>▸</span>
                        {feat}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono bg-border/40 text-muted border border-border/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <a
            href="https://github.com/23fulgence23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-accent/30 text-muted hover:text-text transition-all duration-300 group"
          >
            <Github size={18} />
            <span className="font-medium">Voir plus sur GitHub</span>
            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
