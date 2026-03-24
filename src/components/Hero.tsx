"use client";
import { useEffect, useRef, useState } from "react";
import { Github, Mail, Phone, ArrowDown, MapPin, ChevronRight } from "lucide-react";

const roles = [
  "Développeur Web Full-Stack",
  "Développeur Mobile",
  "Développeur Desktop",
  "Ingénieur Logiciel",
  "Étudiant Master II ENI",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 65);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, mounted]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 grid-bg overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 blob"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 blob"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", animationDelay: "4s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 blob"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)", animationDelay: "8s" }} />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-mono mb-8"
              style={{ animation: "fadeInDown 0.6s ease both" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Disponible pour missions & projets
            </div>

            {/* Name */}
            <h1 className="font-display font-extrabold leading-none mb-4"
              style={{ animation: "fadeInUp 0.7s ease 0.1s both" }}>
              <span className="block text-muted text-lg font-mono font-normal mb-2 tracking-widest">
                &lt; Bonjour, je suis /&gt;
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">
                FULGENCE
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-gradient">
                Damivelo
              </span>
            </h1>

            {/* Typing role */}
            <div className="flex items-center gap-2 mb-8 h-8"
              style={{ animation: "fadeInUp 0.7s ease 0.2s both" }}>
              <span className="text-accent font-mono text-sm">~/</span>
              <span className="text-lg sm:text-xl font-medium text-text/80 font-mono">
                {displayed}
                <span className="animate-pulse text-accent">|</span>
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted text-sm mb-8"
              style={{ animation: "fadeInUp 0.7s ease 0.3s both" }}>
              <MapPin size={14} className="text-accent" />
              <span>Tuléar / Fianarantsoa, Madagascar</span>
              <span className="mx-2">•</span>
              <span className="font-mono">Master II — ENI Fianarantsoa</span>
            </div>

            {/* Desc */}
            <p className="text-muted leading-relaxed mb-10 max-w-lg"
              style={{ animation: "fadeInUp 0.7s ease 0.4s both" }}>
              Développeur passionné spécialisé en applications web, desktop et mobile.
              Étudiant en Master II Informatique à l&apos;ENI Fianarantsoa, avec expérience
              en développement de solutions métiers réelles déployées en production.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12"
              style={{ animation: "fadeInUp 0.7s ease 0.5s both" }}>
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-display font-bold text-sm hover:bg-accent/90 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Voir mes projets</span>
                <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 btn-shimmer" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-accent/40 text-sm font-medium text-muted hover:text-text transition-all duration-300"
              >
                <Mail size={14} />
                Me contacter
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4"
              style={{ animation: "fadeInUp 0.7s ease 0.6s both" }}>
              {[
                { icon: Github, href: "https://github.com/23fulgence23", label: "GitHub" },
                { icon: Mail, href: "mailto:fulgencedamivelo6@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+261325320054", label: "Téléphone" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200 text-sm"
                  title={label}
                >
                  <div className="w-9 h-9 rounded border border-border hover:border-accent/30 flex items-center justify-center hover:bg-accent/5 transition-all duration-200">
                    <Icon size={16} />
                  </div>
                </a>
              ))}
              <span className="text-border text-xs ml-2 font-mono">+261 32 532 0054</span>
            </div>
          </div>

          {/* Right — Avatar / Code Card */}
          <div className="hidden lg:flex justify-center items-center"
            style={{ animation: "fadeInRight 0.8s ease 0.3s both" }}>
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl"
                style={{ background: "conic-gradient(from 0deg, #00d4ff, #7c3aed, #f59e0b, #00d4ff)", padding: "1px", animation: "spin 8s linear infinite" }}>
                <div className="w-full h-full rounded-2xl bg-bg" />
              </div>

              {/* Code card */}
              <div className="relative w-80 rounded-2xl border border-border bg-card p-0 overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-muted text-xs font-mono">profile.ts</span>
                </div>

                {/* Code content */}
                <div className="p-5 font-mono text-xs leading-relaxed">
                  <div className="text-accent2">const</div>
                  <div><span className="text-accent">developer</span> <span className="text-muted">=</span> {"{"}</div>
                  <div className="pl-4">
                    <div><span className="text-accent3">name</span><span className="text-muted">:</span> <span className="text-green-400">&quot;FULGENCE Damivelo&quot;</span>,</div>
                    <div><span className="text-accent3">age</span><span className="text-muted">:</span> <span className="text-orange-400">21</span>,</div>
                    <div><span className="text-accent3">location</span><span className="text-muted">:</span> <span className="text-green-400">&quot;Madagascar&quot;</span>,</div>
                    <div><span className="text-accent3">level</span><span className="text-muted">:</span> <span className="text-green-400">&quot;Master II&quot;</span>,</div>
                    <div className="mt-2"><span className="text-accent3">stack</span><span className="text-muted">:</span> [</div>
                    <div className="pl-4 text-green-400">&quot;Next.js&quot;, &quot;Laravel&quot;,</div>
                    <div className="pl-4 text-green-400">&quot;React Native&quot;,</div>
                    <div className="pl-4 text-green-400">&quot;Spring Boot&quot;</div>
                    <div>],</div>
                    <div className="mt-2"><span className="text-accent3">available</span><span className="text-muted">:</span> <span className="text-accent">true</span></div>
                  </div>
                  <div>{"}"}</div>
                  <div className="mt-4 text-muted">{`// 🚀 Prêt à coder !`}</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-xs font-mono animate-float">
                Next.js ⚡
              </div>
              <div className="absolute -bottom-6 -left-6 px-3 py-1.5 rounded-lg bg-accent2/10 border border-accent2/30 text-purple-400 text-xs font-mono animate-float" style={{ animationDelay: "2s" }}>
                React Native 📱
              </div>
              <div className="absolute top-1/2 -right-10 px-3 py-1.5 rounded-lg bg-accent3/10 border border-accent3/30 text-yellow-400 text-xs font-mono animate-float" style={{ animationDelay: "1s" }}>
                Laravel 🔧
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs">
          <span className="font-mono">scroll</span>
          <ArrowDown size={14} className="animate-bounce-slow" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
