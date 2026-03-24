"use client";
import { useInView } from "react-intersection-observer";
import { Code2, Layers, Smartphone, Globe, Award, BookOpen } from "lucide-react";

const stats = [
  { value: "3+", label: "Ans d'expérience", icon: Code2 },
  { value: "10+", label: "Technologies maîtrisées", icon: Layers },
  { value: "2", label: "Stages professionnels", icon: Award },
  { value: "5+", label: "Projets réalisés", icon: Globe },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-accent font-mono text-sm">01. À propos</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-2">
            Qui suis-<span className="text-gradient">je</span> ?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left text */}
          <div className={`space-y-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <p className="text-text/80 leading-relaxed text-lg">
              Je suis <span className="text-accent font-semibold">FULGENCE Damivelo</span>, né le 20 avril 2004 
              à Tuléar, Madagascar. Développeur full-stack passionné, actuellement en 
              <span className="text-accent font-semibold"> Master II Informatique</span> à l&apos;École Nationale 
              d&apos;Informatique (ENI) de Fianarantsoa.
            </p>
            <p className="text-muted leading-relaxed">
              Titulaire d&apos;une <span className="text-text">Licence Professionnelle en Informatique (mention Bien)</span> 
              obtenue en avril 2025, j&apos;ai développé une expertise solide dans la création 
              d&apos;applications web, mobile et desktop à travers des stages en entreprise et des 
              projets académiques ambitieux.
            </p>
            <p className="text-muted leading-relaxed">
              Mon expérience comprend le développement et déploiement de systèmes de gestion 
              réels — gestion RH chez ADES et planification des maintenances électriques à 
              la JIRAMA. J&apos;ai également conçu des applications de suivi bancaire et de 
              gestion de présence par QR codes.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { icon: Globe, text: "Web Full-Stack" },
                { icon: Smartphone, text: "Mobile (React Native)" },
                { icon: Code2, text: "Desktop (Java / .NET)" },
                { icon: BookOpen, text: "Master II ENI" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted">
                  <Icon size={14} className="text-accent flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="mailto:fulgencedamivelo6@gmail.com"
                className="px-4 py-2 rounded border border-accent/30 text-accent text-sm font-medium hover:bg-accent/10 transition-all"
              >
                fulgencedamivelo6@gmail.com
              </a>
              <a
                href="https://github.com/23fulgence23"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-border text-muted text-sm hover:border-accent/30 hover:text-text transition-all"
              >
                github.com/23fulgence23
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <div
                  key={label}
                  className="card-hover p-6 rounded-xl border border-border bg-card"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <Icon size={18} className="text-accent mb-3" />
                  <div className="font-display font-extrabold text-3xl text-gradient-cyan mb-1">{value}</div>
                  <div className="text-muted text-sm">{label}</div>
                </div>
              ))}
            </div>

            {/* Tech stack preview */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <div className="text-xs font-mono text-muted mb-3">// Technologies favorites</div>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Laravel", "React Native", "Django", "Spring Boot", "Tailwind", "PostgreSQL", "MongoDB", "Figma", "Git"].map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded text-xs font-mono bg-accent/5 border border-accent/20 text-accent/80 hover:bg-accent/10 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
