"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, BookOpen } from "lucide-react"

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
        className={`mx-auto max-w-3xl transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            {"Mon cursus"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {"Parcours Scolaire"}
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {formations.map((f) => (
            <div
              key={f.titre}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-secondary/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20">
                {f.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-medium text-cyan-400 uppercase tracking-wider">{f.annee}</p>
                <p className="mt-0.5 text-base font-semibold text-foreground">{f.titre}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{f.lieu}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
