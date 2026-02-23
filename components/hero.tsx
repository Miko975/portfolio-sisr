"use client"

import { ArrowDown, Shield } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-24">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow effect - Ajusté en Cyan */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div
        className={`relative z-10 flex max-w-3xl flex-col items-center text-center transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Badge - Taille réduite */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            {"Étudiant BTS SIO option SISR"}
          </span>
        </div>

        {/* Nom - Réduit de text-8xl à text-5xl/6xl */}
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {"Mikail "}
          <span className="text-cyan-400">{"Ozturk"}</span>
        </h1>

        {/* Description - Texte réduit et accents ajoutés */}
        <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {"Passionné par l'administration systèmes et réseaux, la cybersécurité et la protection des données. En route pour devenir expert infrastructure."}
        </p>

        {/* Boutons - Un peu plus compacts */}
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#competences"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <Shield className="h-4 w-4" />
            {"Mes compétences"}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {"Me contacter"}
          </a>
        </div>
      </div>

      <a
        href="#competences"
        className="absolute bottom-12 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Défiler vers les compétences"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
