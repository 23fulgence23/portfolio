"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sun, Moon, Menu, X, Mail, Github, MessageCircle, MapPin, Languages, ExternalLink } from "lucide-react";
import { useApp } from "./Providers";
import { langs, ui, skills, experiences, education, contact, type T } from "@/lib/data";

const NAV = [["about", ui.about], ["skills", ui.skills], ["experience", ui.exp], ["education", ui.edu], ["contact", ui.contact]] as const;
const btn = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";

function Header() {
  const { lang, setLang, dark, toggle } = useApp();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-bold">Damivelo Fulgence</a>
        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Navigation">
          {NAV.map(([id, label]) => <a key={id} href={`#${id}`} className="text-muted hover:text-ink">{label[lang]}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-line p-0.5" role="group" aria-label="Langue">
            {langs.map((l) => (
              <button key={l.code} onClick={() => setLang(l.code)} aria-pressed={lang === l.code} title={l.name}
                className={`rounded-full p-1.5 transition ${lang === l.code ? "bg-teal/15 ring-1 ring-teal" : "opacity-60 hover:opacity-100"}`}>
                <img src={`https://flagcdn.com/w40/${l.flag}.png`} alt={l.name} width={22} height={15} className="h-[15px] w-[22px] rounded-[2px] object-cover" />
              </button>
            ))}
          </div>
          <button onClick={toggle} aria-label={dark ? "Mode clair" : "Mode sombre"} className="rounded-full border border-line p-2 text-muted hover:text-ink">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="rounded-full border border-line p-2 text-muted md:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden">
          {NAV.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-2 text-muted hover:text-ink">{label[lang]}</a>)}
        </nav>
      )}
    </header>
  );
}

function Photo() {
  const [ok, setOk] = useState(true);
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[2rem] border border-accent/40" aria-hidden />
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] bg-card">
        {ok ? (
          <img src="/images/photo.jpeg" alt="Damivelo Fulgence" className="h-full w-full object-cover" onError={() => setOk(false)} />
        ) : (
          <div className="grid h-full place-items-center font-display text-8xl font-bold text-teal">DF</div>
        )}
      </div>
    </div>
  );
}

function Hero() {
  const { lang } = useApp();
  const reduce = useReducedMotion();
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.2fr_1fr] md:pt-24">
      <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
        <p className="mb-3 text-muted">{ui.hello[lang]}</p>
        <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
          Damivelo<br />Fulgence
        </h1>
        <p className="mt-5 font-display text-xl font-semibold text-teal sm:text-2xl">{ui.role[lang]}</p>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">{ui.bio[lang]}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className={`${btn} bg-accent text-bg hover:opacity-90`}>{ui.cta1[lang]}</a>
          <a href="#experience" className={`${btn} border border-line hover:border-teal`}>{ui.cta2[lang]}</a>
        </div>
      </motion.div>
      <Photo />
    </section>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl border-t border-line px-5 py-16">
      <h2 className="mb-10 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

function Timeline({ items }: { items: { key: string; title: string; sub: string; meta: string; text?: string; link?: string; badge?: string }[] }) {
  const { lang } = useApp();
  return (
    <ol className="relative ml-2 border-l border-line">
      {items.map((it) => (
        <li key={it.key} className="relative pb-10 pl-8 last:pb-0">
          <span className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg ${it.badge ? "bg-accent" : "bg-teal"}`} />
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h3 className="font-display text-lg font-bold">{it.title}</h3>
            {it.badge && <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">{it.badge}</span>}
          </div>
          <p className="font-medium text-teal">{it.sub}</p>
          <p className="text-sm text-muted">{it.meta}</p>
          {it.text && <p className="mt-2 max-w-2xl leading-relaxed text-muted">{it.text}</p>}
          {it.link && (
            <a href={it.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
              {ui.visit[lang]} <ExternalLink size={14} />
            </a>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Portfolio() {
  const { lang } = useApp();
  const row = "flex items-start gap-3";
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="about" title={ui.about[lang]}>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="max-w-prose leading-relaxed text-muted">{ui.bio[lang]}</p>
            <div className="space-y-4 rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-bold">{ui.info[lang]}</h3>
              <p className={row}><MapPin size={18} className="mt-0.5 text-teal" /><span><b>{ui.location[lang]} : </b>{ui.place[lang]}</span></p>
              <p className={row}><Languages size={18} className="mt-0.5 text-teal" /><span><b>{ui.spoken[lang]} : </b>{ui.spokenList[lang]}</span></p>
              <p className={row}><Mail size={18} className="mt-0.5 text-teal" /><a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></p>
            </div>
          </div>
        </Section>

        <Section id="skills" title={ui.skills[lang]}>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g) => (
              <div key={g.title.en}>
                <h3 className="mb-3 font-display font-bold">{g.title[lang]}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => <li key={s} className="rounded-lg border border-line bg-card px-3 py-1 text-sm">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title={ui.exp[lang]}>
          <Timeline items={experiences.map((e, i) => ({
            key: String(i), title: e.role[lang], sub: e.org, meta: `${e.period[lang]} · ${e.place}`, text: e.desc[lang], link: e.link, badge: e.current ? ui.now[lang] : undefined,
          }))} />
        </Section>

        <Section id="education" title={ui.edu[lang]}>
          <Timeline items={education.map((e, i) => ({ key: String(i), title: e.title[lang], sub: e.school, meta: e.period }))} />
        </Section>

        <Section id="contact" title={ui.contact[lang]}>
          <p className="mb-6 max-w-prose text-muted">{ui.contactText[lang]}</p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${contact.email}`} className={`${btn} bg-accent text-bg hover:opacity-90`}><Mail size={16} /> Email</a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className={`${btn} border border-line hover:border-teal`}><MessageCircle size={16} /> WhatsApp</a>
            <a href={contact.github} target="_blank" rel="noreferrer" className={`${btn} border border-line hover:border-teal`}><Github size={16} /> GitHub</a>
          </div>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Damivelo Fulgence — {ui.rights[lang]}
      </footer>
    </>
  );
}
