"use client";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, MessageCircle, Send, CheckCircle } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "fulgencedamivelo6@gmail.com", href: "mailto:fulgencedamivelo6@gmail.com", color: "#00d4ff" },
  { icon: Phone, label: "Téléphone 1", value: "+261 32 53 200 54", href: "tel:+261325320054", color: "#7c3aed" },
  { icon: Phone, label: "Téléphone 2", value: "+261 33 52 370 67", href: "tel:+261335237067", color: "#7c3aed" },
  { icon: Phone, label: "Téléphone 3", value: "+261 38 56 040 35", href: "tel:+261385604035", color: "#7c3aed" },
  { icon: MessageCircle, label: "WhatsApp", value: "+261 32 53 200 54", href: "https://wa.me/261325320054", color: "#25d366" },
  { icon: Github, label: "GitHub", value: "github.com/23fulgence23", href: "https://github.com/23fulgence23", color: "#f59e0b" },
  { icon: MapPin, label: "Localisation", value: "Tuléar / Fianarantsoa, Madagascar", href: "#", color: "#ff6b6b" },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:fulgencedamivelo6@gmail.com?subject=${encodeURIComponent(form.subject || "Contact depuis portfolio")}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 relative bg-surface/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-accent font-mono text-sm">06. Contact</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-2">
            Travaillons <span className="text-gradient">Ensemble</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl">
            Vous avez un projet ? Une opportunité ? N&apos;hésitez pas à me contacter. Je suis disponible pour des missions freelance, stages ou emplois.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className={`space-y-4 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            {contacts.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-opacity-40 card-hover group"
                style={{ ["--hover-color" as string]: color }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: color + "15", border: `1px solid ${color}30` }}>
                  <Icon size={16} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs text-muted font-mono">{label}</div>
                  <div className="text-sm font-medium text-text group-hover:text-accent transition-colors">{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right — form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                <Send size={16} className="text-accent" />
                Envoyer un message
              </h3>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                  <CheckCircle size={48} className="text-green-400" />
                  <p className="text-text font-medium">Merci ! Votre message a été préparé.</p>
                  <p className="text-muted text-sm">Votre client mail s&apos;est ouvert avec le message pré-rempli.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted font-mono mb-1.5 block">Votre nom *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Jean Dupont"
                        className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted font-mono mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="jean@exemple.com"
                        className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted font-mono mb-1.5 block">Sujet</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      placeholder="Projet web, collaboration..."
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted font-mono mb-1.5 block">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Décrivez votre projet ou votre demande..."
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-accent text-bg font-display font-bold text-sm hover:bg-accent/90 transition-all duration-300 relative overflow-hidden group"
                  >
                    <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Envoyer le message
                    <div className="absolute inset-0 btn-shimmer" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
