"use client";
import { Github, Mail, Phone, Heart, Terminal } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-accent/10 border border-accent/30 flex items-center justify-center">
              <Terminal size={14} className="text-accent" />
            </div>
            <span className="font-display font-bold">
              <span className="text-accent">F</span>ULGENCE
              <span className="text-muted text-sm font-mono ml-1">Damivelo</span>
            </span>
          </div>

          {/* Center */}
          <p className="text-muted text-xs font-mono flex items-center gap-1.5">
            © {year} — Fait avec <Heart size={12} className="text-red-400 fill-red-400" /> & Next.js
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
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
                className="w-8 h-8 rounded border border-border text-muted hover:text-accent hover:border-accent/30 flex items-center justify-center transition-all duration-200"
                title={label}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-muted/50 text-xs font-mono">
            Développeur Full-Stack — Web · Mobile · Desktop — Madagascar 🇲🇬
          </p>
        </div>
      </div>
    </footer>
  );
}
