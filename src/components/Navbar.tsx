"use client";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "#about", label: "À Propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#education", label: "Formation" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.5 }
    );
    links.forEach(l => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-border" : ""
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
            <Terminal size={14} className="text-accent" />
          </div>
          <span className="font-display font-bold text-lg">
            <span className="text-accent">F</span>ULGENCE
            <span className="text-muted text-sm font-mono ml-1">_dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 relative group ${
                  activeSection === l.href.slice(1)
                    ? "text-accent"
                    : "text-muted hover:text-text"
                }`}
              >
                {l.label}
                {activeSection === l.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded border border-accent/40 text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300"
        >
          <span className="font-mono text-xs text-muted">./</span>
          Embauchez-moi
        </a>

        <button
          className="md:hidden text-muted hover:text-text"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-surface/95 backdrop-blur-xl border-b border-border px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-muted hover:text-accent transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 py-2 text-center border border-accent/40 rounded text-accent text-sm hover:bg-accent/10 transition-all"
          >
            Embauchez-moi
          </a>
        </div>
      </div>
    </header>
  );
}
