"use client";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const categories = [
  {
    label: "Langages",
    color: "#00d4ff",
    skills: [
      { name: "PHP", level: 85 },
      { name: "Python", level: 90 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "Java", level: 85 },
      { name: "C# / .NET", level: 85 },
      { name: "C++", level: 70 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    label: "Frameworks Backend",
    color: "#7c3aed",
    skills: [
      { name: "Laravel", level: 85 },
      { name: "Django", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Node.js / Express", level: 88 },
      { name: "Symfony", level: 75 },
      { name: ".NET Core", level: 85 },
    ],
  },
  {
    label: "Frontend & Mobile",
    color: "#f59e0b",
    skills: [
      { name: "Next.js / React", level: 90 },
      { name: "Vue.js", level: 90 },
      { name: "React Native", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    label: "BDD & Outils",
    color: "#00ff88",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 95 },
      { name: "MongoDB", level: 85 },
      { name: "Git / GitHub", level: 88 },
      { name: "Figma / UI Design", level: 80 },
      { name: "UML / MERISE", level: 90 },
    ],
  },
];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text/80 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            transitionDelay: "0.2s",
          }}
        >
          <div className="absolute inset-0 bg-white/20 animate-shimmer" />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-28 relative bg-surface/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-accent font-mono text-sm">02. Compétences</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-2">
            Stack <span className="text-gradient">Technique</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                activeTab === i
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border text-muted hover:border-border/80 hover:text-text"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid for active tab */}
        <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: categories[activeTab].color }} />
              <span className="text-sm font-mono text-muted">{categories[activeTab].label}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
              {categories[activeTab].skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={categories[activeTab].color}
                  animate={inView}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional tools */}
        <div className={`mt-10 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-muted text-sm font-mono mb-4">// Environnements & éditeurs</p>
          <div className="flex flex-wrap gap-2">
            {["VS Code", "Sublime Text", "NetBeans", "PyCharm", "IntelliJ IDEA", "XAMPP", "WAMP", "Laragon", "Postman", "Docker", "Linux", "Looping", "Visual Paradigm"].map(tool => (
              <span key={tool} className="px-3 py-1.5 rounded border border-border bg-card text-muted text-xs font-mono hover:border-accent/20 hover:text-text transition-all cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
