"use client";
import { useInView } from "react-intersection-observer";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2025 – 2026",
    role: "Projets Scolaires & Réalisations Techniques",
    company: "ENI Fianarantsoa",
    type: "Formation / Projets",
    color: "#f59e0b",
    description:
      "Réalisation de projets scolaires avancés en PHP, Python, Node.js, React Native, Java et JSP. Développement d'une application de suivi bancaire avec triggers et procédures stockées, et d'une application de gestion de présence par QR codes.",
    tags: ["PHP", "Python", "Node.js", "React Native", "Java", "JSP", "QR Code", "Triggers"],
  },
  {
    period: "Sep. 2024 – Déc. 2024",
    role: "Développeur Full-Stack – Stage",
    company: "JIRAMA Toliara",
    type: "Stage professionnel",
    color: "#7c3aed",
    attestation: true,
    description:
      "Développement et déploiement complet d'une application web de gestion et de planification des coupures et maintenances électriques dans tous les secteurs desservis par la JIRAMA à Toliara. Système utilisé en production par les équipes techniques.",
    tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "Déploiement", "Gestion maintenance"],
  },
  {
    period: "Sep. 2023 – Déc. 2023",
    role: "Développeur Web – Stage d'observation",
    company: "ADES – Direction Régionale Toliara",
    type: "Stage professionnel",
    color: "#00d4ff",
    attestation: true,
    description:
      "Développement d'une application web de gestion du planning du personnel : congés, missions, permissions, repos médical. Suivi et intégration avec le service RH. Application permettant la traçabilité des absences et la planification des équipes.",
    tags: ["PHP", "Laravel", "MySQL", "HTML/CSS", "Bootstrap", "RH", "Planning"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-accent font-mono text-sm">03. Expérience</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-2">
            Parcours <span className="text-gradient">Professionnel</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent2 to-accent3 opacity-30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative md:pl-16 transition-all duration-700 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{ borderColor: exp.color, background: exp.color + "20" }}
                />

                <div className="card-hover p-6 rounded-xl border border-border bg-card">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} style={{ color: exp.color }} />
                        <span className="text-xs font-mono text-muted">{exp.type}</span>
                        {exp.attestation && (
                          <span className="px-2 py-0.5 rounded text-xs bg-green-500/10 border border-green-500/20 text-green-400">
                            Attestation ✓
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-xl text-text">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-medium" style={{ color: exp.color }}>{exp.company}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-lg border text-xs font-mono text-muted whitespace-nowrap"
                      style={{ borderColor: exp.color + "40", background: exp.color + "08" }}>
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded text-xs font-mono bg-border/50 text-muted border border-border hover:text-text transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
