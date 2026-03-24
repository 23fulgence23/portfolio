import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FULGENCE Damivelo | Développeur Full-Stack",
  description: "Portfolio de FULGENCE Damivelo — Développeur Full-Stack Web, Desktop & Mobile. Basé à Madagascar.",
  keywords: ["développeur", "full-stack", "web", "mobile", "Madagascar", "Next.js", "React"],
  authors: [{ name: "FULGENCE Damivelo" }],
  openGraph: {
    title: "FULGENCE Damivelo | Développeur Full-Stack",
    description: "Portfolio de FULGENCE Damivelo — Développeur Full-Stack Web, Desktop & Mobile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
