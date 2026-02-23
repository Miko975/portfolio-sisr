"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Briefcase, BookOpen, BadgeCheck } from "lucide-react"

const formations = [
  {
    annee: "2024 - 2026",
    titre: "BTS SIO - Option SISR",
    lieu: "Lycee Rene Cassin, Strasbourg",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    annee: "2023 - 2024",
    titre: "Baccalaureat STMG",
    lieu: "Lycee Rene Cassin - Mention",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    annee: "2021",
    titre: "Brevet des colleges",
    lieu: "College Fustel de Coulanges - Mention",
    icon: <BookOpen className="h-5 w-5" />,
  },
]

const experiences = [
  {
    periode: "Stage - 10 semaines",
    titre: "Technicien support en ESN",
    description: "Montage, reparations et diagnostics PC. Support client et assistance technique.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    periode: "1 mois",
    titre: "Employe de restaurant",
    description: "Serveur et preparateur de commandes.",
    icon: <Briefcase className="h-5 w-5" />,
  },
]

const certifications = [
  { name: "PIX", org: "Competences numeriques" },
  { name: "RGPD", org: "CNIL" },
  { name: "SecNumAcademie", org: "ANSSI" },
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
    <section ref={ref} id="parcours" className="px-6 py-24 md:py-32">
      <div
        className={`mx-auto max-w-6xl transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            {"Mon parcours"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Formation & Experience"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {"Mon objectif est de devenir un expert en administration systemes et reseaux. Je suis motive par les defis techniques et la protection des donnees."}
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Formation */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
              {"Formation"}
            </h3>
            {formations.map((f) => (
              <div
                key={f.titre}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:bg-secondary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
                  {f.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-accent">{f.annee}</p>
                  <p className="mt-0.5 font-semibold text-foreground">{f.titre}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{f.lieu}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Experiences */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
              {"Experiences professionnelles"}
            </h3>
            {experiences.map((e) => (
              <div
                key={e.titre}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:bg-secondary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
                  {e.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-accent">{e.periode}</p>
                  <p className="mt-0.5 font-semibold text-foreground">{e.titre}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications - full width row below */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-accent">
            {"Certifications"}
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:bg-secondary/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <p className="font-semibold text-foreground">{cert.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{cert.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
