"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { L } from "@/lib/data";

type Ctx = { lang: L; setLang: (l: L) => void; dark: boolean; toggle: () => void };
const C = createContext<Ctx>({ lang: "fr", setLang: () => {}, dark: true, toggle: () => {} });
export const useApp = () => useContext(C);

export default function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<L>("fr");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    try {
      const l = localStorage.getItem("lang") as L | null;
      if (l && ["fr", "en", "mg"].includes(l)) { setLangState(l); document.documentElement.lang = l; }
    } catch {}
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const setLang = (l: L) => {
    setLangState(l);
    document.documentElement.lang = l;
    try { localStorage.setItem("lang", l); } catch {}
  };
  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    try { localStorage.setItem("theme", d ? "dark" : "light"); } catch {}
  };
  return <C.Provider value={{ lang, setLang, dark, toggle }}>{children}</C.Provider>;
}
