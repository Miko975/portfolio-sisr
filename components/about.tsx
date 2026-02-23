"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Briefcase, BookOpen, BadgeCheck } from "lucide-react"

const formations = [
  {
    annee: "2024 - 2026",
    titre: "BTS SIO - Option SISR",
    lieu: "Lycée René Cassin, Strasbourg",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    annee: "2023 - 2024",
    titre: "Baccalauréat STMG",
    lieu: "Lycée René Cassin - Mention",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    annee: "2021",
    titre: "Brevet des collèges",
    lieu: "Collège Fustel de Coulanges - Mention",
    icon: <BookOpen className="h-5 w-5" />,
  },
]

const experiences = [
  {
    periode: "Stage - 10 semaines",
    titre: "Technicien support en ESN",
    description: "Montage, réparations et diagnostics PC. Support client et assistance technique.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    periode: "1 mois",
    titre: "Employé de restaurant",
    description: "Serveur et préparateur de commandes.",
    icon: <Briefcase className="h-5 w-5" />,
  },
]

const certifications = [
  { name: "PIX", org: "Compétences numériques" },
  { name: "RGPD", org: "CNIL" },
  { name: "SecNumAcadémie", org: "ANSSI" },
  { name: "NetAcad", org: "CISCO" },
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="parcours" className="px-6 py-20 md:py-28">
      <div
        className={`mx-auto max-w-6xl transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            {"Mon parcours"}
          </p>
          {/* Titre réduit à text-3xl */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {"Formation & Expérience"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {"Mon objectif est de devenir un expert en administration systèmes et réseaux. Je suis motivé par les défis techniques et la protection des données."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
              {"Formation"}
            </h3>
            {formations.map((f) => (
              <div
                key={f.titre}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-secondary/30"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400/20">
                  {f.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-cyan-400">{f.annee}</p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">{f.titre}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{f.lieu}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
              {"Expériences professionnelles"}
            </h3>
            {experiences.map((e) => (
              <div
                key={e.titre}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-secondary/30"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400/20">
                  {e.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-cyan-400">{e.periode}</p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">{e.titre}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
