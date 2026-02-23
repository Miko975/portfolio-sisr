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

      {/* Glow effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div
        className={`relative z-10 flex max-w-3xl flex-col items-center text-center transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-sm text-muted-foreground">
            {"Etudiant BTS SIO option SISR"}
          </span>
        </div>

        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          {"Mikail "}
          <span className="text-accent">{"Ozturk"}</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {"Passionne par l'administration systemes et reseaux, la cybersecurite et la protection des donnees. En route pour devenir expert infrastructure."}
        </p>

        <div className="mt-10 flex items-center gap-4">
          <a
            href="#competences"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <Shield className="h-4 w-4" />
            {"Mes competences"}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {"Me contacter"}
          </a>
        </div>
      </div>

      <a
        href="#competences"
        className="absolute bottom-12 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Defiler vers les competences"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
