"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { Sun, Moon, Menu, X, Mail, Github, MessageCircle, MapPin, Languages, ExternalLink } from "lucide-react";
import { useApp } from "./Providers";
import { langs, ui, skills, experiences, education, contact } from "@/lib/data";

const NAV = [["about", ui.about], ["skills", ui.skills], ["experience", ui.exp], ["education", ui.edu], ["contact", ui.contact]] as const;
const btn = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition";

/* Carte avec halo qui suit la souris (réaction au survol) */
function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div onMouseMove={onMove} className={`spot relative overflow-hidden border border-line bg-card/60 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

/* Bouton magnétique */
function Magnetic({ children }: { children: React.ReactNode }) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  return (
    <motion.div
      style={{ x, y }}
      className="inline-block"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.25);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-teal to-accent" />;
}

/* Fond : mer (teal) et coucher de soleil (ambre) de Toliara */
function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="drift absolute -left-40 -top-48 h-[36rem] w-[36rem] rounded-full bg-teal/20 blur-[130px]" />
      <div className="drift absolute -right-40 top-[40%] h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-[130px]" style={{ animationDelay: "-6s" }} />
      <div className="grain absolute inset-0 opacity-[0.05]" />
    </div>
  );
}

function Header() {
  const { lang, setLang, dark, toggle } = useApp();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-3 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-5xl">
      <div className="flex h-14 items-center justify-between rounded-full border border-line bg-bg/70 px-4 shadow-lg shadow-black/5 backdrop-blur-xl">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">FULGENCE Damivelo<span className="text-accent">.</span></a>
        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Navigation">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`relative rounded-full px-3.5 py-1.5 transition-colors ${active === id ? "text-ink" : "text-muted hover:text-ink"}`}>
              {active === id && <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-full bg-teal/15 ring-1 ring-teal/40" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
              {label[lang]}
            </a>
          ))}
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
          <button onClick={toggle} aria-label={dark ? "Mode clair" : "Mode sombre"} className="rounded-full border border-line p-2 text-muted transition hover:rotate-12 hover:text-ink">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="rounded-full border border-line p-2 text-muted md:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mt-2 flex flex-col gap-1 rounded-3xl border border-line bg-bg/90 px-5 py-3 backdrop-blur-xl md:hidden">
          {NAV.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-2 text-muted hover:text-ink">{label[lang]}</a>)}
        </nav>
      )}
    </header>
  );
}

/* Nom révélé lettre par lettre */
function Word({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.12em]" aria-label={text}>
      {text.split("").map((c, i) => (
        <motion.span key={i} aria-hidden className="inline-block"
          initial={reduce ? false : { y: "115%", rotate: 7 }} animate={{ y: 0, rotate: 0 }}
          transition={{ delay: delay + i * 0.045, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}>
          {c}
        </motion.span>
      ))}
    </span>
  );
}

/* Photo = un « soleil » : anneau ambre tournant + forme qui se déforme */
function Photo() {
  const [ok, setOk] = useState(true);
  const reduce = useReducedMotion();
  return (
    <motion.div className="relative mx-auto aspect-square w-full max-w-sm"
      initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}>
      <div className="rot absolute -inset-5 rounded-full opacity-80 blur-2xl" aria-hidden
        style={{ background: "conic-gradient(from 0deg, rgb(var(--accent)), rgb(var(--teal)), rgb(var(--accent)))" }} />
      <div className="rot absolute -inset-2 rounded-full" aria-hidden
        style={{ background: "conic-gradient(from 0deg, rgb(var(--accent)), transparent 40%, rgb(var(--teal)), transparent 80%, rgb(var(--accent)))", padding: 2, WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
      <div className="blob relative h-full w-full overflow-hidden border border-line bg-card shadow-2xl">
        {ok ? (
          <img src="/images/photo.jpeg" alt="FULGENCE Damivelo" className="h-full w-full object-cover" onError={() => setOk(false)} />
        ) : (
          <div className="grid h-full place-items-center font-display text-8xl font-bold text-teal">DF</div>
        )}
      </div>
    </motion.div>
  );
}

function Hero() {
  const { lang } = useApp();
  const reduce = useReducedMotion();
  const fade = (d: number) => ({ initial: reduce ? false : { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.7, ease: "easeOut" } } as const);
  return (
    <section id="top" className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-14 px-5 pb-20 pt-32 md:grid-cols-[1.25fr_1fr]">
      <div>
        <motion.p {...fade(0.1)} className="mb-4 text-lg text-muted">{ui.hello[lang]}</motion.p>
        <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl">
          <Word text="FULGENCE" delay={0.15} />
          <Word text="Damivelo" delay={0.45} />
        </h1>
        <motion.p {...fade(1.0)} className="mt-6 font-display text-xl font-semibold text-teal sm:text-2xl">{ui.role[lang]}</motion.p>
        <motion.p {...fade(1.15)} className="mt-5 max-w-xl leading-relaxed text-muted">{ui.bio[lang]}</motion.p>
        <motion.div {...fade(1.3)} className="mt-9 flex flex-wrap gap-3">
          <Magnetic><a href="#contact" className={`${btn} bg-accent text-bg shadow-lg shadow-accent/30 hover:opacity-90`}>{ui.cta1[lang]}</a></Magnetic>
          <Magnetic><a href="#experience" className={`${btn} border border-line hover:border-teal`}>{ui.cta2[lang]}</a></Magnetic>
        </motion.div>
      </div>
      <Photo />
    </section>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="mb-12 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
        <span className="mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-accent to-teal" />
      </h2>
      {children}
    </section>
  );
}

/* Timeline : la ligne se dessine pendant le défilement */
function Timeline({ items }: { items: { key: string; title: string; sub: string; meta: string; text?: string; link?: string; badge?: string }[] }) {
  const { lang } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.55"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return (
    <div ref={ref} className="relative ml-2">
      <div className="absolute inset-y-0 left-0 w-px bg-line" />
      <motion.div style={{ scaleY }} className="absolute inset-y-0 left-0 w-px origin-top bg-gradient-to-b from-teal to-accent" />
      <ol className="space-y-6">
        {items.map((it) => (
          <li key={it.key} className="relative pl-9">
            <span className={`absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full border-2 border-bg ${it.badge ? "bg-accent pulse-ring" : "bg-teal"}`} />
            <SpotCard className="rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-display text-lg font-bold">{it.title}</h3>
                {it.badge && <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">{it.badge}</span>}
              </div>
              <p className="font-medium text-teal">{it.sub}</p>
              <p className="text-sm text-muted">{it.meta}</p>
              {it.text && <p className="mt-3 max-w-2xl leading-relaxed text-muted">{it.text}</p>}
              {it.link && (
                <a href={it.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
                  {ui.visit[lang]} <ExternalLink size={14} />
                </a>
              )}
            </SpotCard>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Portfolio() {
  const { lang } = useApp();
  const row = "flex items-start gap-3";
  return (
    <>
      <ScrollBar />
      <Backdrop />
      <Header />
      <main>
        <Hero />

        <Section id="about" title={ui.about[lang]}>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="max-w-prose text-lg leading-relaxed text-muted">{ui.bio[lang]}</p>
            <SpotCard className="space-y-4 rounded-3xl p-7">
              <h3 className="font-display text-lg font-bold">{ui.info[lang]}</h3>
              <p className={row}><MapPin size={18} className="mt-0.5 text-teal" /><span><b>{ui.location[lang]} : </b>{ui.place[lang]}</span></p>
              <p className={row}><Languages size={18} className="mt-0.5 text-teal" /><span><b>{ui.spoken[lang]} : </b>{ui.spokenList[lang]}</span></p>
              <p className={row}><Mail size={18} className="mt-0.5 text-teal" /><a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></p>
            </SpotCard>
          </div>
        </Section>

        <Section id="skills" title={ui.skills[lang]}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g) => (
              <SpotCard key={g.title.en} className="rounded-2xl p-6">
                <h3 className="mb-4 font-display font-bold">{g.title[lang]}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-lg border border-line bg-bg/60 px-3 py-1 text-sm transition hover:-translate-y-0.5 hover:border-teal hover:text-teal">{s}</li>
                  ))}
                </ul>
              </SpotCard>
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
          <SpotCard className="rounded-3xl p-8 sm:p-12">
            <p className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">{ui.contactText[lang]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic><a href={`mailto:${contact.email}`} className={`${btn} bg-accent text-bg shadow-lg shadow-accent/30 hover:opacity-90`}><Mail size={16} /> Email</a></Magnetic>
              <Magnetic><a href={contact.whatsapp} target="_blank" rel="noreferrer" className={`${btn} border border-line hover:border-teal`}><MessageCircle size={16} /> WhatsApp</a></Magnetic>
              <Magnetic><a href={contact.github} target="_blank" rel="noreferrer" className={`${btn} border border-line hover:border-teal`}><Github size={16} /> GitHub</a></Magnetic>
            </div>
          </SpotCard>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} FULGENCE Damivelo — {ui.rights[lang]}
      </footer>
    </>
  );
}
