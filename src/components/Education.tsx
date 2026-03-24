"use client";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    period: "2025 – 2026",
    degree: "Master II Informatique",
    school: "École Nationale d'Informatique (ENI)",
    location: "Fianarantsoa, Madagascar",
    color: "#00d4ff",
    current: true,
    description: "Deuxième année du cycle Master en Informatique. Spécialisation en développement logiciel avancé, architecture des systèmes et génie logiciel.",
  },
  {
    period: "2024 – 2025",
    degree: "Master I Informatique",
    school: "École Nationale d'Informatique (ENI)",
    location: "Fianarantsoa, Madagascar",
    color: "#7c3aed",
    description: "Première année du cycle Master. Approfondissement en architecture logicielle, développement avancé et recherche appliquée.",
  },
  {
    period: "Avril 2025",
    degree: "Licence Professionnelle en Informatique",
    school: "École Nationale d'Informatique (ENI)",
    location: "Fianarantsoa, Madagascar",
    color: "#f59e0b",
    diploma: true,
    mention: "Mention Bien",
    description: "Diplômé le 29 avril 2025. Parcours Informatique Général, mention Bien. Formation complète en développement logiciel, bases de données, réseaux et génie logiciel.",
  },
  {
    period: "2023 – 2024",
    degree: "3ème année Licence Informatique",
    school: "École Nationale d'Informatique (ENI)",
    location: "Fianarantsoa, Madagascar",
    color: "#00ff88",
    description: "Projets de fin de licence, bases de données avancées, développement web et mobile. Réalisation du projet de licence en développement d'application.",
  },
  {
    period: "2022 – 2023",
    degree: "2ème année Licence Informatique",
    school: "École Nationale d'Informatique (ENI)",
    location: "Fianarantsoa, Madagascar",
    color: "#00d4ff",
    description: "Algorithmique avancée, structures de données, développement orienté objet (Java, C++), systèmes d'exploitation.",
  },
  {
    period: "2021 – 2022",
    degree: "1ère année Licence Informatique",
    school: "École Nationale d'Informatique (ENI)",
    location: "Fianarantsoa, Madagascar",
    color: "#7c3aed",
    description: "Fondements de l'informatique, algorithmique, programmation (C, Python), mathématiques appliquées.",
  },
  {
    period: "2020 – 2021",
    degree: "Baccalauréat Série D",
    school: "Lycée — Toliara, Madagascar",
    location: "Toliara, Madagascar",
    color: "#f59e0b",
    diploma: true,
    mention: "Mention Assez Bien",
    description: "Baccalauréat scientifique (Série D — Sciences de la Vie et de la Terre). Mention Assez Bien.",
  },
];

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="py-28 relative bg-surface/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-accent font-mono text-sm">04. Formation</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-2">
            Parcours <span className="text-gradient">Académique</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`card-hover p-6 rounded-xl border bg-card transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                borderColor: edu.current ? edu.color + "40" : undefined,
                transitionDelay: `${i * 80}ms`,
                boxShadow: edu.current ? `0 0 20px ${edu.color}15` : undefined,
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: edu.color + "15", border: `1px solid ${edu.color}30` }}>
                  {edu.diploma ? (
                    <Award size={16} style={{ color: edu.color }} />
                  ) : (
                    <GraduationCap size={16} style={{ color: edu.color }} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{ color: edu.color, background: edu.color + "10", border: `1px solid ${edu.color}20` }}>
                      {edu.period}
                    </span>
                    {edu.current && (
                      <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        En cours
                      </span>
                    )}
                    {edu.mention && (
                      <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                        {edu.mention}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base text-text leading-tight">{edu.degree}</h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: edu.color }}>{edu.school}</p>
                </div>
              </div>
              <p className="text-muted text-xs leading-relaxed pl-12">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`mt-10 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
            <Award size={18} className="text-accent3" />
            Attestations & Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Attestation de Stage National", org: "ADES – Direction Nationale, Madagascar", color: "#00d4ff" },
              { title: "Attestation de Stage Validée", org: "JIRAMA Toliara", color: "#7c3aed" },
            ].map((cert) => (
              <div key={cert.title} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-accent/20 transition-all">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: cert.color + "15" }}>
                  <Award size={18} style={{ color: cert.color }} />
                </div>
                <div>
                  <div className="text-sm font-medium text-text">{cert.title}</div>
                  <div className="text-xs text-muted">{cert.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
